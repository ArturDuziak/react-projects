describe("Checks deleteing TO DO", () => {
  it("checks", () => {
    cy.visit("/todo-app");
    cy.get('[class="ticket-title"]')
      .first()
      .invoke("text")
      .should("eq", "Title of first ticket");

    cy.lighthouse();

    cy.log("test");

    cy.get('[class="ticket-title"]')
      .first()
      .invoke("text")
      .should("eq", "Title of first ticket");
  });

  it.only("checks stackin site", () => {
    cy.visit("https://app.staging.stackin.com/");

    // cy.contains("Get more from your money with products we believe in").should(
    //   "be.visible"
    // );

    const thresholds = {
      performance: 10,
      accessibility: 80,
      seo: 60,
      pwa: 50,
    };

    const lighthouseConfig = {
      preset: 'desktop',
    };

    cy.lighthouse(thresholds, lighthouseConfig);
  });
});
