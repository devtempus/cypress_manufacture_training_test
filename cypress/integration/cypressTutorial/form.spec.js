describe("Form test", () => {
  it("Can fill the form", () => {
    cy.visit("http://localhost:5000/cypress/integration/cypressTutorial/");
    cy.get("form");
    cy.get('input[type="name"]').type("Molly").should("have.value", "Molly");
    cy.get('input[id="email"]')
      .type("molly@dev.dev")
      .should("have.value", "molly@dev.dev");
    cy.get("textarea")
      .clear().type("Mind you if I ask some silly question?")
      .should("have.value", "Mind you if I ask some silly question?");
    cy.server();
    cy.route({
      url: "/users/**",
      method: "POST",
      response: { status: "Form saved!", code: 201 },
    });
    cy.get("form").submit();
    cy.contains("Form saved!");
  });
});
