import{test, expect} from "@playwright/test"

test("Login page", async({page})=>{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    const radio1 =  await page.locator("//input[@value='radio1']");
    await radio1.check();
    await expect(radio1).toBeChecked();
   page.on("dialog", async dialog =>{
    console.log(dialog.message())
    await dialog.accept();
   })
    await page.getByRole("button",{name: 'Alert'}).click();
    await page.screenshot({path: "scn.png"})
    const mousehover = await page.locator("//button[text()='Mouse Hover']");
    await mousehover.scrollIntoViewIfNeeded();
    await mousehover.hover();
    await page.waitForTimeout(5000)


})
