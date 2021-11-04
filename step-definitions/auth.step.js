import { Given, When, Then } from "@cucumber/cucumber";
import faker from "faker";
import authPage from "../pageobjects/auth.page";
import HomePage from "../pageobjects/home.page";
import AddProductToCartPage from "../pageobjects/addProduct.page";

Then(/^I create an account with random data$/, async () => {
  console.log("account creation ");

  const randomStr = Math.random().toString(36).substr(2, 5);
  const emailId = `myemail_${randomStr}@gmail.com`;
  console.log("email address created is:" + emailId);

  const personalDetailsObj = {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    company: faker.company.companyName(),
    address1: faker.address.streetAddress(),
    address2: faker.random.alphaNumeric(5),
  };

  global.SharedVariable.email = emailId;
  global.SharedVariable.personalDetails = personalDetailsObj;
  await authPage.createAccount(emailId, personalDetailsObj);
});

Given(/^I am on the Sign In Page$/, async () => {
  if (await HomePage.btnSignOut.isExisting()) {
    await authPage.signOut();
  }

  await expect(HomePage.btnSignIn).toBeDisplayed();
  await expect(HomePage.img_Logo).toBeDisplayed();
  await expect(HomePage.link_Contact).toBeDisplayed();

  await HomePage.navigateToLoginPage();
});

Given(/^Login using newly created credentials$/, async () => {
  await authPage.signIn(global.SharedVariable.email);
});
