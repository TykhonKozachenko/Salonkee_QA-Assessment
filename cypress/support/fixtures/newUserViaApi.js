const { faker } = require('@faker-js/faker');

function generateNewUserApi() {
  return {
    title: 'Mr',
    name: faker.person.firstName(),
    firstname: faker.person.firstName(),
    lastname: faker.person.lastName(),
    email: faker.internet.email(),
    password: 'Pass123!',
    birth_date: 10,
    birth_month: 'August',
    birth_year: 1980,
    address1: faker.location.streetAddress(),
    country: 'Canada',
    state: faker.location.state(),
    city: faker.location.city(),
    zipcode: faker.location.zipCode(),
    mobile_number: faker.phone.number('### ### ####')
  }
}

module.exports = { generateNewUserApi };
