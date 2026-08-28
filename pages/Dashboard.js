import{expect} from "@playwright/test"

export class DashboardVerify{
    constructor(page){
        this.page=page;
        this.dashboardheading = page.locator("//img[@src='/web/images/orangehrm-logo.png?v=1783336755185']");
        this.userdropdown = page.locator("span[class='oxd-userdropdown-tab']");
        this.logout = page.locator("//a[text()='Logout']");
    }
    async DashboardV(){
        await expect(this.dashboardheading).toBeVisible();
        await this.page.screenshot({path: "OHRM.png"})
    }
     async userLogout(){
        await this.userdropdown.click();
      await  this.logout.click();
    }
}
