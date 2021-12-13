import { expect, test } from "@playwright/test";

test.describe("Playwright Tests 1", async () => {

    test("Test 1: Navigate to Google page", async({ page }) => {
        // Navigate to google page.
        await page.goto("https://google.com");

        // Validate Google keyword is shown.
        await page.locator("[alt='Google']").waitFor();
    })

    test("Test 2: Navigate to Gmail page", async({ page }) => {
        // Navigate to google page.
        await page.goto("https://mail.google.com");

        // Validate - to contain to Gmail.
        const text = await page.locator("[id='headingSubtext'] span").textContent();
        expect(text).toEqual("to continue to Gmail");

        // Fill the email value.
        await page.locator("[id='identifierId']").fill("abc@gmail.com");
    });

    test("Test 3: Failure Scenario - Navigate to Google page", async({ page }) => {
        // Navigate to google page.
        await page.goto("https://google.com");

        // Validate Google keyword is shown - Will fail as given wrong selector.
        await page.locator("[alt='GoogleId']").waitFor();
    })
});