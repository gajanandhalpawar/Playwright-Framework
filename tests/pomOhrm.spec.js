import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardVerify } from '../pages/Dashboard';

test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.OpenApplication();
    await loginPage.loginuser("Admin", "admin123");
    
});

test('Dashboard Verification', async({page})=>{
    const dashboard = new DashboardVerify(page);

    await dashboard.DashboardV();
    await dashboard.userLogout();
})
test('Logout Test', async({page})=>{
    const logouttest = new DashboardVerify(page);
    await logouttest.userLogout();
})