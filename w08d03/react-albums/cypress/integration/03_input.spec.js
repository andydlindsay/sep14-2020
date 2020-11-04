describe('Input tests', () => {

  beforeEach(() => {
    cy.visit('/');

    cy.get('.search__form')
      .find('input')
      .as('searchField');
  });

  it('can type in an input field', () => {
    const searchValue = 'Celine Dion';

    cy.get('@searchField')
      .type(searchValue, { delay: 100 })
      .should('have.value', searchValue);
  });

  it('can handle backspace', () => {
    cy.get('@searchField')
      .type('Beee{backspace}ge{backspace}{backspace} Gees', { delay: 150 })
      .should('have.value', 'Bee Gees');
  });

});
