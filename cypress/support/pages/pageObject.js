class PageObject {
  visit(url) {
    cy.visit(url || this.url);
  }
  
  assertLoggedInUser(firstName) {
    cy.assertLoggedInUser(firstName);
  }

  clickDeleteBtn() {
    cy.contains('Delete Account').click();
  }
}

export default PageObject;
