Cypress.Commands.add('loginComplete', (username, password) => {
    cy.get('input[id = "user-name"]').type(username);
    cy.get('input[id = "password"]').type(password);
    cy.get('input[id = "login-button"]').click();
    cy.url().should('include', '/inventory.html');
});

Cypress.Commands.add('loginOnlyUsername', (username) => {
    cy.get('input[id = "user-name"]').type(username);
    cy.get('input[id = "login-button"]').click();
    cy.get('[data-test="error"]').contains('Epic sadface: Password is required').should('be.visible');
    cy.url().should('include', '/index.html');
});
    
Cypress.Commands.add('loginOnlyPassword', (password) => {
    cy.get('input[id = "password"]').type(password);
    cy.get('input[id = "login-button"]').click();
    cy.get('[data-test="error"]').contains('Epic sadface: Username is required').should('be.visible');
    cy.url().should('include', '/index.html');
});

Cypress.Commands.add('loginEmpty', () => {
    cy.get('input[id = "login-button"]').click();
    cy.get('[data-test="error"]').contains('Epic sadface: Username is required').should('be.visible');
    cy.url().should('include', '/index.html');
});

