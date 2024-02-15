import { test, expect } from '@playwright/test';
import { credData } from './Datas/Credentials_data';
import {personalData} from './Datas/Information_data';
import { Login } from './Pages/Login';
import {Main} from './Pages/Main';
import {Logout} from './Pages/Logout';

credData.forEach(val=>{

  test(`Credentials ${val.username}`, async({page})=>{

 let login=new Login(page);

 await page.goto("https://www.saucedemo.com/v1/");

 await login.username.click();

 await login.username.fill(val.username);

 await login.password.click();

 await login.password.fill(val.password);

 await login.loginBtn.click();

});

  });

 
  test.beforeEach(async({page})=>{
    
    let login=new Login(page);

    await login.goto();

    await login.uname();

    await login.passw();

    await login.login();

 }); 


personalData.forEach(val=>{

  test('Main', async({page})=>{

    let main=new Main(page);

    await main.shoppingBag.click(); 

    await main.addToCartBtn.click();

    await main.shoppingCartBtn.click();

    await main.checkoutBtn.click();

    await main.firstname.click();

    await main.firstname.fill(val.fname);

    await main.lastname.click();

    await main.lastname.fill(val.lname);

    await main.zipcode.click();

    await main.zipcode.fill(val.zcode);

    await main.continueBtn.click();

    await main.finishBtn.click();

    await page.screenshot({path:"saucedemo.png"});
  

      });

});

test('Logout', async({page})=>{

let logout=new Logout(page);

await logout.tab();

await logout.logout();

});





