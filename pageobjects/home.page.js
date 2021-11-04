class HomePage {
  
    //Web Elements on Home Page
    get btnSignIn() { return $(".login");}
    get btnSignOut() { return $(".logout");}
    get txtSignedUserName() { return $(".header_user_info .account");}
    get link_Contact() { return $("#contact-link"); }
    get img_Logo() { return $(".logo.img-responsive");}

  // Page Actions
  async navigateToLoginPage() {
    await this.btnSignIn.click();
    console.log("Sign In Button Is Clicked");
    browser.pause(5000)
  }
}
export default new HomePage();
