import NavBar from "../../support/pages/navBar";

const navBar = new NavBar();

describe("Checks navbar", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Navbar is not visible by default, user can open it up using hamburger icon", () => {
    navBar.navBarContainer().should("not.be.visible");

    navBar.clickNavBarTriggerButton();

    navBar.navBarContainer().should("be.visible");
  });

  it("User can close navbar by clicking outside of it", () => {
    navBar.clickNavBarTriggerButton();
    navBar.clickNavbarOverlay();

    navBar.navBarContainer().should("not.be.visible");
  });

  it("User can close navbar by clicking close button", () => {
    navBar.clickNavBarTriggerButton();
    navBar.clickCloseNavbarButton();
    
    navBar.navBarContainer().should("not.be.visible");
  });
  
  it("User can navigate to other page by clicking on link", () => {
    navBar.clickNavBarTriggerButton();
    navBar.clickNavBarMovieAppLink();
    cy.url().should("contain", "/movie-app");
    
    navBar.navBarContainer().should("not.be.visible");
  });
});
