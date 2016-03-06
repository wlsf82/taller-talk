var AuthenticationPage = require('./page-objects/authentication.page');
var HomePage = require('./page-objects/home.page');
var MessagesPage = require('./page-objects/messages.page');

describe( 'Drupal', function() {

  var authenticationPage = new AuthenticationPage();
  var homePage = new HomePage();
  var messagesPage = new MessagesPage();

  it( 'right theme is set', function() {

    // Arrange:
    homePage.visit();

    // Assert:
    expect(browser.executeScript('return Drupal.settings.ajaxPageState.theme')).toEqual('bluecheese');
  });

  it( 'try to login without filling the fields', function() {

    // Arrange:
    authenticationPage.visit();

    // Act:
    authenticationPage.logInButton.click();

    // Assert:
    expect(messagesPage.errorMsg.isDisplayed()).toBe(true);

  });

  it( 'try to login with invalid credentials', function() {

    // Arrange:
    authenticationPage.visit();

    // Act:
    authenticationPage.login('invaliduser', 'invalidpassword');

    // Assert:
    expect(messagesPage.errorMsg.isDisplayed()).toBe(true);

  });

});
