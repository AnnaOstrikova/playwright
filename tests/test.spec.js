const {chromium} = require("playwright");
const{email, password} = require("../user")



const { test, expect } = require('@playwright/test');
test('Successful authorization', async ({ page }) => {
  // Go to https://netology.ru/?modal=sign_in
  await page.goto('https://netology.ru/?modal=sign_in');
  // Click [placeholder="Email"]
  await page.click('[placeholder="Email"]');
  // Fill [placeholder="Email"]
  await page.fill('[placeholder="Email"]', email);
  // Click [placeholder="Пароль"]
  await page.click('[placeholder="Пароль"]');
  // Fill [placeholder="Пароль"]
  await page.fill('[placeholder="Пароль"]', password);
  // Click [data-testid="login-submit-btn"]
  await page.click('[data-testid="login-submit-btn"]');
  await expect(page).toHaveURL("https://netology.ru/profile/8714236")
  }
)

test('Unsuccessful authorization', async ({ page }) => {
    // Go to https://netology.ru/?modal=sign_in
    await page.goto('https://netology.ru/?modal=sign_in');
    // Click [placeholder="Email"]
    await page.click('[placeholder="Email"]');
    // Fill [placeholder="Email"]
    await page.fill('[placeholder="Email"]', email);
    // Click [placeholder="Пароль"]
    await page.click('[placeholder="Пароль"]');
    // Fill [placeholder="Пароль"]
    await page.fill('[placeholder="Пароль"]', "00000");
    // Click [data-testid="login-submit-btn"]
    await page.click('[data-testid="login-submit-btn"]');
    await expect(page.locator('text=Вы ввели неправильно логин или пароль'));
    }
  )

