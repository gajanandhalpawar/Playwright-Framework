    import{test, expect} from '@playwright/test'
import { AsyncLocalStorage } from 'async_hooks';

    test("Window Handle", async({page, context})=>{
        await page.goto("https://testautomationpractice.blogspot.com/");
        await page.getByPlaceholder("Enter Name").fill("Gajanan");
        await page.getByPlaceholder("Enter EMail").fill("gaju@gmail.com")
        await page.getByPlaceholder("Enter Phone").fill("12324567895")
        await page.locator("#male").click();
        await page.locator("#monday").check();
        await page.locator("#friday").check();
        await page.locator("#saturday").check();
        await page.locator("#country").selectOption('India');
        await page.locator("#colors").selectOption('Green');
        await page.locator("//input[@id='datepicker']").click();
        await page.locator("//span[text()='Prev']").click();
        await page.locator("//td//a[text()='1']").click();
        const datevalue = await page.locator("//input[@id='datepicker']").inputValue();
        console.log(datevalue)
        await page.locator("//button[text()='Copy Text']").dblclick();
        const inputVal = await page.locator("//input[@id='field2']").inputValue();
        console.log(inputVal)
        await page.locator("//input[@id='singleFileInput']").setInputFiles("C:/Users/gajan/Downloads/ListedOptionTradeExcelImport (11).xlsx");
        
        await page.waitForTimeout(3000)
        page.on('dialog', async dialog=>{
            await dialog.accept();
        })
        await page.locator("//button[@id='alertBtn']").click();
        await page.waitForTimeout(3000)

        const [newPage] = await Promise.all([
        context.waitForEvent('page'),    
        page.locator("//button[text()='New Tab']").click()
    ])
        await newPage.waitForLoadState();
        console.log(await newPage.title())
        await newPage.goBack();
        await page.close();
    })