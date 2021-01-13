import ToDoAppPage from "../../support/pages/toDoApp/toDoAppPage";
import { getToast } from "../../support/shared/toastElement";

const todoAppPage = new ToDoAppPage();
const RandomTicketTitle = "title of the ticket is random";

describe("Checks adding ticket functions", () => {
  beforeEach(() => {
    todoAppPage.visitUrl();
  });

  it("user cannot add ticket without a name", () => {
    todoAppPage.addTicketButton().click();
    todoAppPage
      .ticketTitleInputError()
      .should("be.visible")
      .and("have.text", "Value cannot be empty");

    cy.reload();
    todoAppPage.quickAddTicketButton().click();
    todoAppPage
      .ticketTitleInputError()
      .should("be.visible")
      .and("have.text", "Value cannot be empty");
  });

  it("user can add ticket using quick add feature", () => {
    todoAppPage.ticketTitleInput().type(RandomTicketTitle);
    todoAppPage.quickAddTicketButton().click();

    todoAppPage.todoColumn().should("have.length", 1);
    todoAppPage.todoColumn().within(() => {
      cy.contains(RandomTicketTitle);
    });
    getToast().contains("Ticket created successfully");

    todoAppPage
      .inProgressColumn()
      .within(() => cy.get('[data-cy="ticket-item"]').should("not.be.exist"));
    todoAppPage
      .doneColumn()
      .within(() => cy.get('[data-cy="ticket-item"]').should("not.be.exist"));
  });

  context("modal section", () => {
    it("modal is opened when user tries to add a ticket", () => {
      todoAppPage.ticketTitleInput().type(RandomTicketTitle);
      todoAppPage.addTicketButton().click();

      todoAppPage.ticketModal().should("be.visible");
      todoAppPage.modalTitle().should("contain", "Add ticket");
      todoAppPage
        .modalTitleInput()
        .invoke("val")
        .should("eq", RandomTicketTitle);
    });

    it("title input is cleared after user closes modal", () => {
      todoAppPage.ticketTitleInput().type(RandomTicketTitle);
      todoAppPage.addTicketButton().click();

      todoAppPage.clickModalCloseButton();
      todoAppPage.ticketTitleInput().invoke("val").should("eq", "");
    });

    it("empty column button opens up add ticket modal", () => {
      todoAppPage.emptyColumnAddTicketButton().first().click();

      todoAppPage.ticketModal().should("be.visible");
      todoAppPage.modalTitle().should("contain", "Add ticket");
    });
  });
});
