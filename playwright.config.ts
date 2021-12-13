import { PlaywrightTestConfig } from "@playwright/test";

const outputDirectory = "./artifacts";

const config: PlaywrightTestConfig = {
	name: "Integration Tests",
	use: {
		browserName: "chromium",
		headless: false,
		viewport: { width: 1280, height: 800 },
		actionTimeout: 30000,
		navigationTimeout: 30000,
		ignoreHTTPSErrors: true,
		acceptDownloads: true,
		screenshot: "only-on-failure",
		video: "on-first-retry",
		trace: "retain-on-failure",
		launchOptions: {
			headless: false,
			args: ["--start-maximized"],
		},
	},
	outputDir: outputDirectory,
	reporter: [
		["list"],
		[
			"junit",
			{
				outputFile:
                outputDirectory +
					"/testResults/test-results.xml",
			},
		],
	],
	retries: 0,
	testDir: "src",
	timeout: 240000,
	testMatch: ["**/tests/**/*.test.ts"],
	workers: 1,
};

export default config;