import{checkoutCommands} from '../../support/checkoutCommands/checkoutCommands'

describe(' Validar Checkout', () => {
    
  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.visit('https://www.saucedemo.com/v1/index.html');
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
    cy.get('.inventory_item').first().find('button').click();
    cy.get('.shopping_cart_link').click();
    cy.get('.btn_action.checkout_button').click();
  }); 
  
    it('Validar checkout com os campos em branco', () => {
      cy.checkoutBlankFields();
    });
    
    it('Validar checkout com First Name em branco', () => {
      cy.checkoutFirstName();
    });

    it('Validar checkout com Last Name em branco', () => {
      cy.checkoutLastName();
    });

    it('Validar checkout com Postal Code em branco', () => {
      cy.checkoutPostalCode();
    });

    it('Validar checkout com todos os campos preenchidos', () => {
      cy.checkoutAllFieldsFilled();
  });

});