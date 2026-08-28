import{test, expect} from "@playwright/test"
import { AsyncLocalStorage } from "async_hooks";

test("window handle", async({page, context})=>{
 await page.goto("https://testautomationpractice.blogspot.com");

 const [newPage] = await Promise.all([
context.waitForEvent('page'),
page.locator("//button[text()='New Tab']").click()
])
await newPage.waitForLoadState();
console.log(await newPage.title())
})


test("File Upload", async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com");
await page.locator("#singleFileInput").setInputFiles("C:/Users/gajan/Downloads/30219.jpg")
await page.locator("//button[starts-with(text(),'Upload Single')]").click();
const text = await page.locator("//p[starts-with(text(),'Single')]").textContent();
console.log("Status : ", text)
await page.waitForTimeout(5000)

})