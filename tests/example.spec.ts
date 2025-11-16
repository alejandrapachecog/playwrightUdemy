import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://banco.bice.cl/personas');
    await page.getByRole('button', { name: 'Cuentas ' }).click();
    await page.getByRole('link', { name: 'https://bice.modyocdn.com/uploads/d0d245d6-daea-469f-920d-a7b06856f5d5/original/icon_cuenta_corriente.svg Cuenta Corriente', exact: true }).click();
    await page.locator('iframe[src="https://challenges.cloudflare.com/cdn-cgi/challenge-platform/h/b/turnstile/f/ov2/av0/rch/1kgih/0x4AAAAAAADnPIDROrmt1Wwj/light/fbE/new/normal?lang=auto"]').contentFrame().locator('body').click();
    await page.goto('https://banco.bice.cl/personas/cuentas/corriente');
});