/// <reference types='cypress' />

import AuthPageObject from "../support/pages/auth.pageObject";
import HomePageObject from "../support/pages/home.pageObject";
import ProductsPageObject from "../support/pages/products.pageObject";
import CartPageObject from "../support/pages/cart.pageObject";

const authPage = new AuthPageObject();
const homePage = new HomePageObject();
const productsPage = new ProductsPageObject();
const cartPage = new CartPageObject();

const { existingUserData } = require('../support/fixtures/existingUserData');
const userData = existingUserData();

const { productsData } = require('../support/fixtures/productsData');
const { firstProduct, secondProduct, thirdProduct } = productsData();

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
