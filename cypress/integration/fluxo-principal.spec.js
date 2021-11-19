context("SearchAdress", () => {
  it.only("Cadastrar Usuário", () => {
    cy.visit("http://localhost:3000/");
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
      .type("apresentacaoteste222222@haki.com.br")
      .wait(1000)
      .should("have.value", "apresentacaoteste222222@haki.com.br");

    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.get('input[data-cy="phone/register"]')
      .type("51983238380")
      .wait(1000)
      .should("have.value", "51983238380");

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

    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.get('input[data-cy="email/login"]')
      .type("apresentacaoteste222222@haki.com.br")
      .should("have.value", "apresentacaoteste222222@haki.com.br")
      .wait(1000);

    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.get('input[data-cy="password/login"]')
      .type("123456Aa@")
      .should("have.value", "123456Aa@")
      .wait(1000);

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
      .type("José Irineu Silva Santos")
      .should("have.value", "José Irineu Silva Santos")
      .wait(1000);

    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.get('input[data-cy="cpf/registerCli"]')
      .type("888.555.780-72")
      .should("have.value", "888.555.780-72")
      .wait(1000);

    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.get('input[data-cy="genre/registerCli"]')
      .type("Masculino")
      .should("have.value", "Masculino")
      .wait(1000);

    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.get('input[data-cy="naturalness/registerCli"]')
      .type("Porto-alegrense")
      .should("have.value", "Porto-alegrense")
      .wait(1000);

    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.get('input[data-cy="nationality/registerCli"]')
      .type("Brasileiro")
      .should("have.value", "Brasileiro")
      .wait(1000);

    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.get('input[data-cy="fatherName/registerCli"]')
      .type("Claudionor da Silva Santos")
      .should("have.value", "Claudionor da Silva Santos")
      .wait(1000);

    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.get('input[data-cy="motherName/registerCli"]')
      .type("Neiva da Silva Santos")
      .should("have.value", "Neiva da Silva Santos")
      .wait(1000);

    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.get('input[data-cy="qualification/registerCli"]')
      .type("Superior Completo")
      .should("have.value", "Superior Completo")
      .wait(1000);

    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.get('input[data-cy="company/registerCli"]')
      .type("Grupo Boticario")
      .should("have.value", "Grupo Boticario")
      .wait(1000);

    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.get('input[data-cy="phone/registerCli"]')
      .type("51983252620")
      .should("have.value", "51983252620")
      .wait(1000);

    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.get('input[data-cy="type/registerCli"]')
      .type("Fisica")
      .should("have.value", "Fisica")
      .wait(1000);

    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.get('input[data-cy="maritalStatus/registerCli"]')
      .type("Casado")
      .should("have.value", "Casado")
      .wait(1000);

    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.get('input[data-cy="road/registerCli"]')
      .type("Avenida Boqueirão")
      .should("have.value", "Avenida Boqueirão")
      .wait(1000);

    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.get('input[data-cy="zipCode/registerCli"]')
      .type("92032023")
      .should("have.value", "92032023")
      .wait(1000);

    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.get('data-cy="district/registerCli"]')
      .type("Estância Velha")
      .should("have.value", "Estância Velha")
      .wait(1000);

    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.get('input[data-cy="houseNumber/registerCli"]')
      .type("3521")
      .should("have.value", "3521")
      .wait(1000);

    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.get('input[data-cy="processNumber/registerCli"]')
      .type("123456789")
      .should("have.value", "123456789")
      .wait(1000);

    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.get('input[data-cy="area/registerCli"]')
      .type("Trabalhista")
      .should("have.value", "Trabalhista")
      .wait(1000);

    cy.contains("Cadastrar").click();
  });
});
