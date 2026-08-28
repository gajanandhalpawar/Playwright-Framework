import{test, expect} from "@playwright/test"

test('Practice all element', async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.getByPlaceholder('Enter Name').fill("Gajanan Dhalpawar");
    await page.getByPlaceholder('Enter EMail').fill("Gajanan@mail.com");
    await page.getByPlaceholder('Enter Phone').fill("7894561235");
    await page.locator('#male').click();
    await page.reload();
    const URL = await page.url();
    expect(URL).toBe("https://testautomationpractice.blogspot.com/")
    console.log(URL)

    const title = await page.title();
    expect(title).toBe("Automation Testing Practice")
    console.log(title)

    const heading = page.getByRole("heading",{name: "Automation Testing Practice"});
    await expect(heading).toBeVisible();
    const headingtxt = await heading.textContent();
    console.log(headingtxt)

    const tabheading = await page.getByRole("heading",{name: "Tabs"});
    expect(tabheading).toBeVisible();
    const tabtxt = await tabheading.textContent();
    console.log(tabtxt)
    

    await page.waitForTimeout(5000)
    await page.close();
})
