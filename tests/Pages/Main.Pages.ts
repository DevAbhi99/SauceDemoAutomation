import { MainLocators } from "../Locators/Main.Locator";
import {type Page, type Locator} from '@playwright/test';


export class MainPages{

    readonly page:Page;
    readonly addToCartElement:Locator;
    readonly cartElement:Locator;
    readonly checkoutElement:Locator;
    readonly firstNameElement:Locator;
    readonly lastNameElement:Locator;
    readonly postalCodeElement:Locator;
    readonly continueBtnElement:Locator;
    readonly finishBtnElement:Locator;


    constructor(page:Page){

        this.page=page;
        this.addToCartElement=this.page.locator(MainLocators.AddToCardLocator);
        this.cartElement=this.page.locator(MainLocators.cartLocator);
        this.checkoutElement=this.page.locator(MainLocators.checkoutBtnLocator);
        this.firstNameElement=this.page.locator(MainLocators.firstNameLocator);
        this.lastNameElement=this.page.locator(MainLocators.lastNameLocator);
        this.postalCodeElement=this.page.locator(MainLocators.postalCodeLocator);
        this.continueBtnElement=this.page.locator(MainLocators.continueBtnLocator);
        this.finishBtnElement=this.page.locator(MainLocators.finishBtnLocator);
    }

    async addToCartClick(){
        await this.addToCartElement.click();
    }

    async cartClick(){
        await this.cartElement.click();
    }

    async checkoutClick(){
        await this.checkoutElement.click();
    }

    async firstNameFill(fname:string){
        await this.firstNameElement.fill(fname);
    }

    async lastNameFill(lname:string){
        await this.firstNameElement.fill(lname);
    }

    async postalCodeFill(pcode:string){
        await this.postalCodeElement.fill(pcode);
    }

    async continueBtnClick(){
        await this.continueBtnElement.click();
    }

    async finishBtnClick(){
        await this.finishBtnElement.click();
    }
}
