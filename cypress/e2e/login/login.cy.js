import { loginPage } from '../../pageObjects/loginPage';

describe('Login', () => {
    
    
    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.visit('v1/index.html');
    });     

    
    it('login with valid credentials', () => {
        loginPage.login(loginPage.validCredentials.username, loginPage.validCredentials.password);
    });

    it('login with missing USERNAME credential', () => {
        loginPage.enterPassword(loginPage.validCredentials.password);
        loginPage.clickLoginButton();

        cy.url().should('include', 'v1/index.html');
        loginPage.validateErrorMessage(loginPage.errorMessages.missingUsername);
    });
    
    it('login with missing PASSWORD credential', () => {
        loginPage.enterUsername(loginPage.validCredentials.username);
        loginPage.clickLoginButton();

        cy.url().should('include', 'v1/index.html');
        loginPage.validateErrorMessage(loginPage.errorMessages.missingPassword);
    });

    it('login with missing USERNAME and PASSWORD credential', () => {
        loginPage.clickLoginButton();

        cy.url().should('include', 'v1/index.html');
        loginPage.validateErrorMessage(loginPage.errorMessages.bothMissing);
    });
})
