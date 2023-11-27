// cypress/support/step_definitions/signin_steps.js

const { Given, When, Then, And } = require('cypress-cucumber-preprocessor/steps');

Given('I visit the sign-in page', () => {
  cy.visit('http://localhost:3000'); // Replace with your actual URL
});

When('I enter valid credentials', () => {
  cy.get('#username').type('your_username');
  cy.get('#password').type('your_password');
});

When('I enter invalid credentials', () => {
  cy.get('#username').type('invalid_username');
  cy.get('#password').type('invalid_password');
});

And('I click the sign-in button', () => {
  cy.get('#signinButton').click();
});

Then('I should be redirected to the dashboard', () => {
  cy.url().should('include', '/dashboard');
});

Then('I should see an error message', () => {
  cy.get('.error-message').should('be.visible'); // Adjust selector based on your application
});
