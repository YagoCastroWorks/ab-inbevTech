const emailInputField = '[data-testid="email"]'
const passwordInputField = '[data-testid="senha"]'
const enterButton = '[data-testid="entrar"]'
const registerRedirectButton = '[data-testid="cadastrar"]'

export class LoginPage {

    login(email, password) {
        cy.get(emailInputField).type(email)
        cy.get(passwordInputField).type(password)
        cy.get(enterButton).click()
    }
    
    registerRedirect() {
        cy.get(registerRedirectButton).click()
    }
}