import { expect, Page } from '@playwright/test'
import { Base, Landing } from './Index'

export class Improve extends Base {
    /**
     * Class variables
     */
    headerText = '.sl-header__text'
    pageTitle = '.sl-page-title'
    postQuestion = '.sl-page-post-question'
    continue = '.sl-button'
    radioError = '.sl-container-radio-options--error'
    generalError = '.sl-general-error'

    options = '.sl-option-row'
    option = (index: number) => { return this.options + `:nth-Child(${index.toString()})`}
    optionText = (index: number) => { return this.option(index) + ` label span`}

    selectedOptions = '.sl-option-row--checked'
    selectedOption = (index: number) => { return this.selectedOptions + `:nth-Child(${index.toString()})`}
    selectedOptionText = (index: number) => { return this.selectedOption(index) + ` label span`}

    questionStrings = {
        "1": "Get to sleep more easily",
        "2": "Sleep right through the night without waking up",
        "3": "Stop waking up too early",
        "4": "Wake up feeling refreshed",
        "5": "None of the above",
    }

    constructor(page: Page) {
        super(page)
        this.landing = new Landing(page)
        this.pageIndex = 1
    }

    /**
     * Function to go to the Improve Page
     */
    async goToImprove() {
        await this.landing.navigate()
        await this.landing.clickGetStarted()
    }

    /**
     * Function to validate the text elements on the Improve page
     */
    async validateImproveTextElements() {
        expect(await this.page.innerText(this.headerText)).toBe("YOUR SLEEP SCORE")
        expect(await this.page.innerText(this.pageTitle)).toBe("How would you like to improve your sleep?")
        expect(await this.page.innerText(this.postQuestion)).toBe("Select all that apply")
        expect(await this.page.innerText(this.continue)).toBe("CONTINUE")
    }

    /**
     * Function to validate the questions text values
     */
    async validateQuestions() {
        var index = 1
        while (index < 6) {
            expect(await this.page.innerText(this.optionText(index))).toBe(this.questionStrings[index.toString()])
            index++
        }
    }
 
    /**
     * Function to validate the errors that appear when not selecting any option
     */
    async validateErrors() {
        expect(await this.page.innerText(this.radioError)).toBe("You must select at least 1 answer")
        expect(await this.page.innerText(this.generalError)).toBe("Please answer all the questions before continuing.")
    }

    /**
     * Function to validate that an option's class updates when being selected
     * @param index number, index of the option
     */
    async validateSelectingOption(index: number) {
        expect(await this.page.innerText(this.selectedOptionText(index))).toBe(this.questionStrings[index.toString()])
    }

    /**
     * Function to click the continue button
     */
    async clickContinue() {
        await this.page.click(this.continue, {force: true})
    }

    /**
     * Function to click an option
     * @param index number, starting at index 1, correlates to the options
     */
    async clickOption(index: number) {
        if (index > 0 && index < 6) {
            await this.page.click(this.option(index))
        } else {
            throw Error("Error! Options should be between 1 and 5.")
        }
    }
}