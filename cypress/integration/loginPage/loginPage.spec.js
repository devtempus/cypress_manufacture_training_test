before(() => {
  cy.visit("https://manufacture.coffee/login/");
  cy.clearCookies({ domain: null });
});

describe("Check user can sign in using valid data", () => {
  it("input email", () => {
    cy.get('input[id="username"]')
      .type("Ramennewlife1994@gmail.com")
      .should("have.value", "Ramennewlife1994@gmail.com");
  });
  it("input password", () => {
    cy.get('input[id="password"]')
      .type("f1605f1994")
      .should("have.value", "f1605f1994");
  });
  it("click submit button", () => {
    cy.get('button[name="login"]').click();
  });
  it("check user is logged in", () => {
    cy.get("#site-navigation .topbar-link-toggle").click();
    cy.contains("Вихід");
  });
});

describe("Check user can log out", () => {
  it("click user logo on main page", () => {
    cy.get("#site-navigation .topbar-link-toggle").dblclick();
  });
  it('click "log out" button', () => {
    cy.get("#site-navigation .logout").click();
    cy.contains("вийти").click();
  });
  it("check user is logged out", () => {
    cy.contains("Логін");
    cy.get('input[id="username"]').should('be.empty')
    cy.get('input[id="password"]').should('be.empty')
  });
});
