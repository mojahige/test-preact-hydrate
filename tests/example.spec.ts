import { test, expect } from "@playwright/test";

test("Has h1 heading", async ({ page }) => {
  await page.goto("/");
  await expect(
    page.getByRole("heading", {
      level: 1,
    }),
  ).toHaveText("Preact hydrate test");
});

test("Click the 'increment' button updates the count display from 0 to 1", async ({
  page,
}) => {
  await page.goto("/", {
    waitUntil: "load",
  });

  const incrementButton = page.getByRole("button", {
    name: /increment/i,
  });

  await incrementButton.click();

  const countText = await page.getByText("Count:").textContent();

  await expect(countText).toBe("Count: 1");
});
