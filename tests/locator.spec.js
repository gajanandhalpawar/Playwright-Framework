/*page.getByRole() to locate by explicit and implicit accessibility attributes.
page.getByText() to locate by text content.
page.getByLabel() to locate a form control by associated label's text.
page.getByPlaceholder() to locate an input by placeholder.
page.getByAltText() to locate an element, usually image, by its text alternative.
page.getByTitle() to locate an element by its title attribute.
page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).*/

const{test, expect} = require('@playwright/test') 

test('Locator demo of getBytext', async({page})=> {

await page.goto('https://www.google.com/')

await page.getByText('Images').isVisible()

await page.waitForTimeout(5000)

})

//page.getByLabel() to locate a form control by associated label's text.

test('Locator demo of getBylabel', async({page})=> {
    await page.goto("https://practice.expandtesting.com/locators")
    const label = page.getByLabel("Email for newsletter").first();
    await label.scrollIntoViewIfNeeded();
    await label.isVisible();
    await label.fill("gajanan.dhalpawar@gmail.com");

    await page.waitForTimeout(3000);
}) 

//page.getByPlaceholder() to locate an input by placeholder.

test('locator demo getbyplaceholder', async({page})=>{
    await page.goto("https://www.facebook.com/login.php/");
    await page.getByPlaceholder("Email address or phone number").fill("Dajanan D");
    await page.getByPlaceholder("Password").fill("Meow");
    await page.locator("#loginbutton").click();

   // await expect(page.getByText("The password that you've entered is incorrect.")).toBeVisible();

    await page.waitForTimeout(3000);


})

//page.getByAltText() to locate an element, usually image/logo, by its text alternative.

test('locator demo gybyalttext', async({page})=>{
    await page.goto('https://www.flipkart.com/');
    await expect(page.getByAltText('Home & Furniture')).toBeVisible();
})


//page.getByTitle() to locate an element by its title attribute.


//page.getByRole() to locate by explicit and implicit accessibility attributes.

test('Locator demo getByRole', async({page})=>{

    await page.goto("https://playwright.dev/docs/intro");
    await page.getByRole('link',{name: 'How to install Playwright'}).click();
    await page.waitForTimeout(3000);
    await page.goBack();
    await page.waitForTimeout(3000);

})

test('Locator demo2 getbyrole @smoke', async({page})=>{
    await page.goto("https://www.amazon.in/gp/navigation-country/select-country?preferencesReturnUrl=%2F");
    await page.getByRole('button',{name: "Go to website"}).click();
    await page.screenshot({path : "screenshot.png"});

    await page.waitForTimeout(3000);
})