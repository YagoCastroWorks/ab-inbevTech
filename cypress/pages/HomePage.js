const headingStore = '.jumbotron h1'
const createProductButton = '[data-testid="cadastrarProdutos"]'
const listUsers = '[data-testid="listarUsuarios"]'
const createUsers = '[data-testid="cadastrarUsuarios"]'
const listProducts = '[data-testid="listarProdutos"]'
const homeButton = '[data-testid="home"]'
const productName = '.card-title.negrito'



export class HomePage {

    verifyLoginAdmin(name) {
        cy.get(headingStore).contains(name)
    }

    verifyLoginUser() {
        cy.get(headingStore).contains('Serverest Store')
    }

    createProduct() {
        cy.get(createProductButton).click()
    }

    createUser() {
        cy.get(createUsers).click()
    }

    listProduct() {
        cy.get(listProducts).click()
    }
    listUser() {
        cy.get(listUsers).click()
    }

    returnToHome() {
        cy.get(homeButton).click()
    }

    addToCart(name) {
        cy.contains(productName, name)
            .parents('.card')
            .find('button:contains("Adicionar a lista")')
            .click();
    }
}