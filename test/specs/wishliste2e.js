const HomePage = require('../pageobjects/home.page');
const ElementGrid = require('../pageobjects/elementgrid');
const LoginRegist = require('../pageobjects/loginregist');
const WishList = require('../pageobjects/wishlist');

describe('Westwing Wishlist Functionality without logged in user', () => {
    it('Should add the wishlisted item to list', () => {
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
        
        //Now click on first products wishlist icon
        ElementGrid.ClickOnWishListIconOfGivenProduct(0);
        
        //After registration pop up is opened navigate to login link from the pop up
        LoginRegist.ClickOnLoginLinkFromTheRegPopUp();
        
        //Login to the site and check first name is displayed with my account icon
        LoginRegist.login('sumedhrtv@gmail.com','Test1234!','Sumedh');
        
        //After login Ensure that correct number of wishlisted items are present
        expect(HomePage.numberOfWishListedItems).toHaveText('1');


        //Go to wishlisted page
        ElementGrid.ClickToGoToWishListedProduct();

        //Remove the product from the wishlist
        WishList.RemoveWishListedItem();
    })
})