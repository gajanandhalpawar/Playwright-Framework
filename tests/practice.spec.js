import{test, expect} from '@playwright/test'
import { AsyncLocalStorage } from 'async_hooks';

test.beforeEach("Open Website", async({page})=>{
   
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
})

test("Verify URL and Title", async({page})=>{

    await expect(page).toHaveTitle(/Practice/);
    await expect(page).toHaveURL("https://rahulshettyacademy.com/AutomationPractice/")
    console.log("Current URl :", await page.url());
    console.log("Current Title : ", await page.title());
})

test("Reloading Website", async({page})=>{

    await page.reload();
    console.log("URL After Reload : ", await page.url)
    await expect(page).toHaveURL("https://rahulshettyacademy.com/AutomationPractice/")
})

test("Verify page heading", async ({page})=>{

    const headingVisible = await page.locator("//h1[text()='Practice Page']")
    await expect(headingVisible).toBeVisible();
    console.log("Heading : ", await headingVisible.textContent())
    
})

test("Select Radio Button1 and verify selected or not", async({page})=>{
   let radiobtn = await page.locator("//input[@value='radio1']");
   await radiobtn.check();
   await expect(radiobtn).toBeChecked();
})

test("Select checkbox and verify selected or not", async({page})=>{
    let chkbox = page.locator("#checkBoxOption1");
    await chkbox.check();
    await expect(chkbox).toBeChecked();
    await chkbox.uncheck();
    console.log("Check box is unchecked")

})

test("Select dropdown and verify it", async({page})=>{
    let dropdown = page.locator("#dropdown-class-example");
    await dropdown.selectOption("Option1");
    await expect(dropdown).toBeVisible();
    let selectedvalue = await dropdown.inputValue()
    console.log("Selected values in dropdown :",  selectedvalue)
    await expect(dropdown).toHaveValue("option1")
})

test("Test alert read and accept", async({page})=>{
    await page.getByPlaceholder("Enter Your Name").fill("Gajanan")

    page.on("dialog", async dialog=>{
       const alrtmsg =  console.log(dialog.message())
        await dialog.accept();
    })
    await page.getByRole('button', {name:'Alert'}).click();
})

test("Confirm alert read and click ", async({page})=>{
    await page.getByPlaceholder("Enter Your Name").fill("Gajanan")

    page.on("dialog", async dialog=>{
       const alrtmsg =  console.log(dialog.message())
        await dialog.dismiss();
    })
    await page.getByRole('button', {name:'Confirm'}).click();
})

test("Hide/Show button test", async({page})=>{
    let inputbox =  await page.getByPlaceholder("Hide/Show Example");
    await inputbox.scrollIntoViewIfNeeded();
    await page.getByRole('button', {name: 'Hide'}).click();
    await expect(inputbox).toBeHidden();

    await page.getByRole('button', {name:'Show'}).click();
    await inputbox.fill("Hii im Gajanan")
    console.log(await inputbox.inputValue())

})

test("Test Mouse hover", async({page})=>{
    let mousehover = page.locator("#mousehover")
    await mousehover.scrollIntoViewIfNeeded();
    await mousehover.hover();
    await page.locator("//a[text()='Top']").click();
})

test("Right click test", async({page})=>{
    await page.goto("https://qaplayground.dev/apps/context-menu/")
    await page.locator("//div[@class='flex-center']").click({button:"right"});
    await page.locator("//span[text()='Settings']").click();
})

test("Alert dimmiss", async({page})=>{
    await page.getByPlaceholder("Enter Your Name").fill("Gajanan")
    await page.on("dialog", async dialog=>{
    const alrt = console.log(dialog.message)
    await dialog.dismiss();  

    })
await page.getByRole('button', {name:'Alert'}).click();
})

test.only("Tab handeling", async({page, context})=>{
    const newPagePromise = context.waitForEvent("page");
    await page.locator("#opentab").first().click();
    const newPage = await newPagePromise;
    
    await newPage.waitForLoadState();

})