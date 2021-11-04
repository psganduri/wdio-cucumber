import { Then } from "@cucumber/cucumber";
import myaccount from "../pageobjects/myaccount.page";

Then(
  /^I shall verify the first and last name on the landing page$/,
  async () => {
    await myaccount.verifyFirstAndLastName(
      global.SharedVariable.personalDetails
    );
  }
);

Then(/^I signout from portal$/, async () => {
  await myaccount.signOutFromPortal();
});
