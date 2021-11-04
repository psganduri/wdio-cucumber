/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
     async openHomePage() {
        await browser.url("http://automationpractice.com/index.php");
        console.log("Navigating to Url 'http://automationpractice.com/index.php'");
      }
}
export default new Page();