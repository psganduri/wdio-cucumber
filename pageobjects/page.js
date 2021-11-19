/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
class Page {
  async openHomePage() {
    await browser.url("http://automationpractice.com/index.php");
    console.log("Navigating to Url 'http://automationpractice.com/index.php'");
  }
}
export default new Page();
