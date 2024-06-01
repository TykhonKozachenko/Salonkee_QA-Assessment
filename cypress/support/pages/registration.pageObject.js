import PageObject from "./PageObject";

class RegistrationPageObject extends PageObject {
  url = '/signup';

  assertSignUpPage() {
    cy.url().should('include', this.url);
  }

  selectGender(gender) {
    cy.get(gender).click();
  }

  typePassword(password) {
    cy.getByDataQa('password').type(password);
  }

  selectBirthDay(randomDay) {
    cy.getByDataQa('days')
      .select(randomDay)
      .type('{enter}');
  }

  selectBirthMonth(randomMonth) {
    cy.getByDataQa('months')
      .select(randomMonth)
      .type('{enter}');
  }

  selectBirthYear(randomYear) {
    cy.getByDataQa('years')
      .select(randomYear)
      .type('{enter}');
  }
  
  checkNewsletterBox() {
    cy.getById('newsletter').click();
  }
  
  typeFirstName(firstName) {
    cy.getByDataQa('first_name').type(firstName);
  }
  
  typeLastName(lastName) {
    cy.getByDataQa('last_name').type(lastName);
  }
  
  enterAddress(randomAddress) {
    cy.getByDataQa('address').type(randomAddress);
  }
  
  selectCountry(randomCountry) {
    cy.getByDataQa('country')
      .select(randomCountry)
      .type('{enter}');
  }

  enterState(randomState) {
    cy.getByDataQa('state').type(randomState);
  }

  enterCity(randomCity) {
    cy.getByDataQa('city').type(randomCity);
  }

  enterZipCode(randomZipCode) {
    cy.getByDataQa('zipcode').type(randomZipCode);
  }

  enterMobileNumber(randomMobileNumber) {
    cy.getByDataQa('mobile_number').type(randomMobileNumber);
  }

  clickCreateAccountBtn() {
    cy.getByDataQa('create-account').click();
  }
}

export default RegistrationPageObject;
