import {test, expect} from '@playwright/test';
import { GooglePage } from '../pages/GooglePage';

test('google page has title @smoke', async ({ page }) => {
    const googlePage = new GooglePage(page);
    await googlePage.open();
    await expect(page).toHaveTitle(/Google/);
});

test('google search works @regression', async ({ page }) => {
    const googlePage = new GooglePage(page);
    await googlePage.open();
    await googlePage.acceptCookies();
    await googlePage.search('Playwright');
    await expect(page).toHaveTitle(/Playwright/);
});
    