import { test } from "@playwright/test";

test("Test 3: Failure Scenario - Navigate to Google page", async({ page }) => {
    // Navigate to google page.
    await page.goto("https://google.com");

    // Validate Google keyword is shown - Will fail as given wrong selector.
    await page.locator("[alt='GoogleId']").waitFor();
});