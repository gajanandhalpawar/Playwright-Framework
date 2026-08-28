const{test, expect} =require ('@playwright/test');

test('All modules', async({page})=>{

    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    await page.locator('input[name=radioButton]').nth(2).click();
    await page.getByRole('combobox').selectOption({label: 'Option1'});
    await page.getByPlaceholder("Type to Select Countries").fill('india');
    await page.locator('.ui-menu-item').first().click();
    await page.locator('#checkBoxOption2').check();
    await page.locator('div[class=totalAmount]').scrollIntoViewIfNeeded();
    await page.screenshot({path: 'screenshot.png'})
})

