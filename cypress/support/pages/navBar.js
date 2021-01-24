class NavBar {
  navBarTriggerButton() {
    return cy.get('[data-cy="navbar-trigger-btn"]');
  }

  clickNavBarTriggerButton() {
    this.navBarTriggerButton().click();
  }

  navBarContainer() {
    return cy.get('[data-cy="navbar-container"]');
  }

  navbarOverlay() {
    return cy.get('[data-cy="navbar-overlay"]');
  }

  closeNavbarButton() {
    return cy.get('[data-cy="close-navbar-btn"]');
  }

  clickCloseNavbarButton() {
    this.closeNavbarButton().click();
  }

  clickNavbarOverlay() {
    this.navbarOverlay().click();
  }

  navBarHomeLink() {
    return cy.get('[data-cy="navbar-link-Home"]');
  }

  navBarMovieAppLink() {
    return cy.get('[data-cy="navbar-link-Movie app"]');
  }

  clickNavBarMovieAppLink() {
    this.navBarMovieAppLink().click()
  }
}

export default NavBar;
