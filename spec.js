describe( 'Drupal', function() {

  it('right theme is set', function() {

    // Arrange:
    browser.get('/');

    // Assert:
    expect(browser.executeScript('return Drupal.settings.ajaxPageState.theme')).toEqual('foo');
  });

});
