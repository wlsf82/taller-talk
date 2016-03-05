var SpecReporter = require('jasmine-spec-reporter');

exports.config = {
  seleniumAddress: 'http://ondemand.saucelabs.com:80/wd/hub',

  specs: [
    'spec.js'
  ],

  // Reference: https://github.com/appium/sample-code/blob/master/sample-code/examples/node/helpers/caps.js
  capabilities: {
    browserName: 'safari',
    'appium-version': '1.5',
    platformName: 'iOS',
    platformVersion: '9.2',
    deviceName: 'iPhone 4s',

    // Saucelabs credentials
    username: 'talkabouttest',
    accessKey: '397a4689-88ed-43c7-b57d-ce1332ca92a1',

    // Test suite name.
    'name': 'SemaphoreCI, SauceLabs and Protractor test suite'
  },

  baseUrl: 'http://choko.org/',

  onPrepare: function() {
    // Add jasmine spec reporter
    jasmine.getEnv().addReporter(new SpecReporter({
      displayFailuresSummary: true,
      displayFailedSpec: true,
      displaySuiteNumber: true,
      displaySpecDuration: true
    }));
  },
};
