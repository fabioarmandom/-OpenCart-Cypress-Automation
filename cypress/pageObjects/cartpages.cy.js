
class cartpage {

    elements = {
        searchInput: () => cy.get('input[name="search"]'),
        searchBtn: () => cy.get('.input-group-btn .btn'),
        addToCartBtn: () => cy.get('[onclick^="cart.add"]'),
        cartTotal: () => cy.get('#cart-total'),
        viewCartButton: () => cy.get('a[href*="checkout/cart"]').contains('View Cart'),
        productInCart: () => cy.get('.table-responsive').find('td.text-left').contains('iPhone'),
        removeButton: () => cy.get('.table-responsive').find('button.btn-danger'),
        emptyCartMessage: () => cy.get('#content p').contains('Your shopping cart is empty!'),
        
    }

    fillSearchBar(){
        this.elements.searchInput().type('Iphone');
        cy.screenshot();
    }

    clickSeachBtn(){
        this.elements.searchBtn().click();
    }

    clickAddToCartBtn(){
        this.elements.addToCartBtn().click();
    }

    verifyCartTotal(items) {
        this.elements.cartTotal().should('contain', items);
      }

    clickCartTotal(){
        this.elements.cartTotal().click();
        cy.screenshot();

    }
    openCart() {
        this.elements.viewCartButton().click();
        cy.get('a[title="Shopping Cart"]').click();
        
    }
    verifyProductInCart() {
        this.elements.productInCart().should('exist');
        cy.screenshot('verify-product-in-cart'); 
    }

    removeProductFromCart() {
        this.elements.removeButton().click();
        cy.screenshot('remove-product');
    }

    verifyCartIsEmpty() {
        this.elements.emptyCartMessage().should('be.visible'); 
        cy.screenshot('verify-cart-empty'); 
    }
}

module.exports = new cartpage();