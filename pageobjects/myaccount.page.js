class MyAccount {
    //  Web Elements on My Account
    // get btnMyAddress() { return $(".icon-building");}
    // get btnOrderHistory() {return $(".icon-list-ol");}
    get btnPersonalInfo() {  return $(".icon-user");}
    // get btnMyWishList() {  return $(".icon-heart");}
    get btn_LogOut() { return $(".logout");}

    //Personal Information page
    get input_FirstName() { return $("#firstname");}
    get input_LastName() { return $("#lastname");}
  
    // Address Page
    // get btnPageHeading() { return $(".page-heading");}
    // get txtGetAddressName() {return $(".last_item.item.box li:nth-child(2)");}
    // get txtAddressCompany() {return $(".address_company");}
    // get txtAddress1() {  return $(".address_address1");}
    // get txtAddress2() {return $(".address_address2");}


  
    // Page Actions on My account Landing Page
  
    verifyFirstAndLastName = async (personalDetailsObj) => {
      await this.btnPersonalInfo.click();
      console.log("******firstname variable is: " + personalDetailsObj.firstName)
      console.log("******firstname on web page is: " + await this.input_FirstName.getValue());
      await expect(await this.input_FirstName).toHaveValueContaining(personalDetailsObj.firstName)
      
      await expect(await this.input_LastName).toHaveValueContaining(personalDetailsObj.lastName)
      
    };

    //Sign out from the portal
    //Page Actions on my account landing page
    signOutFromPortal = async () => {
      await this.btn_LogOut.click();
      console.log("Logout success !!");
    };


  }
  
  export default new MyAccount();