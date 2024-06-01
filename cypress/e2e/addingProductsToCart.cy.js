/// <reference types='cypress' />

const { existingUserData } = require('../support/fixtures/existingUser');
const userData = existingUserData();

import PageObject from "../support/pages/PageObject";
import AuthPageObject from "../support/pages/auth.pageObject";
import ProductsPageObject from "../support/pages/products.pageObject";
import CartPageObject from "../support/pages/cart.pageObject";

const mainPage = new PageObject();
const authPage = new AuthPageObject();
const productsPage = new ProductsPageObject();
const cartPage = new CartPageObject();

describe('Adding products to the cart', () => {
  before(() => {
    authPage.visit();

    authPage.typeEmailOfExistingUser(userData.email);
    authPage.typePasswordOfExistingUser(userData.password);
    authPage.clickLoginBtn();

    mainPage.assertLoggedInUser(userData.firstName);
  });

  it('should allow to place products into cart', () => {
    productsPage.visit();

    productsPage.addProductToCart('1');
    productsPage.clickContinueShoppingBtn();

    productsPage.addProductToCart('2');
    productsPage.clickContinueShoppingBtn();

    productsPage.addProductToCart('3');
    productsPage.clickContinueShoppingBtn();

    cartPage.visit();

    cy.assertProductAdded('product-1');
    cy.assertProductAdded('product-2');
    cy.assertProductAdded('product-3');
  });
});
