context("SearchAdress", () => {
  it("Test to validate if the zip code was found", () => {
    cy.visit("http://localhost:3000/");
    cy.viewport(1440, 900);

    cy.get("input").type(92032023).should("have.value", 92032023);

    cy.contains("Buscar pelo CEP").click();

    cy.get("input")
      .should(($lis) => {
        // eslint-disable-next-line jest/valid-expect
        expect($lis, "7 items").length(7);
      })
      .eq(1)
      .and("have.value", "Avenida Boqueirão");
  });
});
