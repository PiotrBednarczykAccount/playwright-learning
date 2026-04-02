import {test, expect} from '@playwright/test';
import { GooglePage } from '../pages/GooglePage';

test('strona google ma tytuł', async ({page}) => {
    const googlePage = new GooglePage(page);
    await googlePage.open();
    await expect(page).toHaveTitle(/Google/);
});

test('google ma pole wyszukiwania', async ({page}) => {
    const googlePage = new GooglePage(page);
    await googlePage.open();
    await googlePage.acceptCookies();
    await googlePage.search('Playwright');
    await expect(page).toHaveTitle(/Playwright/);
});
    