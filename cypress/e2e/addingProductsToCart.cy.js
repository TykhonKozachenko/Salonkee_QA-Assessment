/// <reference types='cypress' />

const { existingUserData } = require('../support/fixtures/existingUser');
const { productsData } = require('../support/fixtures/productsData');

const userData = existingUserData();
const { firstProduct, secondProduct, thirdProduct } = productsData();

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
    productsPage.visit();

    productsPage.addProductToCart(firstProduct.id);
    productsPage.clickContinueShoppingBtn();

    productsPage.addProductToCart(secondProduct.id);
    productsPage.clickContinueShoppingBtn();

    productsPage.addProductToCart(thirdProduct.id);
    productsPage.clickContinueShoppingBtn();

    cartPage.visit();

    cartPage.assertProductAdded(firstProduct.element);
    cartPage.assertProductAdded(secondProduct.element);
    cartPage.assertProductAdded(thirdProduct.element);
  });
});
