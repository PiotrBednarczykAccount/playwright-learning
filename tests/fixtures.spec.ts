import {test, expect} from '../fixtures/base';

test('Playwright homepage has correct title', async ({page, playwrightPage}) => {
    await test.step('Step 1: Verify page title contains Playwright', async() => {
        await expect(page).toHaveTitle(/Playwright/);
    });
});