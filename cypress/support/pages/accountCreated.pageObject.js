import PageObject from "./PageObject";

class AccountCreatedPageObject extends PageObject {
  url = '/account_created';

  assertAccountCreated() {
    cy.url().should('include', this.url);
    
    cy.getByDataQa('account-created')
      .should('contain.text', 'Account Created!');
  }

  clickContinueBtn() {
    cy.getByDataQa('continue-button').click();
  }
}

export default AccountCreatedPageObject;
