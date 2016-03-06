var AuthenticationPage = function() {

  this.userField = element(by.id('edit-name'));
  this.passwordField = element(by.id('edit-pass'));
  this.logInButton = element(by.id('edit-submit'));

  this.login = function(user, password) {

    this.userField.sendKeys(user);
    this.passwordField.sendKeys(password);
    this.logInButton.click();

  };

  this.visit = function() {

    browser.get('user');

  };

};

module.exports = AuthenticationPage;
