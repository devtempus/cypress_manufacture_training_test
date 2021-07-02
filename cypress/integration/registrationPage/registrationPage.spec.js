before(() => {
  cy.visit("https://manufacture.coffee/registration/");
});

describe("User registration", () => {
  it("Registration when user is registered", () => {
    cy.get("#reg_sr_firstname").type("12345").should("have.value", "12345");
    cy.get("#reg_sr_lastname").type("wilson").should("have.value", "wilson");
    cy.get("#reg_email")
      .type("123@gmail.com")
      .should("have.value", "123@gmail.com");
    cy.get("#reg_password")
      .type("11112222qweQWE")
      .should("have.value", "11112222qweQWE");
    cy.get("input[name='register']")
      .click()
      .should("have.value", "Зареєструватися");
    cy.contains(
      "Помилка: Обліковий запис з вашою електронною адресою вже зареєстровано. Будь ласка увійдіть."
    );
  });
});

describe("Bad/Good password message testing", () => {
  it("Very light password message", () => {
    cy.get("#reg_password").type("123").should("have.value", "123");
    cy.contains("Дуже слабкий - Будь ласка, введіть надійніший пароль.");
  });
  it("Light password message", () => {
    cy.get("#reg_password").clear().type("123d").should("have.value", "123d");
    cy.contains("Слабкий - Будь ласка, введіть надійніший пароль.");
  });
  it("Medium password message", ()=> {
      cy.get('#reg_password').clear().type('1q2w3e4r5t6y7u8i9o').should('have.value', '1q2w3e4r5t6y7u8i9o')
      cy.contains('Середній')
  })
  it('Strong password message', ()=> {
    cy.get('#reg_password').clear().type('1q2w3e4r5t6y7u8i9oawd').should('have.value', '1q2w3e4r5t6y7u8i9oawd')
    cy.contains('Сильний')
  })
});
