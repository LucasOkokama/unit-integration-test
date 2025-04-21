/// <reference types="cypress" />

describe('Make several tests no Google with different features of cypress', () => {

  it("Visit google homepage", () => {
    cy.visit("https://google.com")
  })

  it("Check if input is visible, empty and has a maxlength of 2048", () => {
    cy.get('[name="q"]')
      .should('be.visible')
      .and('have.class', 'gLFyf')
      .and('have.value', '')
      .and('have.attr', 'maxlength', 2048)
  })

  it("Check if dropdown box appear or disappear when click/unclick", () => {
    cy.get('[name="q"]').click()
    cy.get('.erkvQe > .OBMEnb').as("searchDropdown")
    cy.get('@searchDropdown').should('be.visible')
    cy.get('#gb').click()
    cy.get('@searchDropdown').should('not.be.visible')
  })

  it("Type 'Neymar' on the input field, assert suggestion, click in one of the suggestions and check if wikipedia page exists", () => {
    cy.get('[name="q"]').type("Neymar")
    const searchDropdownList = ".erkvQe > .OBMEnb > ul"
    cy.get(searchDropdownList).contains("neymar idade").click()
    cy.contains("https://pt.wikipedia.org › wiki › Neymar")
  })

  it("Type 'Neymar' on the input field, make search pressing enter and check if wikipedia page exists", () => {
    cy.visit("https://google.com")
    cy.get('#APjFqb').type("Neymar{enter}")
    cy.contains("https://pt.wikipedia.org › wiki › Neymar")
  })
})