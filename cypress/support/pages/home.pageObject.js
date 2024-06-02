import PageObject from "./PageObject";

class HomePageObject extends PageObject {
  url = '/';

  assertLoggedInUser(firstName) {
    cy.get('li > a > b').should('contain', firstName);
  }

  clickDeleteBtn() {
    cy.contains('Delete Account').click();
  }
}

export default HomePageObject;