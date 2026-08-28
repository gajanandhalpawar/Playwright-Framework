import { expect } from "@playwright/test";

export class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameInput = page.getByPlaceholder("Password");
        this.passwordInput = page.getByPlaceholder("Password");
        this.loginBtn = page.getByRole("button", { name: "Login" });
    }

    async OpenApplication() {
        await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    }

    async loginuser(username, password) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginBtn.click();
    }
}