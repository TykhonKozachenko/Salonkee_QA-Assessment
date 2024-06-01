import PageObject from "./PageObject";

class CartPageObject extends PageObject {
  url = '/view_cart';

  clickProceedToCheckoutBtn() {
    cy.contains('.btn', 'Proceed To Checkout').click();
  }

  assertCartIsEmpty() {
    cy.get('#empty_cart')
      .should('be.visible')
      .should('contain.text', 'Cart is empty!');
  }
}

export default CartPageObject;
