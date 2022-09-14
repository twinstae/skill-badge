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
  cy.visit(path);
  cy.location('pathname').should('contain', path).wait(waitTime);
}

Cypress.Commands.add('visitAndCheck', visitAndCheck);

type AccessibleName = string | RegExp | ((accessibleName: string, element: Element) => boolean);

function findTextBox(name: AccessibleName) {
  return cy.findByRole('textbox', { name });
}

function findButton(name: AccessibleName) {
  return cy.findByRole('button', { name });
}

function findLink(name: AccessibleName) {
  return cy.findByRole('link', { name });
}

Cypress.Commands.add('findTextBox', findTextBox);
Cypress.Commands.add('findButton', findButton);
Cypress.Commands.add('findLink', findLink);
Cypress.Commands.add('findLink', findLink);
export default {};
