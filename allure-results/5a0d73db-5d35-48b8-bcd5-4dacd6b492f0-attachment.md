# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: practicescreenshot.spec.js >> Login page
- Location: tests\practicescreenshot.spec.js:3:5

# Error details

```
Error: page.goto: Test ended.
Call log:
  - navigating to "https://testautomationpractice.blogspot.com/", waiting until "load"

```

# Test source

```ts
  1 | import{test, expect} from "@playwright/test"
  2 | 
  3 | test("Login page", async({page})=>{
> 4 |     page.goto("https://testautomationpractice.blogspot.com/")
    |          ^ Error: page.goto: Test ended.
  5 | })
  6 | 
```