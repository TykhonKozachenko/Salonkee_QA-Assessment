import PageObject from "./PageObject";

class CheckoutPageObject extends PageObject {
  url = '/checkout';

  clickPlaceOrderBtn() {
    cy.contains('.btn', 'Place Order').click();
  }
}

export default CheckoutPageObject;
