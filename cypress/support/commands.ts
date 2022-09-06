/// <reference types="cypress" />

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Extends the standard visit command to wait for the page to load
       *
       * @returns {typeof visitAndCheck}
       * @memberof Chainable
       * @example
       *    cy.visitAndCheck('/')
       *  @example
       *    cy.visitAndCheck('/', 500)
       */
      visitAndCheck: typeof visitAndCheck;
    }
  }
}

function visitAndCheck(path: string, waitTime: number = 1000) {
  cy.visit('http://localhost:3000'+path);
  cy.location('pathname').should('contain', path).wait(waitTime);
}

Cypress.Commands.add('visitAndCheck', visitAndCheck);

export default {};
