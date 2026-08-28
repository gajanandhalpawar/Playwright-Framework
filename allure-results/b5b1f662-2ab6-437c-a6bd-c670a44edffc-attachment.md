# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: pomOhrm.spec.js >> Dashboard Verification
- Location: tests\pomOhrm.spec.js:12:5

# Error details

```
Error: locator.click: Test ended.
Call log:
  - waiting for locator('span[class=\'oxd-userdropdown-tab\']')

```

# Test source

```ts
  1  | import{expect} from "@playwright/test"
  2  | 
  3  | export class DashboardVerify{
  4  |     constructor(page){
  5  |         this.page=page;
  6  |         this.dashboardheading = page.locator("h6[class='oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module']");
  7  |         this.userdropdown = page.locator("span[class='oxd-userdropdown-tab']");
  8  |         this.logout = page.locator("//a[text()='Logout']");
  9  |     }
  10 |     async dashbaordVerify(){
  11 |         expect(await this.dashboardheading).toBeVisible
  12 |         this.page.screenshot({path: "OHRM.png"})
  13 |     }
  14 |      async userLogout(){
> 15 |         this.userdropdown.click();
     |                           ^ Error: locator.click: Test ended.
  16 |         this.logout.click();
  17 |     }
  18 | }
  19 | 
```