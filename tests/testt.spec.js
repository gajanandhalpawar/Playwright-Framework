import {test, expect} from '@playwright/test'

test.beforeEach("Verify aplication availibility", async ({page})=>{
    await page.goto("https://qaplayground.com/");
    await expect(page).toHaveURL("https://qaplayground.com/");
    await expect(page).toHaveTitle("QA Playground — Practice Selenium, Playwright & Cypress")
    console.log("Current URL", await page.url());
    console.log("current Title", await page.title());
    await page.locator("#home-hero-title").isVisible();
})

test("Alerts testing", async({page})=>{
    await page.locator("//div[@class='flext-start flex flex-col pb-6']").scrollIntoViewIfNeeded();
    await page.getByTestId("practice-card-alerts-dialogs").click();
    await page.getByTestId("open-info-dialog").click();
    await page.getByTestId("info-dialog-close-btn").click();
    await page.getByTestId("open-confirm-dialog").click();
    await page.getByTestId("confirm-ok-btn").click();
    await page.locator("//button[text()='Open Unsaved Dialog']").click();
    await page.locator("//button[text()='Leave']").click();
    await page.goBack();
    await page.waitForTimeout(5000)
    console.log("alert test passed")
})

test("DragAndDrop", async({page})=>{
    await page.locator("//div[@class='flext-start flex flex-col pb-6']").scrollIntoViewIfNeeded();
    await page.getByTestId("practice-card-drag-drop").click();
    await expect(page.locator("//h1[text()='How to Automate Drag and Drop in Selenium and Playwright']")).toBeVisible();
    
})