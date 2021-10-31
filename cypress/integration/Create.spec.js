import { describe } from "mocha"

const base = () => cy.visit('http://localhost:3000/Create');

describe('Create - layout load', () => {
  it('Checks that the main layout components have loaded', () => {
    base();
    // Main Components load
    cy.get('#header').should('exist').should('be.visible')
    cy.get('#navigation').should('exist').should('be.visible')
    cy.get('.bodyDiv').should('exist').should('be.visible')
    cy.get('#footer').should('exist').should('be.visible')
  })
})

describe('Create - layout functions', () => {
  it('Checks that the main layout components function correctly', () => {
    // Main Components function correctly
    base();
    // Header site title links to index
    cy.get('#siteTitle').should('be.visible')
    cy.get('#siteTitle').click()
      .get('#homeLogo').should('be.visible')

    //Nav buttons all link properly
    base();
    cy.get('#navigation').should('be.visible')

    cy.get('#authButton').click()
      .url().should('contain', '/SignIn')
    base();
    cy.get('#viewWorldsButton').click()
      .url().should('contain', '/MyWorlds')
    base();
    cy.get('#newWorldButton').click()
      .url().should('contain', '/Create')

    //Footer buttons link properly
    base();
    cy.get('#buttonNavigation').should('be.visible')

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

describe('Create - page load', () => {
  it('Checks that the page components have loaded', () => {
    base();
    // Page Components load


  })
})

describe('Create - page functions', () => {
  it ('Checks that the page components function correctly', () => {
    base();
    // Page Components function correctly

  })
})
