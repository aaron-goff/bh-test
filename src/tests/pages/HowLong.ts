import { expect, Page } from '@playwright/test'
import { Base, Improve, Landing } from './Index'

export class HowLong extends Base {
    constructor(page: Page) {
        super(page)
        this.landing = new Landing(page)
        this.improve = new Improve(page)
        this.pageIndex = 2
    }

    /**
     * Function to get to the How Long page
     */
    async goToHowLong() {
        await this.landing.navigate()
        await this.landing.clickGetStarted()
        await this.improve.clickOption(1)
        await this.improve.clickContinue()
    }
}