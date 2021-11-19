class SignInPage {
  // Elements on SignIn Page
  get input_RegEmail() {
    return $("#email");
  }
  get input_Password() {
    return $("#passwd");
  }
  get btnSignIn() {
    return $("#SubmitLogin");
  }
 
  // Actions on SignIn Page

  async verifySignInPageIsDisplayed() {
    this.input_RegEmail.isDisplayed;
    this.input_Password.isDisplayed;
  }

  async loginAsRegisteredUser() {
    await this.input_RegEmail.setValue(global.SharedVariable.email);
    console.log("1");
    await this.input_Password.setValue("password123");
    console.log("2");
    await this.btnSignIn.waitForClickable();
    await this.btnSignIn.click();
  }
}
export default new SignInPage();
