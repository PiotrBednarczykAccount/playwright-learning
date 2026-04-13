import {BasePage} from './BasePage'

export class LoginPage extends BasePage{
    
    async login(username: string, password: string) {
        await this.page.getByLabel('Username').fill(username);
        await this.page.getByLabel('Password').fill(password);
        await this.page.getByRole('button', {name: 'Submit'}).click();
    }

    getSuccessMessage() {
        return this.page.getByText('Logged In Successfully')
    }

    getErrorMessage() {
        return this.page.locator('#error');
    }
}