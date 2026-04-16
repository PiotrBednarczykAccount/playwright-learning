import { Page } from '@playwright/test';
import { IPage } from '../interfaces/IPage'

// BasePage is the parent class for all page objects
// It implements IPage interface - guarantees that navigate() method exists
export class BasePage implements IPage {
    page: Page;

    // Constructor receives Playwright's page object and stores it for use in child classes
    constructor(page: Page) {
        this.page = page;
    }

    // Navigates to the given URL - inherited by all child page objects
    async navigate(url: string) {
        await this.page.goto(url);
    }
}