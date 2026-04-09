import { LoginPage } from '../pages/LoginPage';
import { test, expect } from '@playwright/test';

test.describe('Login Page Tests', () => {
    test('Should login successfully with valid credentials', async ({ page }) => {
        const loginPage = new LoginPage(page);

        await test.step('Step 1: Navigate to login page', async () => {
            await loginPage.navigate();
        });

        await test.step('Step 2: Login with valid credentials', async () => {
            await loginPage.login(process.env.LOGIN_USERNAME!, process.env.LOGIN_PASSWORD!);
        });

        await test.step('Step 3: Verify successful login', async () => {
            await expect(loginPage.getSuccessMessage()).toBeVisible();
        });
    });
});