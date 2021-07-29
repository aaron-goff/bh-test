# Big Health Test Project

## Overview
This project uses Playwright as it's test runner. It uses TypeScript as it's language.

## Pre-requisites
- The only pre-requisite is to have node installed. I created this project using node version 14.15.4

## Installing dependencies
- `npm run install-all` will run the following two commands. Running this command should suffice, but if it doesn't, try them individually.
- `npm install` will install the node modules
- `npx install playwright` will install the playwright specific browsers. For more information on why this is needed, check out the [getting started documentation from Playwright](https://playwright.dev/docs/intro#installation).

## Running tests
- The config file (`./playwright.config.ts`) modifies the test runner in three ways:
  - Reports the test results using `line`, which prints the results to the console.
  - Reports the test results as a `junit` type, in the `./results.xml` file.
  - Runs the tests in headed mode
- `npm run test` will run the tests in chromium, across three different runners
- `npm run test-all` will run the tests in chromium, firefox, and webkit, across three different runners
- `npm run test-chromium` will run the tests in chromium, across three different runners
- `npm run test-firefox` will run the tests in firefox, across three different runners
- `npm run test-webkit` will run the tests in webkit, across three different runners (unable to validate, since I was developing on Windows)
