# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: pomOhrm.spec.js >> Login Test
- Location: tests\pomOhrm.spec.js:4:5

# Error details

```
Error: page.goto: net::ERR_INTERNET_DISCONNECTED at https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
Call log:
  - navigating to "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login", waiting until "load"

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e5]:
    - heading "Press space to play" [level=1] [ref=e6]
    - generic [ref=e7]:
      - paragraph [ref=e8]: "Try:"
      - list [ref=e9]:
        - listitem [ref=e10]: Checking the network cables, modem, and router
        - listitem [ref=e11]: Reconnecting to Wi-Fi
        - listitem [ref=e12]:
          - link "Running Windows Network Diagnostics" [ref=e13] [cursor=pointer]:
            - /url: javascript:diagnoseErrors()
    - generic [ref=e14]: ERR_INTERNET_DISCONNECTED
  - application "Dino game, press space to play" [ref=e16]
```

# Test source

```ts
  1  | import { expect } from "@playwright/test";
  2  | 
  3  | export class LoginPage {
  4  |     constructor(page) {
  5  |         this.page = page;
  6  |         this.usernameInput = page.getByPlaceholder("Username");
  7  |         this.passwordInput = page.getByPlaceholder("Password");
  8  |         this.loginBtn = page.getByRole("button", { name: "Login" });
  9  |     }
  10 | 
  11 |     async OpenApplication() {
> 12 |         await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
     |                         ^ Error: page.goto: net::ERR_INTERNET_DISCONNECTED at https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
  13 |     }
  14 | 
  15 |     async loginuser(username, password) {
  16 |         await this.usernameInput.fill(username);
  17 |         await this.passwordInput.fill(password);
  18 |         await this.loginBtn.click();
  19 |     }
  20 | }
```