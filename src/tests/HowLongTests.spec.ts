import test from "@playwright/test";
import { HowLong } from "./pages/Index";

var howLong: HowLong

test.beforeEach(async ({page}) => {
    howLong = new HowLong(page)
    await howLong.goToHowLong()
})

test('Validate How Long Progress Bar', async () => {
    await howLong.validateProgressBar()
})