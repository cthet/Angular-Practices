/// <reference types="cypress" />

context('App', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should get the users list from the server and display', () => {
    cy.get('app-user-card').should((domList) => {
      expect(domList.length).equal(10);
    });
  });

  it('should get the users list on searching', () => {
    cy.intercept('https://api.randomuser.me/*').as('searchUsers');
    cy.get('#searchInput').type('Apo');
    cy.wait('@searchUsers');
    cy.get('app-user-card').should((domList) => {
      expect(domList.length).equal(1);
    });
  });

});
