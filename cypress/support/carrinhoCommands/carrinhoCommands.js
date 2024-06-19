Cypress.Commands.add('addCart', ()=> {
    cy.get(':nth-child(1) > .pricebar > .btn_primary').click();
    cy.get('.fa-layers-counter').click();
    cy.get('.fa-layers-counter').contains('1').should('be.visible');
    cy.url().should('eq','https://www.saucedemo.com/v1/cart.html');
});

Cypress.Commands.add('removeItemCart', ()=> {
    cy.get(':nth-child(2) > .pricebar > .btn_primary').click();
    cy.get('.fa-layers-counter').click();
    cy.get('.cart_footer > .btn_secondary').click();
    cy.get('.btn_secondary').click();
    cy.get('path[fill="currentColor"]').should('be.empty');

});   