Cypress.Commands.add('checkoutBlankFields', () => {
    cy.url().should('include', '/checkout-step-one.html');
    cy.get('.btn_primary').click();
    cy.contains('Error: First Name is required').should('exist');
});

Cypress.Commands.add('checkoutFirstName', () => {
    cy.get('#last-name').type('Da Silva');
    cy.get('#postal-code').type('52050375');
    cy.get('.btn_primary').click();
    cy.contains('Error: First Name is required').should('exist');
});

Cypress.Commands.add('checkoutLastName', () => {
    cy.get('#first-name').type('Fulano');
    cy.get('#postal-code').type('52050375');
    cy.get('.btn_primary').click();
    cy.contains('Error: Last Name is required').should('exist');
});

Cypress.Commands.add('checkoutPostalCode', () => {
    cy.get('#first-name').type('Fulano');
    cy.get('#last-name').type('Da Silva');
    cy.get('.btn_primary').click();
    cy.contains('Error: Postal Code is required').should('exist');
});

Cypress.Commands.add('checkoutAllFieldsFilled', () => {
    cy.get('#first-name').type('Fulano');
    cy.get('#last-name').type('Da Silva');
    cy.get('#postal-code').type('52050375');
    cy.get('.btn_primary').click();
    cy.url().should('include', '/checkout-step-two.html');
    cy.get('.btn_action').click(); 
    cy.url().should('include', '/checkout-complete.html');
    cy.get('.complete-header').contains('THANK YOU FOR YOUR ORDER'); 
    cy.get('.complete-text').contains('Your order has been dispatched, and will arrive just as fast as the pony can get there!'); 
    cy.get('.pony_express').should('be.visible'); 
});

