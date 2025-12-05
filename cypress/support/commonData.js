import { faker } from '@faker-js/faker';

export const commonData = {

    userName: faker.internet.username(),
    userEmail: faker.internet.email(),
    password: faker.person.firstName(),
    productName: faker.commerce.product(),
    productPrice: faker.commerce.price(),
    productDescription: faker.commerce.productDescription()



}