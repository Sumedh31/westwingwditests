const HomePage = require('../pageobjects/home.page');

describe('webdriver.io page', () => {
    it('should have the right title', () => {
        //browser.url('https://www.westwingnow.de/')
        HomePage.open();
        browser.maximizeWindow();
        //Wait until Cookies pop up appears and then accept cookies
        HomePage.ClickOnAcceptCookieIfExist();
        //Search for Möbel
        HomePage.search('Möbel');  
        browser.keys('Enter');
        //Wait until products are loaded      
        HomePage.WaitUntilElementAppearsAfterSearch();   
        //Close Registration pop up if it exists
        HomePage.HandleRegistrationPopUp();     
        browser.pause(3000);
        //expect(browser).toHaveTitle('Ihr Möbel & Interior Online-Shop | WestwingNow');
    })
})