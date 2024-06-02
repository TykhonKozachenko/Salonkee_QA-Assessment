import PageObject from "./PageObject";

class PaymentDonePageObject extends PageObject {
  assertOrderPlaced() {
    cy.getByDataQa('order-placed')
      .should('contain.text', 'Order Placed!');
  }

  clickContinueBtn() {
    cy.getByDataQa('continue-button').click();
  }
}

export default PaymentDonePageObject;
