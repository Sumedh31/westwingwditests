class ElementGrid{

    /**
     * define selectors using getter methods
     */
    get mainGrid () {return $('div[class*="ProductGrid__StyledGrid"]')}
    get productList () {return this.mainGrid.$$('div[data-testid*="generic-product"]')}
    get wishListIcon () {return $$('//div[@data-testid="wishlist-icon"]')}
    //get accountNameDisplayed () {return $('//div[contains(@class,"IconsButtonTray__IconItemWrapper")]//span[contains(text(),${firstName})]')}
    get accountNameDisplayed () {return $('//div[contains(@class,"IconsButtonTray__IconItemWrapper")]//span[contains(text(),"Sumedh")]')}

    ClickOnWishListIconOfGivenProduct(number){
        this.wishListIcon[number].click();
        //$$('//div[@data-testid="wishlist-icon"]')[1].click();        
    }
    WaitUntilFirstNameIsDisplayed(firstName){
        //let firstName=firstName;
        this.accountNameDisplayed.waitForExist({ timeout:5000, interval:400 });
    }
}
module.exports=new ElementGrid();