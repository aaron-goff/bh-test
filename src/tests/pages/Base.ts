import { expect, Page } from '@playwright/test'
import { Improve, Landing, HowLong } from './Index'

export class Base {
    /**
    Class variables
    */
    page: Page
    landing: Landing
    howLong: HowLong
    improve: Improve
    pageIndex: number
    progressWrapper = '.sl-progress-wrapper'
    progress = '.sl-progress'
    progressBar = '.sl-progress-dots'
    progressBarItem = (index: number) => { return `${this.progressBar} span:nth-child(${index})`}

    constructor(page: Page) {
        this.page = page
    }

    /**
     * Re-usable function to check the progress bar
     */
    async validateProgressBar() {
        if (this.pageIndex > 0) {
            const percentage = 6.25 * this.pageIndex
            expect(await this.page.getAttribute(this.progress, "style")).toBe(`width: ${percentage.toString()}%;`)
            for(var i = 1; i < 17; i++) {
                if (i <= this.pageIndex) {
                    await this.validateProgressBarItem(i, true)
                } else {
                    await this.validateProgressBarItem(i, false)
                }
            }
        }
    }

    /**
     * 
     * @param index number, the index of the page
     * @param expectedValue boolean, expected value of the "data-active" attribute 
     */
    private async validateProgressBarItem(index: number, expectedValue: boolean) {
        expect(await this.page.getAttribute(this.progressBarItem(index), "data-active")).toBe(expectedValue.toString())
    }
}