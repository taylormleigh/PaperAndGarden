describe('Home', () => {
  it('Checks if everything is in the page', () => {
    cy.visit('http://localhost:3000')
    cy.get('#header').should('exist')
    cy.get('#navigation').should('exist')
    cy.get('#homeLogo').should('exist')
    cy.get('#homeQuote').should('exist')
  })
})