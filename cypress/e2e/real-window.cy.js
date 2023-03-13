// @ts-check
/// <reference types="cypress" />

it('opens a real window in the current test runner', () => {
  cy.visit('/browser-windows').then((win) => {
    cy.spy(win, 'open').as('open')
  })
  cy.get('#messageWindowButton').click()
  cy.get('@open')
    .should('have.been.calledWith', '', 'MsgWindow')
    .its('firstCall.returnValue')
    .then((childWindow) => {
      expect(childWindow.document.body.innerText).to.include('Knowledge')
    })
    .wait(1000)
    .invoke('close')
})
