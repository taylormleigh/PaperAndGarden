import { describe } from "mocha"

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })


describe('Home - page load', () => {
  it('Checks that the page components have loaded', () => {
    // Page Components load
    cy.get('.bodyDiv').should('exist').should('be.visible')
    cy.get('#homeLogo').should('exist').should('be.visible')
    cy.get('#homeQuote').should('exist').should('be.visible')
    cy.get('#homeQuoteText').should('exist').should('be.visible')
    cy.get('#homeBodyText').should('exist').should('be.visible')

  })
})

describe('Home - page functions', () => {
  it ('Checks that the page components function correctly', () => {
    // Page Components function correctly
  })
})

describe('layout functions - header', () => {
  it('Checks that the header site title links to index', () => {
    // Header displays correctly
    cy.get('#siteTitle').should('be.visible')
    // Header site title links to index
    cy.get('#siteTitle').click()
      .get('#homeLogo').should('be.visible')
  })
})

describe('layout functions - navigation', () => {
  it('Checks that the navigation buttons link correctly', () => {
    // Navigation displays correctly
    cy.get('#navigation').should('be.visible')
    // Navigation buttons link correctly
    cy.get('#authButton').click()
      .url().should('contain', '/SignIn')
    cy.get('#viewWorldsButton').click()
      .url().should('contain', '/MyWorlds')
    cy.get('#newWorldButton').click()
      .url().should('contain', '/Create')
  })
})

describe('layout functions - footer', () => {
  it('Checks that the footer functions correctly', () => {
    // Footer navigation displays correctly
    cy.get('#buttonNavigation').should('be.visible')
    //Footer buttons link correctly
    cy.get('#linktreeButton').should('be.visible')
      .should('have.attr', 'href').and('contain', 'linktr.ee/paper.garden')
    cy.get('#githubButton').should('be.visible')
      .should('have.attr', 'href').and('contain', 'github.com/taylormleigh/PaperAndGarden')
    cy.get('#tayMadeButton').should('be.visible')
      .should('have.attr', 'href').and('contain', 'tay-made.com')
    cy.get('#linkedInButton').should('be.visible')
      .should('have.attr', 'href').and('contain', 'www.linkedin.com/in/tay-huval')
    cy.get('#contactButton').should('be.visible')
      .should('have.attr', 'href').and('contain', 'me@tay-made.com')
  })
})

})