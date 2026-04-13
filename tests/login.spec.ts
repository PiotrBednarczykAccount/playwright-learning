import { LoginPage } from '../pages/LoginPage';
import { test, expect } from '@playwright/test';

test.describe('Positive tests', () => {
    test('Should login successfully with valid credentials', async ({ page }) => {
        const loginPage = new LoginPage(page);

        await test.step('Step 1: Navigate to login page', async () => {
            await loginPage.navigate('https://practicetestautomation.com/practice-test-login/');
        });

        await test.step('Step 2: Login with valid credentials', async () => {
            await loginPage.login(process.env.LOGIN_USERNAME!, process.env.LOGIN_PASSWORD!);
        });

        await test.step('Step 3: Verify successful login', async () => {
            await expect(loginPage.getSuccessMessage()).toBeVisible();
        });
    });
});

test.describe('Negative tests', () => {
    test('Should show error for invalid username', async ({page}) => { 
        const loginPage = new LoginPage(page);

        await test.step('Step 1: Navigate to login page', async () => {
            await loginPage.navigate('https://practicetestautomation.com/practice-test-login/');
        });

        await test.step('Step 2: Login with invalid credentials', async () => {
            await loginPage.login('invalidUser', 'Password123')
        });

        await test.step('Step 3: Verify error message is displayed', async () =>{
            await expect(loginPage.getErrorMessage()).toBeVisible();
        });
    });

    test('Should show error for invalid password', async ({page}) => {
        const loginPage = new LoginPage(page);

        await test.step('Step 1: Navigate to login page', async () => {
            await loginPage.navigate('https://practicetestautomation.com/practice-test-login/');
        });

        await test.step('Step 2: Login with invalid credentials', async () => {
            await loginPage.login('student', 'invalidPassword')
        });

        await test.step('Step 3: Verify error message is displayed', async() => {
            await expect(loginPage.getErrorMessage()).toBeVisible();
        });

        await test.step('Step 4: Verify error message text is correct', async() => {
            await expect(loginPage.getErrorMessage()).toHaveText('Your password is invalid!');
        });
    });
});