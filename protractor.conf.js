var SpecReporter = require('jasmine-spec-reporter');

exports.config = {
  seleniumAddress: 'http://ondemand.saucelabs.com:80/wd/hub',

  specs: [
    'spec.js'
  ],

  // Reference: https://github.com/appium/sample-code/blob/master/sample-code/examples/node/helpers/caps.js
  capabilities: {
    // iOS capabilities:
    // browserName: 'safari',
    // 'appium-version': '1.5',
    // platformName: 'iOS',
    // platformVersion: '9.2',
    // deviceName: 'iPhone 4s',

    // Android capabilities:
    browserName: 'Browser',
    'appium-version': '1.5',
    platformName: 'Android',
    platformVersion: '4.4',
    deviceName: 'Samsung Galaxy S4 Emulator',

    // Saucelabs credentials
    username: 'talkabouttest',
    accessKey: '397a4689-88ed-43c7-b57d-ce1332ca92a1',

    // Test suite name.
    'name': 'Taller Talk: Mobile simulation, SemaphoreCI, SauceLabs and Protractor'
  },

  baseUrl: 'http://drupal.org/',

  onPrepare: function() {
    // Add jasmine spec reporter
    jasmine.getEnv().addReporter(new SpecReporter({
      displayFailuresSummary: true,
      displayFailedSpec: true,
      displaySuiteNumber: true,
      displaySpecDuration: true
    }));

    // Used for non-angular apps
    browser.ignoreSynchronization = true;
  },
};
