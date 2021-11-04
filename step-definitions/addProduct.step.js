import { Given, When, Then } from "@cucumber/cucumber";
import AddProductToCartPage from "../pageobjects/addProduct.page";

Then(/^I shall add a product to the shopping cart$/, async () => {
  console.log("In add prod to cart SD");
  await AddProductToCartPage.navitageToTshirts();
  // productDetails = addProductPage.imgTshirt.getValue();
  // console.log("123" + productDetails);

  //   console.log(
  //     "*******Exp Product name added to cart is get value:" +
  //       addProductPage.imgTshirt.getValue()
  //   );

  await AddProductToCartPage.addProductToCart();
});

Then(/^navigate to the payments page$/, async () => {
  await AddProductToCartPage.navigateToPaymentsPage();
});

Then(
  /^verify product displayed in the cart is same as the product added earlier$/,
  async () => {
    await AddProductToCartPage.verifyProductDetailsInCart();
    console.log("In verify cart SD");
    // console.log("Expected text is" + addProductPage.prdTxtExp);

    // ExpProdDescGT = addProductPage.txtItemInCart.getText();
    // ExpProdDescGV = addProductPage.txtItemInCart.getValue();
    // console.log(ExpProdDescGT);
    // console.log(ExpProdDescGV);
    // console.log(
    //   "**********ACtual get text of item in cart is:" +
    //     addProductPage.txtItemInCart.getText()
    // );
    // console.log(
    //   "***********ACtual get Value of item in cart is:" +
    //     addProductPage.txtItemInCart.getValue()
    // );
  }
);
