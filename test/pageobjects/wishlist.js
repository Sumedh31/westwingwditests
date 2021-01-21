class WishList{

    /**
     * define selectors using getter methods
     */
    
    get wishListedItemsDelete () {return $('button[class*="blockListProduct__delete"]')}

    RemoveWishListedItem(){
        this.wishListedItemsDelete.click();
        this.wishListedItemsDelete.waitForExist({ timeout:5000,reverse:true, timeoutMsg:"Wishlist counter was not reduced", interval:400 })
    }
    
    



}
module.exports=new WishList();