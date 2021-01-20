const HomePage = require('../pageobjects/home.page');

describe('webdriver.io page', () => {
    it('should have the right title', () => {
        //browser.url('https://www.westwingnow.de/')
        HomePage.open();
        browser.maximizeWindow();
        browser.pause(3000);
        HomePage.ClickOnAcceptCookieIfExist();
        HomePage.search('Möbel');  
              
        browser.pause(3000);
        browser.keys('Enter');
        browser.pause(3000);
        expect(browser).toHaveTitle('Ihr Möbel & Interior Online-Shop | WestwingNow');
    })
})