class ToDoAppPage {
  url() {
    return "/todo-app";
  }

  visitUrl() {
    return cy.visit(this.url);
  }

  addTicketBtn() {
    return cy.get('[data-cy="add-ticket-btn"]');
  }

  quickAddTicketBtn() {
    return cy.get('[data-cy="quick-add-ticket-btn"]');
  }

  ticketTitleInput() {
    return cy.get('[data-cy="ticket-title-input"]');
  }

  ticketTitleInputError() {
    return cy.get('[data-cy="title-input-error"]');
  }

  todoColumn() {
    return cy.get('[data-cy="todo-column"]');
  }

  inProgressColumn() {
    return cy.get('[data-cy="inprogress-column"]');
  }

  doneColumn() {
    return cy.get('[data-cy="done-column"]');
  }

  modalOverlay() {
    return cy.get('[data-cy="modal-overlay"]');
  }

  ticketModal() {
    return cy.get('[data-cy="modal-content"]');
  }

  modalSubmitButton() {
    return cy.get('[data-cy="modal-submit-button"]');
  }

  modalTitle() {
    return cy.get('[data-cy="modal-title"]');
  }

  modalTitleInput() {
    return cy.get('[data-cy="modal-title-input"]');
  }

  modalTitleInputError() {
    return cy.get('[data-cy="modal-title-input-error"]');
  }

  modalDescriptionInput() {
    return cy.get('[data-cy="modal-description-textarea"]');
  }

  modalStatusSelect() {
    return cy.get('[data-cy="modal-status-select"]');
  }

  modalCloseButton() {
    return cy.get('[data-cy="modal-close-btn"]');
  }

  clickModalCloseButton() {
    this.modalCloseButton().click();
  }

  emptyColumnAddTicketBtn() {
    return cy.get('[data-cy="empty-column-btn"]');
  }
}

export default ToDoAppPage;
