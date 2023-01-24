/// <reference types="cypress" />

it('opens window in the current test runner', () => {
  cy.on('uncaught:exception', () => false)
  cy.visit('/browser-windows').then((win) => {
    cy.stub(win, 'open').as('open')
  })
  cy.get('#messageWindowButton').click()
  cy.get('@open').should('have.been.calledWith', '', 'MsgWindow')
})
