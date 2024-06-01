/// <reference types='cypress' />

const { existingUserData } = require('../support/fixtures/existingUser');
const { productsData } = require('../support/fixtures/productsData');

const userData = existingUserData();
const product = productsData();

import HomePageObject from "../support/pages/home.pageObject";
import AuthPageObject from "../support/pages/auth.pageObject";
import ProductsPageObject from "../support/pages/products.pageObject";
import CartPageObject from "../support/pages/cart.pageObject";

const homePage = new HomePageObject();
const authPage = new AuthPageObject();
const productsPage = new ProductsPageObject();
const cartPage = new CartPageObject();

describe('Adding products to the cart', () => {
  before(() => {
    authPage.visit();

    authPage.typeEmailOfExistingUser(userData.email);
    authPage.typePasswordOfExistingUser(userData.password);
    authPage.clickLoginBtn();

    homePage.assertLoggedInUser(userData.firstName);
  });

  it('should allow to place products into cart', () => {
    const { product_1, product_2, product_3 } = product;

    productsPage.visit();

    productsPage.addProductToCart(product_1.id);
    productsPage.clickContinueShoppingBtn();

    productsPage.addProductToCart(product_2.id);
    productsPage.clickContinueShoppingBtn();

    productsPage.addProductToCart(product_3.id);
    productsPage.clickContinueShoppingBtn();

    cartPage.visit();

    cy.assertProductAdded(product_1.element);
    cy.assertProductAdded(product_2.element);
    cy.assertProductAdded(product_3.element);
  });
});
