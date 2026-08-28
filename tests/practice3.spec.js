import{test, expect} from '@playwright/test'
import { hasUncaughtExceptionCaptureCallback } from 'process';

test.only('Login page 2', async({page})=>{
    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
    await page.locator('#userEmail').fill('gaju@gmail.com');
    await page.locator('#userPassword').fill('Gaju@1234');
    await page.locator('#login').click();
    await expect(page.getByRole("heading",{name: 'Automation'})).toBeVisible();
    await page.getByRole("button", {name: ' View'}).first().click();
    await page.getByRole("button", {name: 'Add to Cart'}).click();
    await page.getByRole("button", {name: 'HOME '}).click();
    await page.getByRole("button", {name: ' Add To Cart'}).nth(1).click();
    await page.waitForTimeout(2000)
    const cartCount = await page.locator("//button[@class='btn btn-custom']//label").textContent();
    console.log(`Cart Count: ${cartCount}`);
    await expect(page.locator("//button[@class='btn btn-custom']//label")).toHaveText("2"); 
    await page.waitForTimeout(2000)
    await page.locator("button[class='btn btn-custom']").nth(2).click();

    await expect(page.getByRole("heading",{name: 'ADIDAS ORIGINAL'})).toBeVisible();
    await expect(page.getByRole("heading", {name: 'ZARA COAT 3'})).toBeVisible();
    await page.goBack();

    await page.waitForTimeout(5000)

})