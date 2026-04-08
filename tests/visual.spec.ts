import {test, expect} from '@playwright/test'

test.describe('Visual regression tests', () => {
    test('Playwright homepage matches visual snapshot', async ({page}) => {
        await test.step('Step 1: Navigate to page playwright.dev', async() => {
            await page.goto('https://playwright.dev/');
        });

        await test.step('Step 2: Compare page screenshot with baseline', async() => {
            await expect(page).toHaveScreenshot();
        })
    })
});