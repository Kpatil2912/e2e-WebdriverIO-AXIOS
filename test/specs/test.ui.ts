import loginPage from '../pageobjects/login.page.js';
import { faker } from '@faker-js/faker';

describe("Create a new user", () => {
    it("should create a new user", async () => {
      // await browser.url("https://www.saucedemo.com/");

     //  await LoginPage.login('Shekhar', '123qwe')
      

      //  const currentWindow1 = await browser.getWindowHandle();
      //   console.log(`auto_singlewindow: ${currentWindow1}`);

      //   const opendurl = await browser.getUrl();
      //   const openedtitle = await browser.getTitle();

      //   console.log(`auto_singlewindow_url: ${opendurl}`);
      //   console.log(`auto_singlewindow_title: ${openedtitle}`);

      //  const windowHandles =  await browser.getWindowHandles();
      //  console.log(`auto_multiwindow: ${windowHandles}`);

      //  const rect = await browser.getWindowRect();
      //  console.log(`auto_multiwindow_rect: ${rect.height} ${rect.width}`);
      //  const sixe = await browser.getWindowSize();
      //  console.log(`auto_multiwindow_size: ${sixe.height} ${sixe.width}`);
    
      //  await browser.setWindowRect(10, 10 , 2 ,2);
      //  await browser.reloadSession();
      // await browser.fullscreenWindow();

      //await browser.pause(5000);

    //   await browser.waitUntil(
    //     async () => (await browser.getAllCookies()).length > 0,
    // //     { timeout: 5000, timeoutMsg: 'cookies not found' }
    //   );

    //  const cookies = await browser.getAllCookies();


    //  console.log(`auto_cookies: ${cookies}`);
    //  await browser.deleteAllCookies();
    //  console.log(`auto_cookies_deleted: ${cookies}`);

    //  await browser.addCookie({  name: 'test', value: '123' });
    //  await browser.setCookies([{ name: 'test', value: '123' },{ name: 'test1', value: '1234' }]);

    //  await browser.waitUntil(
    //   async () => (await browser.getAllCookies()).length > 0,
    //   { timeout: 5000, timeoutMsg: 'cookies not found' }
    //  );

      

     // await browser.url("https://i3v2-qa.simplifyi3.com/app/main/home");

     await loginPage.createNewRecord();

      // const randomName = faker.name.firstName();
      // console.log(`randomName: ${randomName}`);
    }
  );
})