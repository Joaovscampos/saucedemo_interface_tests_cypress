import{carrinhoCommands} from '../../support/carrinhoCommands/carrinhoCommands'

describe('Validar Carrinho', () => {

    beforeEach(()=> { 
        cy.clearCookies();
        cy.clearLocalStorage();  
        cy.visit('https://www.saucedemo.com/v1/index.html');
        cy.get('input[id = "user-name"]').type('standard_user');
        cy.get('input[id = "password"]').type('secret_sauce');
        cy.get('#login-button').click();
    })

    it('Adicionar carinho de compras', () => {
        cy.addCart();
    })

    it('Remover item do carinho de compras', () =>{
        cy.removeItemCart();
    })
})

