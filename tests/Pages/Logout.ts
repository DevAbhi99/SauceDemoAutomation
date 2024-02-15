import { test, expect, type Locator, type Page } from '@playwright/test';

export class Logout{

readonly page:Page;    
readonly logoutTab:Locator;
readonly logoutBtn:Locator;

constructor(page:Page){
this.page=page;
this.logoutTab=page.locator("//button[text()='Open Menu']");
this.logoutBtn=page.locator("//a[text()='Logout']");
}

async tab(){
    await this.logoutTab.click();
}

async logout(){
    await this.logoutBtn.click();
}

}