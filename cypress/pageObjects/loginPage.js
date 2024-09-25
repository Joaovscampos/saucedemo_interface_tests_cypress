class LoginPage {
    
    //Login Screen Selectors
    getUserNameInput() {
        return cy.get('#user-name');
    };

    getPasswordInput() {
        return cy.get('#password');
    };

    getLoginButton() {
        return cy.get('#login-button');
    };

    //Login screen methods
    enterUsername(username) {
        this.getUserNameInput().type(username);
    };
    
    enterPassword(password) {
        this.getPasswordInput().type(password);
    };

    clickLoginButton() {
        this.getLoginButton().click();
    };
    
    login(username, password) {
        this.getUserNameInput().type(username);
        this.getPasswordInput().type(password);
        this.getLoginButton().click();
        cy.url().should('include', '/inventory.html');
    };

    //Credentials validations
    validCredentials = {
        username: 'standard_user',
        password: 'secret_sauce',
    };

    //Login screen validations
    validateErrorMessage(message) {
        return cy.get('[data-test="error"]').should('contain', message);
    };   

    //error messages
    errorMessages = {
        missingUsername: 'Epic sadface: Username is required',
        missingPassword: 'Epic sadface: Password is required',
        bothMissing: 'Epic sadface: Username is required',
    };    
}

export const loginPage = new LoginPage();