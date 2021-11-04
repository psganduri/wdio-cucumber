import { Given, When, Then } from "@cucumber/cucumber";
import Page from "../pageobjects/page";
import homePage from "../pageobjects/home.page";
import signInPage from "../pageobjects/signIn.page";

Given(/^I am on the home page$/, async () => {
  await Page.openHomePage();
  await expect(homePage.btnSignIn).toBeDisplayed();
  await expect(homePage.img_Logo).toBeDisplayed();
  await expect(homePage.link_Contact).toBeDisplayed();
});

When(/^I navigate to singin page$/, async () => {
  await homePage.navigateToLoginPage();
  console.log("Clicked on Sign in buttong on home page for sign up / sing in");
});
