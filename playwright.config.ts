// playwright.config.ts
import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  reporter: [ ['list'], ['junit', { outputFile: 'results.xml' }] ],
  use: {
    headless: false
  }
};
export default config;