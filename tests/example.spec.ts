import { test, expect } from "@playwright/test";

test("Has h1 heading", async ({ page }) => {
  await page.goto("/");
  await expect(
    page.getByRole("heading", {
      level: 1,
    }),
  ).toHaveText("Preact hydrate test");
});

test("Counter component increment", async ({ page }) => {
  await page.goto("/", {
    waitUntil: "load",
  });

  const incrementButton = page.getByRole("button", {
    name: /increment/i,
  });

  await incrementButton.click();
  await expect(page.getByText("Count:")).toContainText("1");
});
