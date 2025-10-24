import { LoginLocators } from "../Locators/Logintest.Locator";
import {type Page, type Locator} from '@playwright/test';


export class LoginPages{

    readonly page:Page;
    readonly usernameElement:Locator;
    readonly passwordElement:Locator;
    readonly loginBtnElement:Locator;


    constructor(page:Page){
        this.page=page;
        this.usernameElement=this.page.locator(LoginLocators.usernameLocator);
        this.passwordElement=this.page.locator(LoginLocators.passwordLocator);
        this.loginBtnElement=this.page.locator(LoginLocators.loginBtnLocator);
    }


    async usernameFill(username:string){

        await this.usernameElement.fill(username);
    }

    async passwordFill(password:string){
        await this.passwordElement.fill(password);
    }

    async loginBtnClick(){
        await this.loginBtnElement.click();
    }

}