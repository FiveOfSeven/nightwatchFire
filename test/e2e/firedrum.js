// SEE_TIME is time used for a human to see what nightwatch is doing
SEE_TIME = 1000;

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
	  .waitForElementPresent('input[name="username"]', 'carl@paladinarcher.com')
	  .setValue('input[name="username"]', 'carl@paladinarcher.com')
	  .pause(SEE_TIME)
	  .waitForElementPresent('input[tabindex="2"]', 'replace with password')
	  .setValue('input[tabindex="2"]', 'Three*1415926535')
	  .pause(SEE_TIME)
	  .waitForElementPresent('button[name="loginButton"]')
	  .click('button[name="loginButton"]')
	  .pause(SEE_TIME * 2)
      .end();
    }
  };
