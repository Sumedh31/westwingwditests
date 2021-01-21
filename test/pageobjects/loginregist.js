const elementgrid = require("./elementgrid");
const homePage = require("./home.page");

class LoginRegist{
    
    /**
     * define selectors using getter methods
     */
    get loginLinkFromRegPopUp () {return $('button[data-testid*="login_reg_switch_btn"]')}
    get userName () {return $('input[name="email"]')}
    get password () {return $('input[name="password"]')}
    get loginButton () {return $('button[data-testid="login_reg_submit_btn"]')}    
    

    ClickOnLoginLinkFromTheRegPopUp(){
        this.loginLinkFromRegPopUp.click();
        //$('//div[@data-testid="login_and_register"]//button[@data-testid="login_reg_switch_btn"]').click(); 
    }
    login(username,password,firstName){
        this.userName.setValue(username);
        this.password.setValue(password);
        this.loginButton.click();   
        //Wait until First Name element is displayed with myaccount
        elementgrid.WaitUntilFirstNameIsDisplayed(firstName);
        //Ensure Wishlisted counter is updated correctly
        expect(homePage.numberOfWishListedItems).toHaveText('1');
        //console.log(homePage.numberOfWishListedItems.getText());
    }
}
module.exports=new LoginRegist();