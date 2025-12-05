import { PageManager as pm  } from "../../pages/PageManager"
import { commonData as data} from "../../support/commonData";


let userName;
let userEmail;
let password;
let adminName;
let adminEmail;

describe('Tests related to User Register', () => {


    before(() => {

        userName = data.userName
        userEmail = data.userEmail
        adminName = `Admin${data.userName}` 
        adminEmail = `Admin${data.userEmail}`
        password = data.password

    })

    beforeEach(() => {

        
        cy.visit(Cypress.env('UI_URL'));
        
    })
    afterEach(() => {

        cy.clearCookies()
    })
    
    
    it('User creation', () =>{

        pm.LoginPage.registerRedirect()
        pm.RegisterPage.registerUser(userName, userEmail, password)
        pm.RegisterPage.verifyCreationSuccess('Cadastro realizado com sucesso')
    })

    it('User creation error validation', () =>{


        pm.LoginPage.registerRedirect()
        pm.RegisterPage.registerUser(userName, userEmail, password)
        pm.RegisterPage.verifyCreationFail('Este email já está sendo usado')
       
    })

    it('User creation Admin', () =>{

        pm.LoginPage.registerRedirect()
        pm.RegisterPage.markAsAdmin()
        pm.RegisterPage.registerUser(adminName, adminEmail, password)
        pm.RegisterPage.verifyCreationSuccess('Cadastro realizado com sucesso')
        pm.HomePage.verifyLoginAdmin(adminName)

    })

})