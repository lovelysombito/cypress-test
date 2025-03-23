describe('Automate Contact Form on flo.co.uk', () => {
  it('Fills the Contact Us form without submitting', () => {
    // Step 1: Visit the website
    cy.visit('https://flo.co.uk');

    // Step 2: Navigate to the Contacts page directly
    cy.visit('https://flo.co.uk/support/contact/');

    // Step 3: Fill in the Contact Us form
    cy.get('#input_1_1_3').type('John Doe'); 
    cy.get('#input_1_2').type('johndoe@example.com');
    cy.get('#input_1_11').type('1234567890');
    cy.get('#input_1_8').select('CASHFLO');

    cy.get('#input_1_5').type('Test Message'); 

    // Step 4: Do not submit the form, just fill in the details
    cy.log('Form filled successfully without submission');
  });
});

Cypress.on('uncaught:exception', (err, runnable) => {
  return false; // Prevent Cypress from failing the test due to errors on the website
});