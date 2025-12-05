// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('loginAPI', (email, password) => {
    return cy.request({
        method: 'POST',
        url: `${Cypress.env('API_URL')}/login`,
        body: {

            email: email,
            password: password
        },
        failOnStatusCode: false
    });
});


Cypress.Commands.add('registerUserAPI', (name, email, password, isAdmin) => {
    return cy.request({
        method: 'POST',
        url: `${Cypress.env('API_URL')}/usuarios`,
        body: {
            nome: name,
            email: email,
            password: password,
            administrador: isAdmin ? 'true' : 'false'
        },
        failOnStatusCode: false
    });
});

Cypress.Commands.add('updateUserAPI', (userId, name, email, password, isAdmin) => {
    return cy.request({
        method: 'POST',
        url: `${Cypress.env('API_URL')}/usuarios/${userId}`,
        body: {
            nome: name,
            email: email,
            password: password,
            administrador: isAdmin ? 'true' : 'false'
        },
        failOnStatusCode: false
    });
});

Cypress.Commands.add('getUserIdAPI', (userId) => {
    return cy.request({
        method: 'GET',
        url: `${Cypress.env('API_URL')}/usuarios/${userId}`,
        headers: {
            accept: 'application/json'
        },
        failOnStatusCode: false
    });
});

Cypress.Commands.add('getUserAllAPI', () => {
    return cy.request({
        method: 'GET',
        url: `${Cypress.env('API_URL')}/usuarios`,
        headers: {
            accept: 'application/json'
        },
        failOnStatusCode: false
    });
});


Cypress.Commands.add('deleteUserAPI', (userId) => {
    return cy.request({
        method: 'DELETE',
        url: `${Cypress.env('API_URL')}/usuarios/${userId}`,
        headers: {
            accept: 'application/json'
        },
        failOnStatusCode: false
    });
});


Cypress.Commands.add('registerProductAPI', (token, name, preco, descricao, quantidade) => {
    return cy.request({
        method: 'POST',
        url: `${Cypress.env('API_URL')}/produtos`,
        headers:{
            Authorization: token
        },
        body: {
            nome: name,
            preco: preco,
            descricao: descricao,
            quantidade: quantidade
        },
        failOnStatusCode: false
    });
});

Cypress.Commands.add('updateProductAPI', (token, productId, name, preco, descricao, quantidade) => {
    return cy.request({
        method: 'PUT',
        url: `${Cypress.env('API_URL')}/produtos/${productId}`,
                headers:{
            Authorization: token
        },
        body: {
            nome: name,
            preco: preco,
            descricao: descricao,
            quantidade: quantidade
        },
        failOnStatusCode: false
    });
});

Cypress.Commands.add('getProductIdAPI', (token, productId) => {
    return cy.request({
        method: 'GET',
        url: `${Cypress.env('API_URL')}/produtos/${productId}`,
                headers:{
            Authorization: token
        },
        headers: {
            accept: 'application/json'
        },
        failOnStatusCode: false
    });
});

Cypress.Commands.add('getProductAllAPI', (token) => {
    return cy.request({
        method: 'GET',
        url: `${Cypress.env('API_URL')}/produtos`,
        headers: {
            Authorization: token,
            accept: 'application/json'
        },
        failOnStatusCode: false
    });
});


Cypress.Commands.add('deleteProductAPI', (token, productId) => {
    return cy.request({
        method: 'DELETE',
        url: `${Cypress.env('API_URL')}/produtos/${productId}`,
        headers: {
            accept: 'application/json',
            Authorization: token
        },
        failOnStatusCode: false
    });
});

Cypress.Commands.add('registerCartAPI', (token, cartPayload) => {
    return cy.request({
        method: 'POST',
        url: `${Cypress.env('API_URL')}/carrinhos`,
        headers:{
            Authorization: token
        },
        body: cartPayload,
        failOnStatusCode: false
    });
});

Cypress.Commands.add('getCartIdAPI', (token, cartId) => {
    return cy.request({
        method: 'GET',
        url: `${Cypress.env('API_URL')}/carrinhos/${cartId}`,
                headers:{
            Authorization: token
        },
        headers: {
            accept: 'application/json'
        },
        failOnStatusCode: false
    });
});

Cypress.Commands.add('finishCartIdAPI', (token) => {
    return cy.request({
        method: 'DELETE',
        url: `${Cypress.env('API_URL')}/carrinhos/cancelar-compra`,
                headers:{
            Authorization: token
        },
        headers: {
            accept: 'application/json'
        },
        failOnStatusCode: false
    });
});