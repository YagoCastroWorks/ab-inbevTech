const nameInputField = '[data-testid="nome"]'
const emailInputField = '[data-testid="email"]'
const passwordInputField = '[data-testid="password"]'
const registerButton = '[data-testid="cadastrar"]'
const isAdminCheckbox = '[data-testid="checkbox"]'
const isAlreadyRegistered = '[data-testid="entrar"]'
const alertCreationFail = '.alert span'
const alertCreationSuccess = '.alert-link'



export class RegisterPage {

    registerUser(name, email, password) {
        cy.get(nameInputField).type(name)
        cy.get(emailInputField).type(email)
        cy.get(passwordInputField).type(password)
        cy.get(registerButton).click()
    }

    markAsAdmin() {
        cy.get(isAdminCheckbox).check()
    }

    verifyCreationFail(msg) {
        cy.get(alertCreationFail).contains(msg)
    }
    
     verifyCreationSuccess(msg) {
        cy.get(alertCreationSuccess).contains(msg)
    }

}