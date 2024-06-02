import PageObject from "./PageObject";

class AccountDeletedPageObject extends PageObject {
  assertAccountDeleted() {
    cy.getByDataQa('account-deleted')
      .should('contain.text', 'Account Deleted!');
  }

  clickContinueBtn() {
    cy.getByDataQa('continue-button').click();
  }
}

export default AccountDeletedPageObject;
