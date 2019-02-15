// SEE_TIME is time used for a human to see what nightwatch is doing
SEE_TIME = 3000;

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
	  .click('input[name="username"]')
	  .pause(SEE_TIME);
	  .click('input[name="password"]')
      .end();
    }
  };
