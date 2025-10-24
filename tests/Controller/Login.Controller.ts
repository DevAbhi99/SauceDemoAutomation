import { LoginMain } from "../Pages/Login.Pages";
import { type Page } from "@playwright/test";

export class LoginMainController{


readonly page:Page;

constructor(page:Page){
    this.page=page;
}


async loginController(username:string, password:string){

    const obj=new LoginMain(this.page);

    await obj.usernameFill(username);

    await obj.passwordFill(password);

    await obj.loginBtnClick();
}

}