import { Page} from '@playwright/test';

export class GooglePage {
    readonly page: Page;

constructor (page: Page) {
    this.page = page;
}

async open() {
    await this.page.goto('/');
}

async acceptCookies() {
    const cookiePL = this.page.getByRole('button', { name: 'Zaakceptuj wszystko'});
    const cookieEN = this.page.getByRole('button', { name: 'Accept all'});
    if (await cookiePL.isVisible()) {
        await cookiePL.click();
    } else if (await cookieEN.isVisible()) {
        await cookieEN.click();
    }
}

async search(text: string) {
    await this.page.locator('textarea[name="q"]').fill(text);
    await this.page.locator('textarea[name="q"]').press('Enter');
}

}