const userName = '[data-testid="nome"]'
const userEmail = '[data-testid="email"]'
const userPassword = '[data-testid="password"]'
const createUserButton = '[data-testid="cadastrarUsuario"]'
const markAsAdmin = '[data-testid="checkbox"]'



export class CreateUserPage {

    createUser(name, email, password) {
        cy.get(userName).type(name)
        cy.get(userEmail).type(email)
        cy.get(userPassword).type(password)
        cy.get(createUserButton).click()
    }

    markAsAdmin() {
        cy.get(markAsAdmin).check()
    }


}