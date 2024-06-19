import{loginCommands} from '../../support/loginCommands/loginCommands' 

describe('Validar Login', () => {
    
    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.visit('https://www.saucedemo.com/v1/index.html');
    })    

    //*Teste realizado com sucesso 16/05/2024
    it('Validar login com credenciais válidas', () => {
        cy.loginComplete('standard_user', 'secret_sauce');
    });

    //*Teste realizado com sucesso 17/05/2024 
    it('Validar login com credencial USERNAME faltante', () => {
        cy.loginOnlyPassword('secret_sauce');
    });
    
    //*Teste realizado com sucesso 17/05/2024
    it('Validar login com credencial PASSWORD faltante', () => {
        cy.loginOnlyUsername('standard_user');
    });

    //*Teste realizado com sucesso 17/05/2024
    it('Validar login com nenhuma credencial', () => {
        cy.loginEmpty();
    });
})
