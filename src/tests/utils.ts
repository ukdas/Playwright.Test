import { test, PlaywrightTestArgs, PlaywrightTestOptions, PlaywrightWorkerArgs, PlaywrightWorkerOptions, TestInfo } from "@playwright/test";

export const enum Team {
    Google,
    Gmail,
}

export function tests(testTitle: string, testFunction:(
    args: PlaywrightTestArgs & PlaywrightTestOptions & PlaywrightWorkerArgs & PlaywrightWorkerOptions,
    testInfo: TestInfo
) => void | Promise<any>): void {

    // Execute the test.
	test(`${testTitle}`, testFunction);
}