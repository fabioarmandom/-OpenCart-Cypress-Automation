
import cartpagesCy from "../../pageObjects/cartpages.cy";

describe('Basic test OpenCart', () => {
    beforeEach(() => {

        cy.clearAllCookies
        cy.visit('/');
    });
  
    it('Adding the product to the shoping cart', () => {
      cartpagesCy.fillSearchBar();
      cartpagesCy.clickSeachBtn();
      cartpagesCy.clickAddToCartBtn();
      cartpagesCy.verifyCartTotal('1 item(s)');
      cartpagesCy.clickCartTotal();
      cartpagesCy.openCart();
      cartpagesCy.verifyProductInCart();
      cartpagesCy.removeProductFromCart();
      cartpagesCy.verifyCartIsEmpty();
      
    });

    
});