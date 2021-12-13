import { test } from "@playwright/test";

test.describe("Playwright Tests 1", async () => {

    test("Test 1", async({ page }) => {
        await page.goto("https://google.com");
    })
});