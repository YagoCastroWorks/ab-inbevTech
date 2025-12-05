import { commonData as data} from "../../support/commonData";

let adminUser;
let nonAdminUser;

describe('Tests related to User Register', () => {

    before(() => {
        adminUser = {
            name: `Admin${data.userName}`, 
            email: `admin${data.userEmail}`,
            password: 'senha123'
        };
        nonAdminUser = {
            name: `Comum${data.userName}`,
            email: `comum${data.userEmail}`,
            password: 'senha123'
        };
    });

    it('1. POST /usuarios - Should successfully create a new administrator user', () => {
        cy.registerUserAPI(adminUser.name, adminUser.email, adminUser.password, true)
            .then((response) => {
                expect(response.status).to.eq(201);
                expect(response.body).to.have.property('message', 'Cadastro realizado com sucesso');
                expect(response.body).to.have.property('_id');
                adminUser._id = response.body._id;
            });
    })
    
    it('2. GET /usuarios/{_id} - Should find the newly created user by ID', () => {
        cy.getUserIdAPI(adminUser._id)
            .then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body.nome).to.eq(adminUser.name);
                expect(response.body.administrador).to.eq('true');
            });
    });

    it('3. POST /usuarios - Should fail when trying to create a user with an existing email', () => {

        cy.registerUserAPI(adminUser.name, adminUser.email, adminUser.password, false)
            .then((response) => {
                expect(response.status).to.eq(400); 
                expect(response.body.message).to.include('Este email já está sendo usado'); 
            });
    });

    it('4. DELETE /usuarios/{_id} - Should delete the created administrator user', () => {
        cy.deleteUserAPI(adminUser._id).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('message', 'Registro excluído com sucesso');
        });
    });

})