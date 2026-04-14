import {test, expect} from '@playwright/test'

test.describe('Request Routing', () => {

    test('Should handle 500 server error', async({page}) => {
        await page.route('**/users/1', async route => {
            await route.fulfill({
                status: 500,
            });
        });

        const response = await page.goto('https://jsonplaceholder.typicode.com/users/1', { waitUntil: 'commit' });

        expect(response?.status()).toBe(500);

    
    });

    test('Should block request', async({page}) => {
    await page.route('**/users/1', async route => {
        await route.abort();        
    });

    let failed = false;
    try {
        await page.goto('https://jsonplaceholder.typicode.com/users/1', { waitUntil: 'commit' });
    } catch (e) {
        failed = true;
    }
    
    expect(failed).toBe(true);
});
 
});