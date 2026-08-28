import{test, expect} from "@playwright/test"

test.beforeEach("Website Login", async ({page})=>{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
})
test("Handle alert", async ({page})=>{
    await page.getByPlaceholder("Enter Your Name").fill("Gajanan")
    page.on("dialog", async dialog=>{
        console.log(dialog.message())
        await dialog.accept();
    })
    await page.getByRole('button', {name:'Alert'}).click();
})

test("Tab handeling", async({page, context})=>{
    const newPagePromise = context.waitForEvent("page");
    await page.locator("#opentab").first().click();
    const newpage = await newPagePromise;
    await newpage.waitForLoadState();

    console.log(await newpage.url())
    console.log(await newpage.title())
})
