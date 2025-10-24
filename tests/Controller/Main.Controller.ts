import { MainPages } from "../Pages/Main.Pages";
import {type Page} from '@playwright/test'; 

export class MainController{

    readonly page:Page;

    constructor(page:Page){
    this.page=page;
    }

    async mainController(){

        const obj=new MainPages(this.page);

        await obj.addToCartClick();

        await obj.cartClick();

        await obj.checkoutClick();

        await obj.firstNameFill('Karan');

        await obj.lastNameFill('Sharma');

        await obj.postalCodeFill('123456');

        await obj.continueBtnClick();

        await this.page.screenshot({path:'/Screenshots/billingPage.png', fullPage:true});

        await obj.finishBtnClick();

        await this.page.screenshot({path:'/Screenshots/confirmationPage.png', fullPage:true});

    }


}