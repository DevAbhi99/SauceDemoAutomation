import { test, expect, type Locator, type Page } from '@playwright/test';

export class Login{

readonly page:Page;
readonly username:Locator;
readonly password:Locator;
readonly loginBtn:Locator;

constructor(page:Page){
this.page=page;
this.username=page.locator("//input[@name='user-name']");
this.password=page.locator("//input[@name='password']");
this.loginBtn=page.locator("//input[@id='login-button']");
}

async goto(){
    await this.page.goto("https://www.saucedemo.com/v1/");
}

async uname(){

    await this.username.click();
    await this.username.fill("standard_user");
}

async passw(){

    await this.password.click();
    await this.password.fill("secret_sauce");
}

async login(){

    await this.loginBtn.click();
}

}