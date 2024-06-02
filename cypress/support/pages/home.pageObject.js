import PageObject from "./PageObject";

class HomePageObject extends PageObject {
  url = '/';

  assertLoggedInUser(firstName) {
    cy.get('.nav.navbar-nav')
      .contains('li', 'Logged in as')
      .should('contain.text', firstName);
  }

  clickDeleteBtn() {
    cy.get('.nav.navbar-nav')
      .contains('li', 'Delete Account')
      .click();
  }
}

export default HomePageObject;
