import { test, expect } from '@playwright/test';
import { GooglePage } from '../pages/GooglePage';

test.describe('Google Search', () => {

  let googlePage: GooglePage;

  test.beforeEach(async ({ page }) => {
    googlePage = new GooglePage(page);
    await googlePage.open();
    await googlePage.acceptCookies();
  });

  test('page has title @smoke', async ({ page }) => {
    await expect(page).toHaveTitle(/Google/);
  });

  test('search works @regression', async ({ page }) => {
    await googlePage.search('Playwright');
    await expect(page).toHaveTitle(/Playwright/);
  });

});
