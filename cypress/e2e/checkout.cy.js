/// <reference types='cypress' />

import AuthPageObject from "../support/pages/auth.pageObject";
import HomePageObject from "../support/pages/home.pageObject";
import CartPageObject from "../support/pages/cart.pageObject";
import CheckoutPageObject from "../support/pages/checkout.pageObject";
import PaymentPageObject from "../support/pages/payment.pageObject";
import PaymentDonePageObject from "../support/pages/paymentDone.pageObject";

const authPage = new AuthPageObject;
const homePage = new HomePageObject;
const cartPage = new CartPageObject;
const checkoutPage = new CheckoutPageObject;
const paymentPage = new PaymentPageObject;
const paymentDonePage = new PaymentDonePageObject;

const { existingUserData } = require('../support/fixtures/existingUserData');
const userData = existingUserData();

const { productsData } = require('../support/fixtures/productsData');
const { firstProduct, secondProduct, thirdProduct } = productsData();

const { generateBankCardData } = require('../support/fixtures/bankCardData');
const cardData = generateBankCardData();

describe('Checkout process', () => {
  before(() => {
    authPage.visit();

    authPage.typeEmailOfExistingUser(userData.email);
    authPage.typePasswordOfExistingUser(userData.password);
    authPage.clickLoginBtn();

    homePage.assertLoggedInUser(userData.firstName);

    cy.addProductToCart(firstProduct.id);
    cy.addProductToCart(secondProduct.id);
    cy.addProductToCart(thirdProduct.id);
  });

  it('should allow to complete checkout', () => {
    cartPage.visit();
    cartPage.clickProceedToCheckoutBtn();

    checkoutPage.clickPlaceOrderBtn();

    paymentPage.typeNameOnCard(cardData.name);
    paymentPage.typeCardNumber(cardData.number);
    paymentPage.typeCardCVC(cardData.cvc);
    paymentPage.typeCardExpiryMonth(cardData.expMonth);
    paymentPage.typeCardExpiryYear(cardData.expYear);
    paymentPage.clickPayBtn();

    paymentDonePage.assertOrderPlaced();
    paymentDonePage.clickContinueBtn();

    cartPage.visit();
    cartPage.assertCartIsEmpty();
  });
});
