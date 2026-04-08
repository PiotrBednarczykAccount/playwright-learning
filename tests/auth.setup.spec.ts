import {test, expect} from '@playwright/test'

test.describe('Login and save authentication state', () => {
    test('Login as student and save session to auth.json', async({page}) => {
        await test.step('Step 1: Navigate to login page', async () => {
            await page.goto('https://practicetestautomation.com/practice-test-login/')
        });

        await test.step('Step 2: Fill in username', async () => {
            await page.getByLabel('Username').fill('student');
        });

        await test.step('Step 3: Fill in password', async() => {
            await page.getByLabel('Password').fill('Password123');
        });

        await test.step('Step 4: Submit login form', async() => {
            await page.getByRole('button', {name: 'Submit'}).click();
        });

        await test.step('Step 5: Verify successful login', async() => {
            await expect(page.getByText('Logged In Successfully')).toBeVisible();
        });

        await test.step('Step 6: Save authentication state to file', async() => {
            await page.context().storageState({path: 'auth.json'});
        });

    });
});