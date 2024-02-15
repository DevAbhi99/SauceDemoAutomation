import { test, expect, type Locator, type Page } from '@playwright/test';

export class Main{

    readonly page:Page;
    readonly shoppingBag:Locator;
    readonly addToCartBtn:Locator;
    readonly shoppingCartBtn:Locator;
    readonly checkoutBtn:Locator;
    readonly firstname:Locator;
    readonly lastname:Locator;
    readonly zipcode:Locator;
    readonly continueBtn:Locator;
    readonly finishBtn:Locator;

    constructor(page:Page){
    this.page=page;
    this.shoppingBag=page.locator("//div[text()='Sauce Labs Backpack']");
    this.addToCartBtn=page.locator("//button[text()='ADD TO CART']");
    this.shoppingCartBtn=page.locator("//div[@id='shopping_cart_container']/a[1]");
    this.checkoutBtn=page.locator("//a[text()='CHECKOUT']");
    this.firstname=page.locator("//input[@id='first-name']");
    this.lastname=page.locator("//input[@id='last-name']");
    this.zipcode=page.locator("//input[@id='postal-code']");
    this.continueBtn=page.locator("//input[@value='CONTINUE']");
    this.finishBtn=page.locator("//a[text()='FINISH']");
    }




}