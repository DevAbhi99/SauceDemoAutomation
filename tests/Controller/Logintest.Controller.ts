import { LoginPages } from "../Pages/Logintest.Pages";
import {type Page} from '@playwright/test';



export class LoginController{

readonly page:Page;

constructor(page:Page){
this.page=page;
}

async loginController(username:string, password:string){

const obj=new LoginPages(this.page);

await obj.usernameFill(username);

await obj.passwordFill(password);

await obj.loginBtnClick();

await this.page.locator("//button[text()='Open Menu']").click();

await this.page.locator("//a[text()='Logout']").click();

}


}