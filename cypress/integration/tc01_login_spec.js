describe("TC1: The Login Page", function() {
  it("successfully loads root page", function() {
    cy.visit("/");
    cy.get("#boasvindas").should("contain", "Bem vindo, Visitante");
  });

  it("clicks on login menu", () => {
    cy.get("ul.nav > li:nth-child(3)").click();
    cy.get("#modalLogin").should("be.visible");
  });

  it("fullfills login form", () => {
    cy.get("#formLogin").then($iframe => {
      const iframe = $iframe.contents();
      const formLogin = iframe.find("form#loginForm");
      cy.wrap(formLogin)
        .find("#LoginForm_username")
        .type("von.grijo");
      cy.wrap(formLogin)
        .find("#LoginForm_password")
        .type("123456");
      cy.wrap(formLogin)
        .find("#LoginForm_exercicio")
        .select("2019");

      cy.wrap(formLogin)
        .find("#LoginForm_username")
        .should("have.value", "von.grijo");
      cy.wrap(formLogin)
        .find("#LoginForm_password")
        .should("have.value", "123456");
      cy.wrap(formLogin)
        .find("#LoginForm_exercicio")
        .should("have.value", "2019");
    });
  });

  it("submits the form", () => {
    cy.get("#modalLogin > div.footer > input").click();
    cy.get("#boasvindas").should("contain", "Perfil:");
    cy.get("#boasvindas").should("contain", "Exercício:");
    cy.get("#mainmenu li:nth-child(8) > a").should("contain", "Logout");
  });
});
