import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages/LoginPage';

const testData = [
    { username: 'student', password: 'Password123', expected: 'success' },
    { username: 'wrongUser', password: 'Password123', expected: 'error' },
    { username: 'student', password: 'wrongPass', expected: 'error' },
]

for (const data of testData) {
    test(`Login test for ${data.username} expects ${data.expected}`, async ({ page }) => {
        const loginPage = new LoginPage(page);
        await test.step('Navigate to login page', async () => {
            await loginPage.navigate('https://practicetestautomation.com/practice-test-login/');
        });
        await test.step('Login with test credentials', async () => {
            await loginPage.login(data.username, data.password);
        });
        await test.step('Verify expected result', async () => {
            if (data.expected === 'success') {
                await expect(loginPage.getSuccessMessage()).toBeVisible();
            } else {
                await expect(loginPage.getErrorMessage()).toBeVisible();
            }
        });
    });
};