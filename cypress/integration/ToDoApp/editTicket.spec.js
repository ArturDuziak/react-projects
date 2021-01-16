import ToDoAppPage from "../../support/pages/toDoApp/toDoAppPage";
import { getToast } from "../../support/shared/toastElement";

const todoAppPage = new ToDoAppPage();

describe("Checks editing tickets function", () => {
  beforeEach(() => {
    cy.fixture("todoApp/oneTicketInToDo.json").then(({ key, value }) => {
      window.localStorage.setItem(key, value);
    });

    todoAppPage.visitUrl();
  });

  it("User can edit ticket's status using select", () => {
    todoAppPage.ticketStatusSelect().select("in_progress");

    todoAppPage
      .todoColumn()
      .within(() => cy.get('[data-cy="ticket-item"]').should("not.exist"));
    todoAppPage
      .inProgressColumn()
      .within(() => cy.get('[data-cy="ticket-item"]').should("be.visible"));
    getToast().contains("Ticket's status was successfully edited");

    todoAppPage.ticketStatusSelect().select("done");

    todoAppPage
      .inProgressColumn()
      .within(() => cy.get('[data-cy="ticket-item"]').should("not.exist"));
    todoAppPage
      .doneColumn()
      .within(() => cy.get('[data-cy="ticket-item"]').should("be.visible"));
    getToast().contains("Ticket's status was successfully edited");
  });

  context("Editing ticket using modal", () => {
    const newTitle = "New title";
    const newDescription = "New description";
    const newStatus = "in_progress";

    beforeEach(() => {
      todoAppPage.clickEditTicketButton();
    });

    it("user can edit title, description and status using modal", () => {
      todoAppPage.modalTitleInput().clear().type(newTitle);
      todoAppPage.modalDescriptionInput().clear().type(newDescription);
      todoAppPage.modalStatusSelect().select(newStatus);

      todoAppPage.clickModalSubmitButton();

      todoAppPage.ticketTitle().invoke("text").should("eq", newTitle);
      todoAppPage
        .ticketDescription()
        .invoke("text")
        .should("eq", newDescription);
      todoAppPage.ticketStatusSelect().should("have.value", newStatus);
    });

    it("user can remove description from the ticket", () => {
      todoAppPage.modalDescriptionInput().clear();

      todoAppPage.clickModalSubmitButton();

      todoAppPage.ticketDescription().invoke("text").should("eq", "");
    });

    it("user sees error when trying to edit ticket title with empty value", () => {
      todoAppPage.modalTitleInput().clear();

      todoAppPage.clickModalSubmitButton();

      todoAppPage.modalTitleInputError().should("contain", "Title is required");
    });
  });
});
