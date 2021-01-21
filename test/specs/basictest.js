const HomePage = require('../pageobjects/home.page');
const ElementGrid = require('../pageobjects/elementgrid');
const LoginRegist = require('../pageobjects/loginregist');

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
        //Now click on first products wishlist icon
        ElementGrid.ClickOnWishListIconOfGivenProduct(1);
        browser.pause(6000);
        //After registration pop up is opened navigate to login link from the pop up
        LoginRegist.ClickOnLoginLinkFromTheRegPopUp();
        browser.pause(6000);
        LoginRegist.login('sumedhrtv@gmail.com','Test1234!');
        browser.pause(6000)
        //expect(browser).toHaveTitle('Ihr Möbel & Interior Online-Shop | WestwingNow');
    })
})