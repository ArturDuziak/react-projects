import ToDoAppPage from "../../support/pages/toDoApp/toDoAppPage";
import { getToast } from "../../support/shared/toastElement";

const todoAppPage = new ToDoAppPage();

describe("Checks deleteing tickets function", () => {
  beforeEach(() => {
    cy.fixture("todoApp/oneTicketInTodo.json").then(({ key, value }) => {
      window.localStorage.setItem(key, value);
    });

    todoAppPage.visitUrl();
  });

  it("User can delete ticket using delete button", () => {
    todoAppPage.todoColumn().should("have.length", 1);
    todoAppPage.todoColumn().within(() => {
      cy.contains("Ticket title");
    });

    todoAppPage.clickDeleteTicketButton();

    todoAppPage.ticketElement().should("not.exist");
    getToast().contains("Ticket deleted successfully");
  });
});
