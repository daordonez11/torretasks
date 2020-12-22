// https://docs.cypress.io/api/introduction/api.html

describe('Root Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.contains('h1', ' Welcome to Torre Tasks ')
  })
})

describe('Task view Test', () => {
  it('Visits the app funcitonality', () => {
    cy.visit('/tasks')
    cy.contains('p', 'Information will only appear when both job and candidate are selected')
    cy.contains('h1', 'Previously Stored Lists')
  })
})
