import { commonData as data} from "../../support/commonData";

let product;
let adminUser;

describe('Tests related to Product Register', () => {

    before(() => {
        adminUser = {
                    name: `Admin${data.userName}`, 
                    email: `admin${data.userEmail}`,
                    password: 'senha123'
                };
        product = {
                    productName: `Api-Test${data.userName}`,
                    productPrice: 10,
                    productDescription: data.productDescription,
                    productQuantity: 1
        }

        cy.registerUserAPI(adminUser.name, adminUser.email, adminUser.password, true)
            .then((response) => {
                expect(response.status).to.eq(201);
            });
        cy.loginAPI(adminUser.email, adminUser.password).then((response) => {       
            cy.wrap(response.body.authorization).as('adminToken');
             });
        
    });

    it('1. POST /produtos - Should successfully create a new product', function() {
        cy.registerProductAPI(this.adminToken, product.productName, product.productPrice, product.productDescription, product.productQuantity)
            .then((response) => {
                console.log(response)
                expect(response.status).to.eq(201);
                expect(response.body).to.have.property('message', 'Cadastro realizado com sucesso');
                expect(response.body).to.have.property('_id');
                product._id = response.body._id;
            });
    })

    it('2. POST /produtos - Should fail to create a product with existant data', function() {
        cy.registerProductAPI(this.adminToken, product.productName, product.productPrice, product.productDescription, product.productQuantity)
            .then((response) => {
                expect(response.status).to.eq(400);
                expect(response.body).to.have.property('message', 'Já existe produto com esse nome');
            });
    })
    
    it('3. GET /produtos/{_id} - Should find the newly created product by ID', function() {
        cy.getProductIdAPI(this.adminToken, product._id)
            .then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body.nome).to.eq(product.productName);
            });
    });

      it('4. PUT /produtos{_id} - Should successfully update a product', function() {
        cy.updateProductAPI(this.adminToken, product._id, product.productName, product.productPrice, product.productDescription, product.productQuantity)
            .then((response) => {
                console.log(response)
                expect(response.status).to.eq(200);
                expect(response.body).to.have.property('message', 'Registro alterado com sucesso');
            });
    })

    it('5. DELETE /produtos/{_id} - Should delete the created product', function() {
        cy.deleteProductAPI(this.adminToken, product._id).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('message', 'Registro excluído com sucesso');
        });
    });

})