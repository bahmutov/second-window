/// <reference types="cypress" />

/**
 * The application will open a child window using the following code
 * @example
 *  window.open("", "MsgWindow", "width=500,height=200")
 *  .document.write("Knowledge increases by sharing but not by saving...")
 */
it('opens window in the current test runner', () => {
  cy.visit('/browser-windows').then((win) => {
    cy.stub(win, 'open')
      .returns({
        document: {
          write: cy.stub().as('write'),
        },
      })
      .as('open')
  })
  cy.get('#messageWindowButton').click()
  cy.get('@open').should(
    'have.been.calledWith',
    '',
    'MsgWindow',
    Cypress.sinon.match.string,
  )
  cy.get('@write')
    .should('have.been.calledOnce')
    .its('firstCall.args.0')
    .should('include', 'Knowledge')
})
