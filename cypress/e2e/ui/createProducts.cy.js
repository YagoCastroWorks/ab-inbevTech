import { PageManager as pm  } from "../../pages/PageManager"
import { commonData as data} from "../../support/commonData";


let productName;
let productPrice;
let productDescription;
let productQuantity;
let password;
let adminName;
let adminEmail;


describe('Tests related to Product Creation', () => {

    before(() => {

        adminName = `Admin${data.userName}` 
        adminEmail = `Admin${data.userEmail}`
        password = data.password

        productName = `Test-${data.productName}`
        productPrice = 10
        productDescription = data.productDescription
        productQuantity = 1
        
    });

    beforeEach(() => {

        
        cy.visit(Cypress.env('UI_URL'));
        
    })
    afterEach(() => {

        cy.clearCookies()
    })

    it('Create an User Admin and Create a product', () =>{
    
        pm.LoginPage.registerRedirect()
        pm.RegisterPage.markAsAdmin()
        pm.RegisterPage.registerUser(adminName, adminEmail, password)
        pm.RegisterPage.verifyCreationSuccess('Cadastro realizado com sucesso')
        pm.HomePage.verifyLoginAdmin(adminName)
        pm.HomePage.createProduct()
        pm.ProductPage.createProduct(productName, productPrice, productDescription, productQuantity)
    
    })

    it('Log as User Admin and Delete a product', () =>{
    
        pm.LoginPage.login(adminEmail, password)
        pm.HomePage.verifyLoginAdmin(adminName)
        pm.HomePage.listProduct()
        pm.ProductPage.deleteProduct(productName)
    
    })
    
})