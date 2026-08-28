# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: practice.spec.js >> Select dropdown and verify it
- Location: tests\practice.spec.js:43:5

# Error details

```
Error: expect(locator).toHaveValue(expected) failed

Locator: locator('#dropdown-class-example')
Expected pattern: /Option1/
Received string:  "option1"
Timeout: 5000ms

Call log:
  - Expect "toHaveValue" with timeout 5000ms
  - waiting for locator('#dropdown-class-example')
    14 × locator resolved to <select id="dropdown-class-example" name="dropdown-class-example">…</select>
       - unexpected value "option1"

```

```yaml
- combobox:
  - option "Select"
  - option "Option1" [selected]
  - option "Option2"
  - option "Option3"
```

# Test source

```ts
  1  | import{test, expect} from '@playwright/test'
  2  | 
  3  | test.beforeEach("Open Website", async({page})=>{
  4  |    
  5  |     await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
  6  | })
  7  | 
  8  | test("Verify URL and Title", async({page})=>{
  9  | 
  10 |     await expect(page).toHaveTitle(/Practice/);
  11 |     await expect(page).toHaveURL("https://rahulshettyacademy.com/AutomationPractice/")
  12 |     console.log("Current URl :", await page.url());
  13 |     console.log("Current Title : ", await page.title());
  14 | })
  15 | 
  16 | test("Reloading Website", async({page})=>{
  17 | 
  18 |     await page.reload();
  19 |     console.log("URL After Reload : ", await page.url)
  20 |     await expect(page).toHaveURL("https://rahulshettyacademy.com/AutomationPractice/")
  21 | })
  22 | 
  23 | test("Verify page heading", async ({page})=>{
  24 | 
  25 |     const headingVisible = await page.locator("//h1[text()='Practice Page']")
  26 |     await expect(headingVisible).toBeVisible();
  27 |     console.log("Heading : ", await headingVisible.textContent())
  28 |     
  29 | })
  30 | 
  31 | test("Select Radio Button1 and verify selected or not", async({page})=>{
  32 |    let radiobtn = await page.locator("//input[@value='radio1']");
  33 |    await radiobtn.check();
  34 |    await expect(radiobtn).toBeChecked();
  35 | })
  36 | 
  37 | test("Select checkbox and verify selected or not", async({page})=>{
  38 |     let chkbox = page.locator("#checkBoxOption1");
  39 |     await chkbox.check();
  40 |     await expect(chkbox).toBeChecked();
  41 | })
  42 | 
  43 | test("Select dropdown and verify it", async({page})=>{
  44 |     let dropdown = await page.locator("#dropdown-class-example");
  45 |     await dropdown.selectOption("Option1");
  46 |     await expect(dropdown).toBeVisible();
  47 |     console.log("Selected values in dropdown :", await dropdown.inputValue())
> 48 |     await expect(dropdown).toHaveValue(/Option1/)
     |                            ^ Error: expect(locator).toHaveValue(expected) failed
  49 | })
```