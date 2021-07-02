before(() => {
  cy.visit("https://manufacture.coffee/");
});

describe("User log in and log out test", () => {
  it("redirect to login page", () => {
    cy.get("#site-navigation .topbar-link-toggle").click();
    cy.get("#site-navigation .topbar-link-wrapper").contains("Вхід");
    cy.get("a[href='/login']").click();
  });
});
