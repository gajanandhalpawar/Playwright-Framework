import{test, expect} from '@playwright/test'

test.beforeEach("Website launch and click on Form", async ({page})=>{
    await page.goto("https://qaplayground.com/");
    await expect(page).toHaveURL("https://qaplayground.com/");
    await expect(page).toHaveTitle("QA Playground — Practice Selenium, Playwright & Cypress");
    console.log("Current title is : ", await page.url());
    console.log("Current URL is :", await page.title() );
    await page.locator("#home-hero-title").isVisible();
    await page.getByTestId("hero-start-practicing").click();
    await page.locator("#new-practice-title").isVisible();
    await page.getByTestId("new-practice-card-forms").click();
    await page.locator("//h1[text()='Form Automation Practice']").isVisible();
})

test("Login Form practice", async({page})=>{
    await page.getByPlaceholder("you@example.com").fill("gaju@gmail.com");
    await page.getByPlaceholder("Enter password").first().fill("Gaju@1234");
    await page.locator("#loginSubmitBtn").click();
    const logintxt =  page.getByTestId("result-login");
    await expect(logintxt).toBeVisible();
    console.log(await logintxt.innerText());

})

test("Address Form", async({page})=>{
    let addform =  page.locator("//span[text()='Address Form']");
    await addform.scrollIntoViewIfNeeded();
    await addform.isVisible();
    await page.getByRole('combobox',{name: 'country'}).selectOption("India");
    await page.waitForTimeout(3000)
    await page.getByPlaceholder("Enter city").fill("Udgir");
    let abtu =  page.getByPlaceholder("Tell us a little about yourself…");
    await abtu.fill("Im a QA engineer");
    console.log(await abtu.inputValue())
    await page.locator("#addressSubmitBtn").click();
    let saveadd = page.locator("#addressResult");
    await saveadd.isVisible();
    console.log(await saveadd.innerText())
})