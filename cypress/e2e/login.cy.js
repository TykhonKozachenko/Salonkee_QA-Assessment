/// <reference types='cypress' />

const { generateNewUserApi } = require('../support/fixtures/newUserViaAPI');
const userDataApi = generateNewUserApi();

import HomePageObject from "../support/pages/home.pageObject";
import AuthPageObject from "../support/pages/auth.pageObject";

const homePage = new HomePageObject;
const authPage = new AuthPageObject;

describe('Login', () => {
  before(() => {
    authPage.visit();
    
    cy.generateUser(userDataApi).as('userData');
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
