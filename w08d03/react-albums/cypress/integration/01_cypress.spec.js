describe('Initial Cypress Tests', () => {

  it('is working', () => {
    expect(true).to.equal(true);
  });

  it('can visit the home page', () => {
    cy.visit('http://localhost:8765');
  });

});
