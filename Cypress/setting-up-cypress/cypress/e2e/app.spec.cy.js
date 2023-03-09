/// <reference types="cypress" />

context('App', () => {
  beforeEach(() => {
    cy.visit('/');
  })

  it("should have the title 'setting-up-cypress'", () => {
    // https://on.cypress.io/title
    cy.title().should('eq', 'setting-up-cypress');
  })
});



