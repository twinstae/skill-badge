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
      findTextBox: typeof findTextBox;
      findButton: typeof findButton;
      findLink: typeof findLink;
    }
  }
}

function visitAndCheck(path: string, waitTime: number = 1000) {
  cy.visit('http://localhost:3000'+path);
  cy.location('pathname').should('contain', path).wait(waitTime);
}

Cypress.Commands.add('visitAndCheck', visitAndCheck);

function findTextBox(name: string) {
  return cy.findByRole('textbox', { name });
}

function findButton(name: string) {
  return cy.findByRole('button', { name });
}

function findLink(name: string) {
  return cy.findByRole('link', { name });
}

Cypress.Commands.add('findTextBox', findTextBox);
Cypress.Commands.add('findButton', findButton);
Cypress.Commands.add('findLink', findLink);
Cypress.Commands.add('findLink', findLink);
export default {};
