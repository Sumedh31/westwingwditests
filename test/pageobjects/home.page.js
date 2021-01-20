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
    get pageListingElements () {return $('div[class*="DesktopFiltersStrip__FiltersContainer"]')}
    get registrationPopUp () {return $('div[data-testid*="shop-to-club-popup-wrapper"]')}
    get loginButtonFromRegPopUp () {return this.registrationPopUp.$('button[data-testid*="login-button"]')}
    get loginOverLayPopUpAfterRegistration () {return $('div[data-testid*="overlay-header"]')}
    get loginOverLayCloseButton () {return this.loginOverLayPopUpAfterRegistration.$('button[data-identifier*="LOGIN_AND_REGISTER"]')}
    

    /**
     * a method to encapsule automation code to interact with the page     
     */
    search (keyword){
        this.searchBar.setValue(keyword);
    }
    IsCookiePopUpExists(){
        this.cookieContainer.waitForExist({ timeout:5000, timeoutMsg:'Cookie Pop up is missing', interval:100 })
        return this.cookieContainer.isExisting();
    }
    ClickOnAcceptCookieIfExist(){
        if(this.IsCookiePopUpExists()){
            this.acceptCookieButton.click();
        }
    }
    WaitUntilElementAppearsAfterSearch(){
        this.pageListingElements.waitForExist({ timeout:5000, timeoutMsg:'Page elements were not loaded', interval:100 });

    }
    HandleLoginPopupAfterRegistration(){
        if(this.loginOverLayPopUpAfterRegistration.waitForExist({ timeout:5000, interval:100 })){
            this.loginOverLayCloseButton.click();        
        }

    }
    HandleRegistrationPopUp(){
        if(this.registrationPopUp.waitForExist({ timeout:5000, interval:100 })){
            this.loginButtonFromRegPopUp.click();
            this.HandleLoginPopupAfterRegistration();
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
