const { faker } = require('@faker-js/faker');

function generateBankCardData() {
  const currentYear = new Date().getFullYear();
  return {
    name: faker.person.fullName(),
    number: faker.finance.accountNumber(16),
    cvc: faker.finance.creditCardCVV(),
    expMonth: (Math.floor(Math.random() * 12) + 1).toString().padStart(2, '0'),
    expYear: (Math.floor(Math.random() * 5) + currentYear).toString(),
  };
}

module.exports = { generateBankCardData };
