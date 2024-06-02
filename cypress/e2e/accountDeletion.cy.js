/// <reference types='cypress' />

const { generateNewUserApi } = require('../support/fixtures/newUserViaAPI');
const userDataApi = generateNewUserApi();

import HomePageObject from "../support/pages/home.pageObject";
import AuthPageObject from "../support/pages/auth.pageObject";
import AccountDeletedPageObject from "../support/pages/accountDeleted.pageObject";

const homePage = new HomePageObject;
const authPage = new AuthPageObject;
const accountDeletedPage = new AccountDeletedPageObject;

describe('Account deletion', () => {
  beforeEach(() => {
    authPage.visit();
  })

  it('should allow to delete account via UI', () => {
    cy.generateUser(userDataApi).then(() => {
      cy.get('@userData').then((userData) => {
        authPage.typeEmailOfExistingUser(userData.email);
        authPage.typePasswordOfExistingUser(userData.password);
        authPage.clickLoginBtn();

        homePage.visit();
        homePage.clickDeleteBtn();
  
        accountDeletedPage.assertAccountDeleted();
        accountDeletedPage.clickContinueBtn();
      })
    })
  });

  it('should allow to delete account via API', () => {
    cy.generateUser(userDataApi).then(() => {
      cy.get('@userData').then((userData) => {
        cy.deleteUserAccount(userData).then(() => {
          cy.verifyLogin(userData);
        });
      });
    });
  });
});