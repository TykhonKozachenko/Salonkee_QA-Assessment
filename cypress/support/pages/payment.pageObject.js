import PageObject from "./PageObject";

class PaymentPageObject extends PageObject {
  url = '/payment';

  typeNameOnCard(name) {
    cy.getByDataQa('name-on-card').type(name);
  }

  typeCardNumber(number) {
    cy.getByDataQa('card-number').type(number);
  }

  typeCardCVC(cvc) {
    cy.getByDataQa('cvc').type(cvc);
  }

  typeCardExpiryMonth(month) {
    cy.getByDataQa('expiry-month').type(month);
  }

  typeCardExpiryYear(year) {
    cy.getByDataQa('expiry-year').type(year);
  }

  clickPayBtn() {
    cy.getByDataQa('pay-button').click();
  }
}

export default PaymentPageObject;
