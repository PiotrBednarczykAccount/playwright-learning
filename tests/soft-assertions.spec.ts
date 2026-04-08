import {test, expect} from '@playwright/test'

test.describe('Testing soft assertions', () =>{
    test('This test uses to check soft-assertions', async({page}) => {
        
            await test.step('Navigate to playwright.dev', async() => {
            await page.goto('https://playwright.dev/')
        });

            await test.step('Verify page title does not contain Google', async() => {
            await expect.soft(page).not.toHaveTitle(/Google/);
        });

            await test.step('Verify page title contains Playwright', async () => {
            await expect.soft(page).toHaveTitle(/Playwright/);
        });

            await test.step('Verify page URL contains playwright.dev', async() => {
            await expect.soft(page).toHaveURL(/playwright.dev/);
        });

    });  
});