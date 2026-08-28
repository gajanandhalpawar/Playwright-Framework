# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: pomOhrm.spec.js >> Logout Test
- Location: tests\pomOhrm.spec.js:19:5

# Error details

```
TypeError: Cannot read properties of undefined (reading 'locator')
```

# Test source

```ts
  1  | import{expect} from "@playwright/test"
  2  | 
  3  | export class DashboardVerify{
  4  |     constructor(page){
  5  |         this.page=page;
> 6  |         this.dashboardheading = page.locator("//img[@src='/web/images/orangehrm-logo.png?v=1783336755185']");
     |                                      ^ TypeError: Cannot read properties of undefined (reading 'locator')
  7  |         this.userdropdown = page.locator("span[class='oxd-userdropdown-tab']");
  8  |         this.logout = page.locator("//a[text()='Logout']");
  9  |     }
  10 |     async DashboardV(){
  11 |         await expect(this.dashboardheading).toBeVisible
  12 |         await this.page.screenshot({path: "OHRM.png"})
  13 |     }
  14 |      async userLogout(){
  15 |         await this.userdropdown.click();
  16 |       await  this.logout.click();
  17 |     }
  18 | }
  19 | 
```