import { HomePage } from "./HomePage";
import { LoginPage } from "./LoginPage"
import { RegisterPage } from "./RegisterPage"
import { ProductPage } from "./ProductPage"
import { CreateUserPage } from "./CreateUserPage"
import { CartListPage } from "./CartListPage"

export const PageManager = (function () {

    return {
        HomePage: new HomePage(),
        LoginPage: new LoginPage(),
        RegisterPage: new RegisterPage(), 
        ProductPage: new ProductPage(),
        CreateUserPage: new CreateUserPage(),
        CartListPage: new CartListPage()

    }
})()