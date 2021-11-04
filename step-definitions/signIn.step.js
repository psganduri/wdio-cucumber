import { Given, When, Then } from "@cucumber/cucumber";
import signInPage from "../pageobjects/signIn.page";
import myaccountPage from "../pageobjects/myaccount.page";
import addProductpage from "../pageobjects/addProduct.page";
import addProductPage from "../pageobjects/addProduct.page";

Then(/^I am on signIn page$/, async () => {
  await signInPage.verifySignInPageIsDisplayed();
});

Then(/^I shall login to the portal using the account created$/, async () => {
  await signInPage.loginAsRegisteredUser();
  await myaccountPage.verifyFirstAndLastName(
    global.SharedVariable.personalDetails
  );
});
