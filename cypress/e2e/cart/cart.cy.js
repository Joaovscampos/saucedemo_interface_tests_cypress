import { cartPage } from "../../pageObjects/cartPage";
import { loginPage } from '../../pageObjects/loginPage';


describe('Validar Carrinho', () => {

    beforeEach(()=> { 
        cy.clearCookies();
        cy.clearLocalStorage();  
        cy.visit('/v1/index.html');
        
        loginPage.login(loginPage.validCredentials.username, loginPage.validCredentials.password);
    }); 

    it('add to cart', () => {
        cartPage.clickCartButton();
        cartPage.getIconCart()
            .should('have.text', '1')
            .and('be.visible');
    });

    it('remove Item from Cart', () =>{
        cartPage.clickCartButton();
        cartPage.clickRemoveButton();

        cartPage.getIconCart()
            .should('not.exist');
    });
})

