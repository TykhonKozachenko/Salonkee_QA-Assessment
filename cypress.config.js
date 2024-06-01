const { defineConfig } = require("cypress");
const { faker } = require('@faker-js/faker');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://automationexercise.com',

    setupNodeEvents(on, config) {
    },
  },
});
