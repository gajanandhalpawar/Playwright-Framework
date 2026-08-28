const{test, expect} = require('@playwright/test')

test('Locator Practice', async({page})=> {

   // await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    await page.locator("#username").fill("rahulshettyacademy");
    await page.locator("#password").fill("Learning@830$3mK2");
    await page.locator("#signInBtn").click();
})
