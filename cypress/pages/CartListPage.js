const headingLabel = '.jumbotron h1'
const itemNameLabel = '[data-testid="shopping-cart-product-name"]'




export class CartListPage {

    verifyCartLabel() {
        cy.get(headingLabel).contains('Lista de Compras')
    }

    verifyItemLabelInCart(name) {
        cy.get(itemNameLabel).contains(name)
    }

}