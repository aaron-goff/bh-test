import { Browser, Page } from "@playwright/test";

/**
 * global variables
 */
declare global {
  const page: Page;
  const browser: Browser;
  const browserName: string;
}