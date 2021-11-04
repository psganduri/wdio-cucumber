class AddProductToCart {
  // Elements on Add Products to Cart
  get btnTshirts() {
    return $("(//div[@id='block_top_menu']//a[@Title='T-shirts'])[2]");
  }
  get txtCategoty() {
    return $(".cat-name");
  }
  get imgTshirt() {
    return $("//a[@title='Faded Short Sleeve T-shirts']/img");
  }

  get txtProductTitle() {
    return $(
      "//div[@class='right-block']//a[@class='product-name' and contains (text(), 'Faded Short Sleeve T-shirts')]"
    );
  }

  get btnAddToCart() {
    // return $("//a/span[contains(text(),'Add to cart')]");
    return $("#add_to_cart button");
  }
  get btnProceedToCkout() {
    return $("//a[@title='Proceed to checkout']");
  }
  get txtShoppingCartSummary() {
    return $("#cart_title");
  }
  get txtItemInCart() {
    return $(
      "//p[@class='product-name']/a[text()='Faded Short Sleeve T-shirts']"
    );
  }

  // Actions on Add Product

  async navitageToTshirts() {
    console.log("In navigate to tshirt AP page");
    await this.btnTshirts.waitForDisplayed();
    await this.btnTshirts.click();
    await this.txtCategoty.waitForExist({ timeout: 5000 });
  }
  async addProductToCart() {
    await this.txtProductTitle.waitForDisplayed();
    await this.txtProductTitle.scrollIntoView();
    const prdTxtExp = await this.txtProductTitle.getText();

    global.SharedVariable.productDetails = prdTxtExp;
    console.log(
      "Expected product txt is: " + global.SharedVariable.productDetails
    );
    await this.txtProductTitle.click();
    // await browser.moveToElement(this.imgTshirt);

    // await browser.pause(5000);
    await this.btnAddToCart.waitForDisplayed();
    // await this.btnAddToCart.moveTo();
    // await browser.waitUntil(this.btnAddToCart.isClickable());
    await this.btnAddToCart.click();
    await browser.pause(5000);
  }

  async navigateToPaymentsPage() {
    // await this.btnProceedToCkout.isClickable({ timeout: 5000 });
    await this.btnProceedToCkout.waitForDisplayed();
    await this.btnProceedToCkout.click();
    await browser.pause(5000);
    await this.txtShoppingCartSummary.waitForDisplayed({ timeout: 5000 });
    await this.txtShoppingCartSummary.isDisplayed();
  }
  async verifyProductDetailsInCart() {
    await this.txtItemInCart.waitForExist();
    const Actualtxt = await this.txtItemInCart.getText();
    console.log("Actual text is:" + Actualtxt);
    const ExpText = await global.SharedVariable.productDetails;
    console.log("Exp text is:" + (await global.SharedVariable.productDetails));
    expect(Actualtxt).toEqual(ExpText);
  }
}
export default new AddProductToCart();
