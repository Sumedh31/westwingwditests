const HomePage = require('../pageobjects/home.page');
const ElementGrid = require('../pageobjects/elementgrid');
const LoginRegist = require('../pageobjects/loginregist');

describe('webdriver.io page', () => {
    it('should have the right title', () => {
        //browser.url('https://www.westwingnow.de/')
        HomePage.open();
        browser.maximizeWindow();

        //Click Accept Cookies if/when the popup appears
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
        ElementGrid.ClickOnWishListIconOfGivenProduct(0);
        
        //After registration pop up is opened navigate to login link from the pop up
        LoginRegist.ClickOnLoginLinkFromTheRegPopUp();
        browser.pause(6000);
        LoginRegist.login('sumedhrtv@gmail.com','Test1234!','Sumedh');
        
        browser.pause(6000)

        ElementGrid.ClickToGoToWishListedProduct();
        browser.pause(6000);
        //expect(browser).toHaveTitle('Ihr Möbel & Interior Online-Shop | WestwingNow');
  
    })
})