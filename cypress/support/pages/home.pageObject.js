import PageObject from "./PageObject";

class HomePageObject extends PageObject {
  url = '/';

  assertLoggedInUser(firstName) {
    cy.assertLoggedInUser(firstName);
  }

  clickDeleteBtn() {
    cy.contains('Delete Account').click();
  }
}

export default HomePageObject;