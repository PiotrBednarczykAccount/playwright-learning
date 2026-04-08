import {test, expect} from '@playwright/test'

test.use({storageState: 'auth.json'});

test.describe('Authenticated user tests', () => {
    test('Should access protected page without logging in again', async({page}) => {
        await test.step('Step 1: Navigate to protected page', async () => {
            await page.goto('https://practicetestautomation.com/logged-in-successfully/');
        });

        await test.step('Step 2: Verify successful login', async() => {
            await expect(page.getByRole('heading', { name: 'Logged In Successfully' })).toBeVisible();        
        });

    });
});