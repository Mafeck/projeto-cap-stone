context("SearchAdress", () => {
  it("Cadastrar Usuário", () => {
    cy.visit("https://projeto-cap-stone.vercel.app/");
    cy.viewport(1440, 900);

    cy.contains("Cadastrar").click();

    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.get('input[data-cy="oab/register"]')
      .type("12345")
      .wait(1000)
      .should("have.value", "12345");

    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.get('input[data-cy="state/register"]')
      .type("RS")
      .wait(1000)
      .should("have.value", "RS");

    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.get('input[data-cy="username/register"]')
      .type("Patrick")
      .wait(1000)
      .should("have.value", "Patrick");

    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.get('input[data-cy="email/register"]')
      .type("entrega@haki.com.br")
      .wait(1000)
      .should("have.value", "entrega@haki.com.br");

    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.get('input[data-cy="phone/register"]')
      .type("51983238380")
      .wait(1000)
      .should("have.value", "(51) 9 8323 8380");

    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.get('input[data-cy="password/register"]')
      .type("123456Aa@")
      .wait(1000)
      .should("have.value", "123456Aa@");

    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.get('input[data-cy="confirmpassword/register"]')
      .type("123456Aa@")
      .wait(1000)
      .should("have.value", "123456Aa@");

    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.get('button[type="submit"]').click().wait(1000);
  });

  it.only("Acessar Usuário", () => {
    cy.visit("https://projeto-cap-stone.vercel.app/login");
    cy.viewport(1440, 900);

    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.get('input[data-cy="email/login"]')
      .type("patrick@haki.com.br")
      .should("have.value", "patrick@haki.com.br")

    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.get('input[data-cy="password/login"]')
      .type("123456Aa@")
      .should("have.value", "123456Aa@")

    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.contains("Acessar").click().wait(3000);

    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.get(
      '[style="background-color: var(--color-secondary-strong); height: 140px; width: 95%; border-radius: 5px;"] > main'
    )
      .click()
      .wait(3000);

    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.get('input[data-cy="name/registerCli"]')
      .type("PicPay")
      .should("have.value", "PicPay")

    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.get('input[data-cy="cpf/registerCli"]')
      .type("22.896.431/0001-10")
      .should("have.value", "22.896.431/0001-10")

    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.get('input[data-cy="genre/registerCli"]')
      .type("Masculino")
      .should("have.value", "Masculino")

    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.get('input[data-cy="naturalness/registerCli"]')
      .type("Porto-alegrense")
      .should("have.value", "Porto-alegrense")

    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.get('input[data-cy="nationality/registerCli"]')
      .type("Brasileiro")
      .should("have.value", "Brasileiro")

    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.get('input[data-cy="fatherName/registerCli"]')
      .type("Claudionor da Silva Santos")
      .should("have.value", "Claudionor da Silva Santos")

    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.get('input[data-cy="motherName/registerCli"]')
      .type("Neiva da Silva Santos")
      .should("have.value", "Neiva da Silva Santos")

    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.get('input[data-cy="qualification/registerCli"]')
      .type("Superior Completo")
      .should("have.value", "Superior Completo")

    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.get('input[data-cy="company/registerCli"]')
      .type("Grupo Boticario")
      .should("have.value", "Grupo Boticario")

    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.get('input[data-cy="phone/registerCli"]')
      .type("51983238380")
      .should("have.value", "(51) 9 8323 8380");

    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.get('input[data-cy="type/registerCli"]')
      .type("Fisica")
      .should("have.value", "Fisica")

    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.get('input[data-cy="maritalStatus/registerCli"]')
      .type("Casado")
      .should("have.value", "Casado")

    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.get('input[data-cy="road/registerCli"]')
      .type("Avenida Boqueirão")
      .should("have.value", "Avenida Boqueirão")

    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.get('input[data-cy="zipCode/registerCli"]')
      .type("92032023")
      .should("have.value", "92032023")

    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.get('input[data-cy="district/registerCli"]')
      .type("Estância Velha")
      .should("have.value", "Estância Velha")

    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.get('input[data-cy="houseNumber/registerCli"]')
      .type("3521")
      .should("have.value", "3521")

    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.get('input[data-cy="processNumber/registerCli"]')
      .type("123456789")
      .should("have.value", "123456789")

    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.get('input[data-cy="area/registerCli"]')
      .type("Trabalhista")
      .should("have.value", "Trabalhista")

    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.get('button[type="submit"]').click().wait(1000);
  });
});
