const productNameInput = '[data-testid="nome"]'
const productPrice = '[data-testid="preco"]'
const productDescription = '[data-testid="descricao"]'
const productQuantity = '[data-testid="quantity"]'
const productImage = '[data-testid="imagem"]'
const productRegisterButton = '[data-testid="cadastarProdutos"]'
const deleteButton = 'button[class="btn btn-danger"]'

export class ProductPage {


    createProduct(name, price, description, quantity ) {

        cy.get(productNameInput).type(name)
        cy.get(productPrice).type(price)
        cy.get(productDescription).type(description)
        cy.get(productQuantity).type(quantity)
        cy.get(productImage).selectFile('cypress/fixtures/myimage.png');
        cy.get(productRegisterButton).click()
        cy.contains('td', name).should('be.visible')
    }

        deleteProduct(name) {

        cy.contains('td', name)
        .parents('tr')          
        .find(deleteButton) 
        .click();
       
    }

}