import { expect, Page } from '@playwright/test'
import { Base } from './Index'

export class Landing extends Base {

    /**
     * Class variables
     */
    headerLogo = '.sl-header__logo'
    headerLogoImg = this.headerLogo + ' img';
    login = 'a.sl-header__login';
    h1 = '.landing-page h1';
    getStarted = '.landing-page .sl-button'
    copyright = '#footer-wrapper div:nth-Child(1)'
    version = '#footer-wrapper div:nth-Child(2)'
    chat = '#transparent-button'


    constructor(page: Page) {
        super(page)
        this.pageIndex = 0
    }
    
    /**
     * Function to navigate to the sleepio onboarding landing page
     */
    async navigate() {
        await this.page.goto('https://onboarding.sleepio.com/sleepio/big-health');
    };

    /**
     * Function to click the Get Started button
     */
    async clickGetStarted() {
        await this.page.click(this.getStarted)
    }

    /**
     * Function to validate the text elements on the Landing page
     */
    async validateTextElements() {
        expect(await this.page.getAttribute(this.headerLogoImg, 'alt')).toBe('Sleepio Logo');
        expect(await this.page.innerText(this.login)).toBe('Log in');
        expect(await this.page.innerText(this.h1)).toBe('Discover your Sleep Score and how to improve it');
        expect(await this.page.inputValue(this.getStarted)).toBe('Get started');
        expect(await this.page.innerText(this.copyright)).toBe('© 2021 Big Health.')
        expect(await this.page.innerText(this.version)).toBe('Sleepio Onboarding Version 2.0.0')
        expect(await this.page.innerText(this.chat)).toBe('Live Chat')
    }

    /**
     * Function to validate the hyperlink references
     */
    async validateLinkRefs() {
        expect(await this.page.getAttribute(this.headerLogo, 'href')).toBe("/sleepio/big-health")
        expect(await this.page.getAttribute(this.login, 'href')).toContain("/login-component/login")
    }

    /**
     * Override function to validate the progress bar does not appear
     */
    async validateProgressBar() {
        expect(await this.page.isVisible(this.progressWrapper)).toBe(false)
    }
}