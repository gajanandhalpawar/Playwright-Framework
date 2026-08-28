const{test, expect}= require('@playwright/test')

test('Locator Practice', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
 
await page.getByPlaceholder('Username').fill('Admin');
await page.getByPlaceholder('Password').fill('admin123');
await page.locator('button[type="submit"]').click();
})