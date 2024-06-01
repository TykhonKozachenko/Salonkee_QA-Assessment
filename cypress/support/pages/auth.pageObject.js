import PageObject from "./PageObject";

class AuthPageObject extends PageObject {
  url = '/login';

  typeNameOfNewUser(firstName) {
    cy.getByDataQa('signup-name').type(firstName);
  }

  typeEmailOfNewUser(email) {
    cy.getByDataQa('signup-email').type(email);
  }
  
  clickSignUpBtn() {
    cy.getByDataQa('signup-button').click();
  }
  
  typeEmailOfExistingUser(email) {
    cy.getByDataQa('login-email').type(email);
  }
  
  typePasswordOfExistingUser(password) {
    cy.getByDataQa('login-password').type(password);
  }

  clickLoginBtn() {
    cy.getByDataQa('login-button').click();
  }
}

export default AuthPageObject;
