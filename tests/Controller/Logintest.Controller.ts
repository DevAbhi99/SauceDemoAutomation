import { LoginPages } from "../Pages/Logintest.Pages";
import {type Page} from '@playwright/test';
import { Credentials } from "../Data/credentials";


export class LoginController{

readonly page:Page;

constructor(page:Page){
this.page=page;
}

//storing array or list of credentials

obj=new Credentials();

 arr=this.obj.userData;

async loginController(){

    const obj1=new LoginPages(this.page);

for (let i=0;i<this.arr.length;i++){

   await obj1.usernameFill(this.arr[i]['username']);

    await obj1.passwordFill(this.arr[i]['password']);

    await obj1.loginBtnClick();


} 

}




}