import Page from "./page.js"

class CartPage extends Page {

    get checkoutButton() {
        return $('#checkout')
    }
    get continueShoppingButton() {
        return $('#continue-shopping')
    }

    open() {
        return super.open('cart.html')
    }
}

export default new CartPage();