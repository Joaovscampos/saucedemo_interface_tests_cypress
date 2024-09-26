class CartPage {
    
    //cart screen selectors
    getCartButton() {
        return cy.contains('button', 'ADD TO CART')
    };

    getIconCart() {
        return cy.get('#contents_wrapper span');
    };

    getRemoveButton() {
        return cy.contains('button', 'REMOVE');
    };

    //cart screen methods
    clickCartButton() {
        this.getCartButton().click();
    }; 

    clickRemoveButton() {
        this.getRemoveButton().click();
    };
}

export const cartPage = new CartPage();
