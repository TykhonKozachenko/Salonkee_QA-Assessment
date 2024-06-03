/// <reference types='cypress' />

import HomePageObject from "../support/pages/home.pageObject";
import AuthPageObject from "../support/pages/auth.pageObject";
import AccountDeletedPageObject from "../support/pages/accountDeleted.pageObject";

const homePage = new HomePageObject;
const authPage = new AuthPageObject;
const accountDeletedPage = new AccountDeletedPageObject;

const { generateNewUserApi } = require('../support/fixtures/newUserViaAPI');
const userDataApi = generateNewUserApi();

describe('Account deletion', () => {
  beforeEach(() => {
    cy.generateUser(userDataApi).as('userData');

    authPage.visit();
  })

  it('should allow to delete account via UI', () => {
    cy.get('@userData').then((userData) => {
      authPage.typeEmailOfExistingUser(userData.email);
      authPage.typePasswordOfExistingUser(userData.password);
      authPage.clickLoginBtn();

      homePage.visit();
      homePage.clickDeleteAccountBtn();

      accountDeletedPage.assertAccountDeleted();
      accountDeletedPage.clickContinueBtn();
    })
  });

  it('should allow to delete account via API', () => {
    cy.get('@userData').then((userData) => {
      cy.deleteUserAccount(userData).then(() => {
        cy.verifyLogin(userData);
      });
    });
  });
});
