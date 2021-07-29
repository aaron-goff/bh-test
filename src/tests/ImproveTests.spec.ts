import { test, expect } from '@playwright/test'
import { Improve, Landing } from './pages/Index'

var improve: Improve

test.beforeEach(async ({page}) => {
    improve = new Improve(page)
    await improve.goToImprove()
})

test('Validate Improve Text Elements', async ({page}) => {
    await improve.validateImproveTextElements()
})

test('Validate Questions', async () => {
    await improve.validateQuestions()
})

test('Validate Clicking Continue Without Selecting Answer Yields Error', async () => {
    await improve.clickContinue()
    await improve.validateErrors()
})

test('Validate Clicking Option Selects Option', async () => {
    const index = 2
    await improve.clickOption(index)
    await improve.validateSelectingOption(index)
})

test('Validate Improve Progress Bar', async () => {
    await improve.validateProgressBar()
})