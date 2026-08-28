const{test, expect}= require('@playwright/test')

test('amazon search', async({page})=>{

    await page.goto('https://www.amazon.in/gp/navigation-country/select-country?preferencesReturnUrl=%2F');
    await page.locator("input#twotabsearchtextbox").fill("POCO C71, Desert Gold (6GB, 128GB)");
    await page.locator("input#nav-search-submit-button").click();
    
    await page.waitForSelector(".s-main-slot");
    
    const mobile=  page.getByText("POCO C71, Desert Gold (6GB, 128GB)").first();
    await mobile.scrollIntoViewIfNeeded();
    
    await page.locator('img[src*="https://m.media-amazon.com/images/I/41f"]').click();

    const addCart =  page.getByText("Add to cart").first();
    await addCart.scrollIntoViewIfNeeded();
    await addCart.click();

    await page.locator("#nav-cart").click();


    await page.waitForTimeout(5000);
})