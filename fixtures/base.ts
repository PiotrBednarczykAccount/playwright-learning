import { test as base } from '@playwright/test'

type MyFixtures = {
    playwrightPage: void;
};

export const test = base.extend<MyFixtures>({
    playwrightPage: async ({page}, use) => {
        await page.goto('https://playwright.dev/');
        await use();
    }
});

export { expect } from '@playwright/test';
