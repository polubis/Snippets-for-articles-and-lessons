// cypress/integration/signin_spec.js

describe('Sign In', () => {
  it('should successfully sign in with valid credentials', () => {
    // Assuming your application is running on http://localhost:3000
    cy.visit('http://localhost:3000');

    // Assuming your sign-in form has input fields with IDs "username" and "password"
    cy.get('#username').type('your_username');
    cy.get('#password').type('your_password');

    // Assuming your sign-in form has a button with ID "signinButton"
    cy.get('#signinButton').click();

    // Assuming successful sign-in redirects to a page with the URL containing "/dashboard"
    cy.url().should('include', '/dashboard');

    // Additional assertions can be added based on your application's behavior
  });

  it('should display an error message with invalid credentials', () => {
    cy.visit('http://localhost:3000');

    cy.get('#username').type('invalid_username');
    cy.get('#password').type('invalid_password');

    cy.get('#signinButton').click();

    // Assuming your application displays an error message with the class "error-message"
    cy.get('.error-message').should('be.visible');

    // Additional assertions can be added based on your application's behavior
  });
});
