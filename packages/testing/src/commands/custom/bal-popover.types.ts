/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
     * Opens and closes the popover.
     */
    balPopoverToggle(): Chainable<JQuery>
    /**
     * Asserts if the popover is open.
     */
    balPopoverIsOpen(): Chainable<JQuery>
    /**
     * Asserts if the popover is closed.
     */
    balPopoverIsClosed(): Chainable<JQuery>
    /**
     * Asserts if the trigger button contains the given content.
     */
    balPopoverTriggerContains(
      content: string | number | RegExp,
      options?: Partial<Loggable & Timeoutable & CaseMatchable & Shadow>,
    ): Chainable<JQuery>
    /**
     * Asserts if the popover menu contains the given content.
     */
    balPopoverContentContains(
      content: string | number | RegExp,
      options?: Partial<Loggable & Timeoutable & CaseMatchable & Shadow>,
    ): Chainable<JQuery>
  }
}
