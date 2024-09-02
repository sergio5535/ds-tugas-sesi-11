import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals';

import LoginPage from '../pageobjects/login.page.js';
import HomePage from '../pageobjects/home.page.js';

Given('user is on login page', async () => {
    await LoginPage.open();
})

When('user login using {string} as username and {string} as password', async (username, password) => {
    await LoginPage.inputUsername(username);
    await LoginPage.inputPassword(password);
    await LoginPage.clickLoginButton();
  })

Then('user should be redirected to home page', async () => {
    await HomePage.validateOnHomePage();
})

Given('user input {string} as username', async (username) => {
    await LoginPage.inputUsername(username);
})

Given('user input {string} as password', async (password) => {
    await LoginPage.inputPassword(password);
})

When('user click login button', async () => {
    await LoginPage.clickLoginButton();
})

Then('user should see error message {string}', async (errorMessage) => {
    await LoginPage.validateWrongPasswordDisplayed(errorMessage);
})
