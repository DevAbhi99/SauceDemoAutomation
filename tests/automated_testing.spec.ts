import { test,  expect } from "@playwright/test";
import { LoginController } from "./Controller/Logintest.Controller";
import { LoginMainController } from "./Controller/Login.Controller";
import { MainController } from "./Controller/Main.Controller";
import { LogoutControllers } from "./Controller/Logout.Controller";
import { Texts } from "./Data/Texts";
import { Credentials } from "./Data/credentials";
import dotenv from 'dotenv';



dotenv.config();

const baseUrl:string=`${process.env.BASE_URL}`;

test('login testing', async({page})=>{

await page.goto(baseUrl);

const obj=new LoginController(page);

const obj1=new Credentials();

const arr=obj1.userData;

const time=Date.now();

for(let i=0;i<arr.length;i++){

    await obj.loginController(arr[i]['username'],arr[i]['password']);

    console.log(Date.now()-time);
}




})

/*
test.beforeEach(async({page})=>{

    await page.goto(baseUrl);

    const obj=new LoginMainController(page);

    await obj.loginController('standard_user','secret_sauce');

})
*/

/*
test('flow test', async({page})=>{

    const obj=new MainController(page);

    await obj.mainController();

})*/

/*
test('testing the items', async({page})=>{

    const obj=new Texts();

   const arr=obj.data;
    
    const names:any[]=[];

    const prices:any[]=[];

for(let i=0;i<arr.length;i++){

     let name:any=await page.locator(`//div[@class='inventory_list']/div[${i+1}]/div[2]/a`).innerText();

     let price:any=await page.locator(`//div[@class='inventory_list']/div[${i+1}]/div[3]`).innerText();

  await expect(name).toBe(arr[i]['name']);

    await expect(price.split('\n')[0]).toBe(arr[i]['value']);

    names.push(name);

    prices.push(price.split('\n')[0]);
}

console.log(names);
console.log(prices);

})





test.afterEach(async({page})=>{

const obj=new LogoutControllers(page);

await obj.logoutController();

})*/