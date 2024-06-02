/// <reference types='cypress' />

import HomePageObject from "../support/pages/home.pageObject";
import AuthPageObject from "../support/pages/auth.pageObject";
import RegistrationPageObject from "../support/pages/registration.pageObject";
import AccountCreatedPageObject from "../support/pages/accountCreated.pageObject";

const homePage = new HomePageObject;
const authPage = new AuthPageObject;
const registrationPage = new RegistrationPageObject;
const accountCreatedPage = new AccountCreatedPageObject;

const { generateNewUserUi } = require('../support/fixtures/newUserViaUI');
const userDataUi = generateNewUserUi();

describe('Account registration', () => {
  before(() => {
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

    homePage.assertLoggedInUser(userDataUi.firstName);
  });
});
