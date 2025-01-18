import { test, expect } from "@playwright/test";

test("Swag Labs", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  await expect(page).toHaveTitle("Swag Labs");


  //single
  await page.locator("#user-name").fill("standard_user");
  await page.locator("#password").fill("secret_sauce");
  await page.locator("(//input[@id='login-button'])").click();
  const productTitle = page.locator(".title");
  await expect(productTitle).toBeVisible();

  //Multiple
  const links = await page.$$('a');
  for (const link of links) {
    const linkText = await link.textContent();
    console.log(linkText);
  }


