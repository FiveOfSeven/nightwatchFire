// SEE_TIME is time used for a human to see what nightwatch is doing
SEE_TIME = 1000;
MAX_WAIT = 20000;

let campaignName = "test campaign " + new Date().valueOf();

var conf = require('../../nightwatch.conf.js');

module.exports = {
  'Demo test FireDrum': function (browser) {
    browser
	  .url('https://app.firedrumemailmarketing.com/client_admin.jsp?welcome=true&featureCheck=true')
      .waitForElementVisible('body'); // wait for the body to be rendered
      // check if we are seeing the Mobile Version of GitHub
      browser.element('css selector', '.switch-to-desktop', function(result) {
        if(result.status != -1) { //Element exists, do something
          browser.click('.switch-to-desktop')
          .waitForElementVisible('body'); // wait for the body to be rendered
        }
      })
	  .pause(SEE_TIME);
    // part two:
    browser
      .assert.containsText('body', 'Get your message out!') // assert body contains text
      //.saveScreenshot(conf.imgpath(browser) + 'dwyl.png')
	  .pause(SEE_TIME)
	  .waitForElementPresent('input[name="username"]', MAX_WAIT)
	  .setValue('input[name="username"]', 'carl@paladinarcher.com')
	  .pause(SEE_TIME)
	  .waitForElementPresent('input[tabindex="2"]', MAX_WAIT)
	  .setValue('input[tabindex="2"]', 'update password here') // update password here
	  .pause(SEE_TIME)
	  .waitForElementPresent('button[name="loginButton"]', MAX_WAIT)
	  .click('button[name="loginButton"]')
	  .pause(SEE_TIME)
	  // Email Campaigns
	  .useXpath()
	  .waitForElementPresent("//span[text()='Email Campaigns']", MAX_WAIT)
	  .click("//span[text()='Email Campaigns']")
	  .pause(1000); //extra time in case it doesn't load
	  // delete a campaign if possible (only 5 campaigns allowed)
//	browser.isVisible('//div[@class="campaignPanel panel_rounded_legend"]', results => {
//		if (results.value) {
//			// campaign is visible
//			console.log("a campaign exists");
//			browser
//				.moveTo('//div[@class="campaignPanel panel_rounded_legend"]', 2, 2)
//				.pause(SEE_TIME * 15);
//		}
//	});
	// add campaign
	browser
	  .waitForElementPresent("//span[text()='Add Email Campaign']", MAX_WAIT)
	  .click("//span[text()='Add Email Campaign']")
	  .pause(SEE_TIME)
	  .setValue('//input[@class="noEnterSubmit"]', campaignName)
	  .pause(SEE_TIME)
	  .waitForElementPresent('//button[@class="saveButton"]', MAX_WAIT)
	  .click('//button[@class="saveButton"]')
	  .pause(SEE_TIME)
	  // selecting campaign template
	  .waitForElementPresent('//button[text()="Select Template"]', MAX_WAIT)
	  .click('//button[text()="Select Template"]')
	  .pause(SEE_TIME)
	  .waitForElementPresent('//a[text()="Maybe Later"]', MAX_WAIT)
	  .click('//a[text()="Maybe Later"]')
	  .pause(SEE_TIME)
	  .waitForElementPresent('//a[text()="Got it"]', MAX_WAIT)
	  .click('//a[text()="Got it"]')
	  .pause(SEE_TIME)
	  .waitForElementPresent('//span[text()="Subject"]', MAX_WAIT)
	  .click('//span[text()="Subject"]')
	  .pause(SEE_TIME)
	  .waitForElementPresent('//div[@class="propInput"]//input[@type="text"]', MAX_WAIT)
	  .click('//div[@class="propInput"]//input[@type="text"]', "Subject text")
	  .pause(SEE_TIME * 10)
      .end();
    }
  };
