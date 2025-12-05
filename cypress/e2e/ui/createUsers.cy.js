import { PageManager as pm  } from "../../pages/PageManager"
import { commonData as data} from "../../support/commonData";


let productName;
let productPrice;
let productDescription;
let productQuantity;
let password;
let adminName;
let adminEmail;
let userName;
let userEmail;



describe('Tests related to User Register by Admin', () => {

    before(() => {

        userName = data.userName
        userEmail = data.userEmail

        adminName = `Admin${data.userName}` 
        adminEmail = `Admin${data.userEmail}`
        password = data.password        

        //product Data
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

    it('Create an User Admin and Create a user and a Product', () =>{
    
        pm.LoginPage.registerRedirect()
        pm.RegisterPage.markAsAdmin()
        pm.RegisterPage.registerUser(adminName, adminEmail, password)
        pm.RegisterPage.verifyCreationSuccess('Cadastro realizado com sucesso')
        pm.HomePage.verifyLoginAdmin(adminName)
        pm.HomePage.createUser()
        pm.CreateUserPage.createUser(userName, userEmail, password)
        cy.wait(5000) 
        pm.HomePage.returnToHome()
        pm.HomePage.createProduct()
        pm.ProductPage.createProduct(productName, productPrice, productDescription, productQuantity)
    
    })

    it('Log as User created by Admin and add item to cart', () =>{
    
        pm.LoginPage.login(userEmail, password)
        pm.HomePage.verifyLoginUser()
        pm.HomePage.addToCart(productName)
        pm.CartListPage.verifyCartLabel()
        pm.CartListPage.verifyItemLabelInCart(productName)

    })

})
