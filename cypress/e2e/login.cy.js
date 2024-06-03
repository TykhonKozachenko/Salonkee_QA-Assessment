/// <reference types='cypress' />

import AuthPageObject from "../support/pages/auth.pageObject";
import HomePageObject from "../support/pages/home.pageObject";

const authPage = new AuthPageObject;
const homePage = new HomePageObject;

const { generateNewUserApi } = require('../support/fixtures/newUserViaAPI');
const userDataApi = generateNewUserApi();

describe('Login', () => {
  before(() => {
    cy.generateUser(userDataApi).as('userData');

    authPage.visit();
  })

  it('should allow to login with created credentials', () => {
    cy.get('@userData').then((userData) => {
      authPage.typeEmailOfExistingUser(userData.email);
      authPage.typePasswordOfExistingUser(userData.password);
      authPage.clickLoginBtn();

      homePage.assertLoggedInUser(userData.name);
    });
  });
});
