import { test, expect } from '@playwright/test';
import { GooglePage } from '../pages/GooglePage';

test.describe('Google Search', () => {

  let googlePage: GooglePage;

  test.beforeEach(async ({ page }) => {
    googlePage = new GooglePage(page);
    await googlePage.open();
    await googlePage.acceptCookies();
  });

  test.afterEach(async ({ page }, testInfo) => {
  if (testInfo.status !== 'passed') {
    await page.screenshot({ path: `test-results/failed-${testInfo.title}.png` });
  }
});


  test('page has title @smoke', async ({ page }) => {
    await expect(page).toHaveTitle(/Google/);
  });

  test('search works @regression', async ({ page }) => {
    await test.step('Type search query', async () => {
    await googlePage.search('Playwright');
    });

    await test.step('Verify result page title contains search quesry', async () => {
      await expect(page).toHaveTitle(/Playwright/);
    });
  });
});
