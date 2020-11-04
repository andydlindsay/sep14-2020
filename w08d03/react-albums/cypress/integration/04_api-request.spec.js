describe('Display results from an API request', () => {

  it('displays results', () => {
    cy.visit('/');

    // load in hardcoded data
    cy.fixture('itunes.json')
      .as('itunesData');

    // create a fake server
    cy.server();

    // route all requests to our fake data
    cy.route({
      method: 'GET',
      url: 'search*',
      delay: 500,
      response: '@itunesData'
    }).as('getSearch');

    // type in the input field
    cy.get('.search__form')
      .find('input')
      .type('Daft Punk')
      .should('have.value', 'Daft Punk');

    // check for spinner
    cy.get('.spinner')
      .should('be.visible');

    // is a particular album in the DOM
    cy.wait('@getSearch')
      .get('main')
      .contains('Homework')
      .should('be.visible');

    // check for no spinner
    cy.get('.spinner')
      .should('not.be.visible');

    // uncheck the explicit checkbox
    cy.contains('Explicit')
      .click();

    // check that the explicit album has been removed
    cy.get('article.album')
      .should('not.contain', 'Daft Club');
  });

});
