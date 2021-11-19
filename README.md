# wdio-cucumber

1. Clone the repository by executing
   git init
   git clone https://github.com/psganduri/wdio-cucumber.git
2. Open Project root folder in Visual Studio Code
3. Project configuration steps - Open New terminal in Visual Studio code run below commands or make selection as below
   3.1. npm init wdio .
   ? Where is your automation backend located? - On my local machine - Hit enter
   ? Which framework do you want to use? - Select > cucumber
   ? Do you want to use a compiler? (Use arrow keys) - select > Babel (https://babeljs.io/)
   ? Where are your feature files located? Hit Enter
   ? Where are your step definitions located? Hit Enter
   ? Do you want WebdriverIO to autogenerate some test files? (Y/n) n
   ? Which reporter do you want to use? - Use Space to select multiple - select spec and allure - Hit enter
   ? Do you want to add a service to your test setup? (Press <space> to select, <a> to toggle all, <i> to invert selection) - >(\*) chromedriver
   ? What is the base url? Hit Enter

---

## In wdio.conf.js make below changes, save and close it.

Set feature file path in specs as below
specs: ["./features/**/online_shopping.feature"],
-------------------------------------------------------------
Set Step definitions path as below
Under cucumberOpts:{
require: ["./step-definitions/*.js"],
-------------------------------------------------------------
Under capabilities add below configuration for browser window to be maximised
browserName: "chrome",
acceptInsecureCerts: true,
"goog:chromeOptions": {
args: ["--start-maximized"],
},
-------------------------------------------------------------   
   
Add below global sharedvariables under before feature
beforeFeature: function (uri, feature) {
global.SharedVariable = {
email: "",
personalDetails: {},
productDetails: "",
};
browser.maximizeWindow();
},

---

********\*********To start the test, run:******\*\*******
npm run test

********\*********To generate report, execute below comand post test run****\*\*\*****
allure generate
allure open
