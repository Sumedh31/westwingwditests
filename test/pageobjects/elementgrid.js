class ElementGrid{

    /**
     * define selectors using getter methods
     */
    get mainGrid () {return $('div[class*="ProductGrid__StyledGrid"]')}
    get productList () {return this.mainGrid.$$('div[data-testid*="generic-product"]')}
    get wishListIcon () {return $$('//div[@data-testid="wishlist-icon"]')}    
    get accountNameDisplayed () {return $("//div[contains(@class,'IconsButtonTray__IconItemWrapper')]//span[contains(text(),'" +firstName + "')]")}
    get wishListedProductButton () {return $('svg[class="icon-wishlist"]')}

    ClickOnWishListIconOfGivenProduct(number){
        this.wishListIcon[number].click();
    }
    WaitUntilFirstNameIsDisplayed(firstName){
        $("//div[contains(@class,'IconsButtonTray__IconItemWrapper')]//span[contains(text(),'" +firstName + "')]").waitForExist({ timeout:5000, interval:400 });
        //this.accountNameDisplayed.waitForExist({ timeout:5000, interval:400 });       
    }
    ClickToGoToWishListedProduct(){
        this.wishListedProductButton.click();
    }

}
module.exports=new ElementGrid();