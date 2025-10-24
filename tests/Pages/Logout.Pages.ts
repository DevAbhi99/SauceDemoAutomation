import { LogoutLocators } from "../Locators/Logout.Locator";
import {type Page, type Locator} from '@playwright/test';

export class LogoutPages{
    
    readonly page:Page;
    readonly menuElement:Locator;
    readonly logoutElement:Locator;


    constructor(page:Page){
        this.page=page;
        this.menuElement=this.page.locator(LogoutLocators.menuLocator);
        this.logoutElement=this.page.locator(LogoutLocators.logoutLocator);
    }


    async menuClick(){
        await this.menuElement.click();
    }

    async logoutClick(){
        await this.logoutElement.click();
    }
}