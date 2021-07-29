import { test, expect } from '@playwright/test'
import { Landing } from './pages/Index'

var landing: Landing

test.beforeEach(async ({page}) => {
    landing = new Landing(page)
    await landing.navigate()
})

test('Validate Landing Text Elements', async () => {
    await landing.validateTextElements()
})

test('Validate Landing Link References', async () => {
    await landing.validateLinkRefs()
})

test('Validate Landing Progress Bar', async () => {
    await landing.validateProgressBar()
})