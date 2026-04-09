import { Page} from '@playwright/test';

export class LoginPage{
    page: Page;

    constructor(page: Page){
        this.page = page;
    }

    async navigate() {
        await this.page.goto('https://practicetestautomation.com/practice-test-login/');
    }

    async login(username: string, password: string) {
        await this.page.getByLabel('Username').fill(username);
        await this.page.getByLabel('Password').fill(password);
        await this.page.getByRole('button', {name: 'Submit'}).click();
    }

    getSuccessMessage() {
        return this.page.getByText('Logged In Successfully')
    }
}