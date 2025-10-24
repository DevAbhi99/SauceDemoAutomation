import { LogoutPages } from "../Pages/Logout.Pages";
import { type Page } from "@playwright/test";


export class LogoutControllers{

readonly page:Page;

constructor(page:Page){

    this.page=page;
}

async logoutController(){

    const obj=new LogoutPages(this.page);

    await obj.menuClick();

    await obj.logoutClick();
}

}