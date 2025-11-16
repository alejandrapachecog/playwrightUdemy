import { test, expect } from '@playwright/test';

//git cambios ale
test('test', async ({ page }) => {
    await page.goto('http://uitestingplayground.com/');
    //await page.getByText('Aristotle').click();//locator
    await page.locator('text=Aristotle').click();
    //await page.getByRole('link', { name: 'Resources' }).click();
    await page.locator('a.nav-link:has-text("Resources")').click();
    await page.getByRole('link', { name: 'Home' }).click();
    await page.getByRole('link', { name: 'Click' }).click();
    await page.getByRole('button', { name: 'Button That Ignores DOM Click' }).click();
});