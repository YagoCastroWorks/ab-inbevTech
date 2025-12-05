import { commonData as data} from "../../support/commonData";

let product;
let adminUser;
let cartData
let cartId;


describe('Tests related to Cart Register', () => {

    before(function() {
        adminUser = {
                    name: `Admin${data.userName}`, 
                    email: `admin${data.userEmail}`,
                    password: 'senha123'
                };
        product = {
                    productName: `Cart-Test${data.productName}`,
                    productPrice: 10,
                    productDescription: data.productDescription,
                    productQuantity: 2
        }

        cy.registerUserAPI(adminUser.name, adminUser.email, adminUser.password, true)
            .then((response) => {
                expect(response.status).to.eq(201);
            });
        cy.loginAPI(adminUser.email, adminUser.password).then((response) => {     
            cy.wrap(response.body.authorization).as('adminToken');
             });
        cy.get('@adminToken').then(adminToken => {
            cy.registerProductAPI(adminToken, product.productName, product.productPrice, product.productDescription, product.productQuantity)
                .then((response) => {       
                cy.wrap(response.body._id).as('productId');
            });
        });    
    });

    it('1. POST /carrinho - Should successfully create a new cart', function() {
        cartData = {
                "produtos": [
                    {
                    "idProduto": this.productId,
                    "quantidade": 1
                    }
                ]
            };
        cy.registerCartAPI(this.adminToken, cartData)
            .then((response) => {
                console.log(response)
                expect(response.status).to.eq(201);
                expect(response.body).to.have.property('message', 'Cadastro realizado com sucesso');
                expect(response.body).to.have.property('_id');
                cartId = response.body._id;
            });
    })
   it('2. GET /carrinhos/{_id} - Should find the newly created product by ID', function() {
        cy.getCartIdAPI(this.adminToken, cartId)
            .then((response) => {
                expect(response.status).to.eq(200);
                
            });
        cy.getProductIdAPI(this.adminToken, this.productId)
            .then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body.quantidade).to.eq(1)
            });
    });

})