const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    get searchBar (){return $('input[type="search"]')}
    get cookieContainer (){return $('#onetrust-banner-sdk .ot-sdk-container')}
    get acceptCookieButton () {return $('#onetrust-button-group #onetrust-accept-btn-handler')}
    

    /**
     * a method to encapsule automation code to interact with the page     
     */
    search (keyword){
        this.searchBar.setValue(keyword);
    }
    IsCookiePopUpExists(){
        return this.cookieContainer.isExisting();
    }
    ClickOnAcceptCookieIfExist(){
        if(this.IsCookiePopUpExists()){
            this.acceptCookieButton.click();
        }
    }
    

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open();
    }
}

module.exports = new HomePage();
