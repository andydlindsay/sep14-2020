describe('Filter tests', () => {

  beforeEach(() => {
    cy.visit('/');
  });

  it('can toggle the explicit checkbox', () => {
    // cy.visit('http://localhost:8765');

    cy.get('.filters__form-group')
      .first()
      .find('input')
      .uncheck()
      .should('not.be.checked');
  });

  it('can toggle a checkbox by clicking on the label', () => {
    // cy.visit('http://localhost:8765');

    cy.contains('EP')
      .click();

    cy.get('#EP')
      .should('be.checked');
  });

});
