const { faker } = require('@faker-js/faker');

Cypress.Commands.add('getByDataQa', (selector) => {
  return cy.get(`[data-qa='${selector}']`);
});

Cypress.Commands.add('getById', (value) => {
  return cy.get(`[id='${value}']`);
});

Cypress.Commands.add('getByProductId', (productId) => {
  return cy.get(`[data-product-id='${productId}']`).first();
});

Cypress.Commands.add('assertLoggedInUser', (firstName) => {
  return cy.get('li > a > b').should('contain', firstName);
});

Cypress.Commands.add('assertProductAdded', (productId) => {
  return cy.get(`#${productId}`).should('exist');
});

Cypress.Commands.add('addToCart', (productId) => {
  return cy.request({
    method: 'GET',
    url: `/add_to_cart/${productId}`,
  });
});

Cypress.Commands.add('generateUser', userDataAPI => {
  const uniqueEmail = faker.internet.email();
  const uniqueUser = {
    ...userDataAPI,
    email: uniqueEmail,
  };

  return cy.request({
    method: 'POST',
    url: '/api/createAccount',
    form: true,
    body: uniqueUser
  }).then((response) => {
    cy.log(`Response body: ${JSON.stringify(response.body)}`);
    return cy.wrap(uniqueUser).as('userData');
  });
});

Cypress.Commands.add('deleteUserAccount', userDataAPI => {
  return cy.request({
    method: 'DELETE',
    url: '/api/deleteAccount',
    form: true,
    body: {
      email: userDataAPI.email,
      password: userDataAPI.password
    }
  }).then((response) => {
    cy.log(`Response body: ${JSON.stringify(response.body)}`);
  });
});

Cypress.Commands.add('verifyLogin', userDataAPI => {
  return cy.request({
    method: 'POST',
    url: '/api/verifyLogin',
    form: true,
    body: {
      email: userDataAPI.email,
      password: userDataAPI.password
    },
  }).then((response) => {
    cy.log(`Response body: ${JSON.stringify(response.body)}`);
  });
});
