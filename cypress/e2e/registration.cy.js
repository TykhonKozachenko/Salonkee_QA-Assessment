/// <reference types='cypress' />

const { generateNewUserUi } = require('../support/fixtures/newUserViaUI');
const { generateNewUserApi } = require('../support/fixtures/newUserViaAPI');

const userDataUi = generateNewUserUi();
const userDataApi = generateNewUserApi();

import PageObject from "../support/pages/PageObject";
import AuthPageObject from "../support/pages/auth.pageObject";
import RegistrationPageObject from "../support/pages/registration.pageObject";
import AccountCreatedPageObject from "../support/pages/accountCreated.pageObject";
import AccountDeletedPageObject from "../support/pages/accountDeleted.pageObject";

const mainPage = new PageObject;
const authPage = new AuthPageObject;
const registrationPage = new RegistrationPageObject;
const accountCreatedPage = new AccountCreatedPageObject;
const accountDeletedPage = new AccountDeletedPageObject;

describe('Account registration and verification', () => {
  beforeEach(() => {
    authPage.visit();
  });

  it('should allow to register a new user', () => {
    authPage.typeNameOfNewUser(userDataUi.firstName);
    authPage.typeEmailOfNewUser(userDataUi.email);
    authPage.clickSignUpBtn();

    registrationPage.assertSignUpPage();

    registrationPage.selectGender(userDataUi.randomGender);
    registrationPage.typePassword(userDataUi.password);
    registrationPage.selectBirthDay(userDataUi.randomBirthDay);
    registrationPage.selectBirthMonth(userDataUi.randomBirthMonth);
    registrationPage.selectBirthYear(userDataUi.randomBirthYear);
    registrationPage.checkNewsletterBox();

    registrationPage.typeFirstName(userDataUi.firstName);
    registrationPage.typeLastName(userDataUi.lastName);
    registrationPage.enterAddress(userDataUi.randomAddress);
    registrationPage.selectCountry(userDataUi.randomCountry);
    registrationPage.enterState(userDataUi.randomState);
    registrationPage.enterCity(userDataUi.randomCity);
    registrationPage.enterZipCode(userDataUi.randomZipCode);
    registrationPage.enterMobileNumber(userDataUi.randomMobileNumber);
    registrationPage.clickCreateAccountBtn();

    accountCreatedPage.assertAccountCreated();

    accountCreatedPage.clickContinueBtn();

    mainPage.assertLoggedInUser(userDataUi.firstName);
  });

  it('should allow to login with created credentials', () => {
    cy.generateUser(userDataApi).then(() => {
      cy.get('@userData').then((userData) => {
        authPage.typeEmailOfExistingUser(userData.email);
        authPage.typePasswordOfExistingUser(userData.password);
        authPage.clickLoginBtn();
  
        mainPage.assertLoggedInUser(userData.name);
      });
    });
  });

  it('should allow to delete account / UI', () => {
    cy.generateUser(userDataApi).then(() => {
      cy.get('@userData').then((userData) => {
        authPage.typeEmailOfExistingUser(userData.email);
        authPage.typePasswordOfExistingUser(userData.password);
        authPage.clickLoginBtn();
        cy.visit('/');
  
        mainPage.clickDeleteBtn();
  
        accountDeletedPage.assertAccountDeleted();
        accountDeletedPage.clickContinueBtn();

        cy.verifyLogin(userData);
      })
    })
  });

  it('should allow to delete account / API', () => {
    cy.generateUser(userDataApi).then(() => {
      cy.get('@userData').then((userData) => {
        cy.deleteUserAccount(userData).then(() => {
          cy.verifyLogin(userData);
        });
      });
    });
  });
});
