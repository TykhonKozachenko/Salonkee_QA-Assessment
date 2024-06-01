const { faker } = require('@faker-js/faker');

function selectRandomGender() {
  const genderOptions = ['#id_gender1', '#id_gender2'];
  const randomIndex = Math.floor(Math.random() * genderOptions.length);
  return genderOptions[randomIndex];
}

function selectRandomMonth() {
  const monthOptions = [
    'January', 'February', 'March', 'April', 'May', 'June', 
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const randomIndex = Math.floor(Math.random() * monthOptions.length);
  return monthOptions[randomIndex];
}

function selectRandomYear() {
  const randomYear = Math.floor(Math.random() * (2021 - 1900 + 1)) + 1900;
  return randomYear.toString();
}

function selectRandomCountry() {
  const countryOptions = [
    'India', 'United States', 'Canada', 'Australia', 
    'Israel', 'New Zealand', 'Singapore'
  ];
  const randomIndex = Math.floor(Math.random() * countryOptions.length);
  return countryOptions[randomIndex];
}

function generateNewUserUi() {
  const randomGender = selectRandomGender();
  const randomBirthDay = Math.floor(Math.random() * 31) + 1;
  const randomBirthMonth = selectRandomMonth();
  const randomBirthYear = selectRandomYear();
  const randomCountry = selectRandomCountry();

  return {
    randomGender,
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    password: 'Pass123!',
    randomBirthDay,
    randomBirthMonth,
    randomBirthYear,
    randomAddress: faker.location.streetAddress(),
    randomCountry,
    randomState: faker.location.state(),
    randomCity: faker.location.city(),
    randomZipCode: faker.location.zipCode(),
    randomMobileNumber: faker.phone.number('### ### ####')
  }
}

module.exports = { generateNewUserUi };
