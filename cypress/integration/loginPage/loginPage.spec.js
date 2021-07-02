before(() => {
  cy.visit("https://manufacture.coffee/login");
});

describe("User sign in using valid data", () => {
  it("log in", () => {
    cy.get("h3.entry-title-main").contains("Логін");
    cy.get("#username")
      .type("Ramennewlife1994@gmail.com")
      .should("have.value", "Ramennewlife1994@gmail.com");
    cy.get("#password").type("f1605f1994").should("have.value", "f1605f1994");
    cy.get("#rememberme").check();
    cy.get("button[name='login']").click();
  });
  it("log out", () => {
    cy.get("#site-navigation .topbar-link-toggle").click();
    cy.get("#site-navigation .topbar-link-wrapper").contains("Вихід");
    cy.get("#site-navigation .logout").click();
    cy.contains("вийти").click();
    cy.contains("Логін");
  });
});

describe("User log in using invalid data", () => {
  it("Incorrect login", () => {
    cy.visit("https://manufacture.coffee/");
    cy.get("#site-navigation .topbar-link-toggle").click();
    cy.get("#site-navigation .topbar-link-wrapper").contains("Вхід");
    cy.get("a[href='/login']").click();
    cy.get("h3.entry-title-main").contains("Логін");
    cy.get("#username").type("Ramennewlife1994awd@gmail.com");
    cy.get("#password").type("f16awd05f1994");
    cy.get("button[name='login']").click();
    cy.contains("Логін");
  });
});

