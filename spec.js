describe( 'Drupal', function() {

  it( 'right theme is set', function() {

    // Arrange:
    browser.get('/');

    // Assert:
    expect(browser.executeScript('return Drupal.settings.ajaxPageState.theme')).toEqual('bluecheese');
  });

  it( 'try to login without filling the fields', function() {

    // Arrange:
    browser.get('user');

    // Act:
    element(by.id('edit-submit')).click();

    var errorMsg = element(by.css('.messages.error'));

    // Assert:
    expect(errorMsg.isDisplayed()).toBe(true);

  });

});
