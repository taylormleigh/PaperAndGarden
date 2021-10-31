import { describe } from "mocha"

describe('Home - layout load', () => {
  it('Checks that the main layout components have loaded', () => {
    cy.visit(Cypress.env("Index"))
    // Main Components load
    cy.get('#header').should('exist')
    cy.get('#navigation').should('exist')
    cy.get('.bodyDiv').should('exist')
    cy.get('#footer').should('exist')
  })
})

describe('Home - layout functions', () => {
  it('Checks that the main layout components function correctly', () => {
    // Main Components function correctly

  })
})

describe('Home - page load', () => {
  it('Checks that the page components have loaded', () => {
    // Page Components load
    cy.get('#homeLogo').should('exist')
    cy.get('#homeQuote').should('exist')
    cy.get('#homeQuoteText').should('exist')
    cy.get('#homeBodyText').should('exist')

  })
})

describe('Home - page functions', () => {
  it ('Checks that the page components function correctly', () => {
    // Page Components function correctly

  })
})
