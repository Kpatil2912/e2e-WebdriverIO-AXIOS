import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get inputUsername () {
        return $('input[name="userNameOrEmailAddress"]');
    }

    public get inputPassword () {
        return $('input[name="password"]');
    }

    public get btnPCUmodule  () {
        return $('span[aria-label="Pcumd"]');
    }

    public get btnCIP () {
        return $('span[aria-label="CIP/R&R "]');
    }

    public get btnCreateNewRecord () {
        return $('button[title="Create New Record"]');
    }

    public get btnSubmit () {
        return $('button[title="Login"]');
    }
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async login (username: string, password: string) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }
    public async createNewRecord () {
        await this.btnPCUmodule.click();
        await this.btnCIP.click();
        await this.btnCreateNewRecord.waitForClickable({
            timeout: 40000,
            timeoutMsg: 'Create New Record button was not clickable within 40 seconds'
        });
        await this.btnCreateNewRecord.click();
    }


    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open('account/login');
    }

    
}

export default new LoginPage();
