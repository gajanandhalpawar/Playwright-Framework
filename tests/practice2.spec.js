import{test, expect} from "@playwright/test"

test.beforeEach("Verify application availability", async ({page})=>{
    await page.goto("https://playwrightlab.github.io/");
    await expect(page).toHaveURL("https://playwrightlab.github.io/")
    await expect(page).toHaveTitle("PlayLab — Playwright Practice Arena")
    console.log("Current URL : ", await page.url());
    console.log("Current Title : ", await page.title());
    await page.locator(".hero-title").isVisible();
})

test("Register a new user", async({page})=>{
    await page.locator("//a[text()='Forms']").first().click();
    await page.locator("//h2[text()='Form Elements']").isVisible();
    await page.locator("#fullName").fill("Gajanan");
    await page.locator("#email").fill("laptop@gamail.com");
    await page.locator("#password").fill("123@abcd");
    await page.locator("#phone").fill("134658975");
    let dropdn = await page.locator("#country");
    await dropdn.scrollIntoViewIfNeeded();
    await dropdn.selectOption("India");
    await expect(dropdn).toBeVisible();
    let inval = await dropdn.inputValue()
    console.log("Selected value : ", inval)
    await expect(dropdn).toHaveValue("in")
    let radio = await page.locator("#radioMale");
    await radio.check();
    await expect(radio).toBeChecked();
    let chkbx = await page.locator("#checkJs");
    await chkbx.check();
    let chkin = await chkbx.inputValue()
    console.log("Check values is : ", chkin)
    await page.getByPlaceholder("Tell us about yourself...").fill("Hi my name is anthony")
    await page.locator(".terms-checkbox").check();
    await page.getByRole("button",{name:"Register"}).click();
    await page.waitForTimeout(1000)
    let successmsg = await page.getByText(" Registration successful! Welcome aboard");
    await successmsg.scrollIntoViewIfNeeded();
    await successmsg.isVisible();
    let txtmsg = await successmsg.textContent();
    console.log("After submit form message is : ", txtmsg)
    await expect(successmsg).toHaveText(" Registration successful! Welcome aboard.")

    //checking
})


test("Verify mandatory field validation", async({page})=>{
    await page.locator(".terms-checkbox").check();
    await page.getByRole("button",{name:"Register"}).click();
    let mandatoryName  = await page.getByText("Name is required");
    let mandatoryEmail = await page.getByText("Valid email is required");
    let mandatoryPass  = await page.getByText("Password must be at least 8 characters");
    await expect(mandatoryName).isVisible;
    let nameValidation = await mandatoryName.textContent();
    console.log("Validation for name is : ", nameValidation)

    await expect(mandatoryEmail).isVisible;
    let emailValidation = await mandatoryEmail.textContent();
    console.log("Validation for email is : ", emailValidation)

    await expect(mandatoryPass).isVisible;
    let passValidation = await mandatoryPass.textContent();
    console.log("Validation for password is : ", passValidation)
    
})

test("Search for a product", async ({page})=>{
    await page.locator("//a[text()='Shopping']").click();
    let title = await page.locator("#shoppingTitle");
    await expect(title).isVisible
    let textTitle = await title.textContent();
    console.log("Title of shopping screen is : ", textTitle)

    let lambo = await page.getByText("Lamborghini Huracan");
    await expect(lambo).isVisible

    await page.locator("//button[@data-product='lamborghini' and text()='Add to Cart']").click();

    let lamboInCart = await page.getByTestId("cart-item-lamborghini");
    await expect(lamboInCart).isVisible;
    let carttext = await lamboInCart.textContent();
    console.log("Product present in cart : ", carttext)

    let coupan = await page.locator("//span[text()='SPEED20']");
    let coupanText = await coupan.innerText();
    console.log("Coupan applied :", coupanText)

    await page.locator("#shopCouponInput").fill(coupanText);
    await page.locator("#shopApplyCoupon").click();

    let coupanApplied = await page.locator("#shopCouponMsg");
    await expect(coupanApplied).toBeVisible;
    let successfullyCoupanApplied = await coupanApplied.textContent();
    console.log("Coupan applied message :", successfullyCoupanApplied)

})

test("Handle Alert", async ({page})=>{
    await page.getByTestId("nav-more").click();
    await page.locator("//a[text()='Modals & Alerts']").click();
    let alertHeader = await page.locator("//h2[text()='Modals & Alerts']");
    await expect(alertHeader).isVisible;
    let alerttext = await alertHeader.innerText();
    console.log("Heading of Alert : ", alerttext)

    await page.on("dialog", async dialog=>{
         await page.waitForTimeout(3000)
        console.log(await dialog.message())
        await dialog.accept();
    })
    await page.locator("#nativePrompt").click();
 
})

//test.only("Handeling tab")
