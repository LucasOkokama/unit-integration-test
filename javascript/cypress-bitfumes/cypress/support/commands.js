Cypress.Commands.add("posts", () => {
  cy.get(".PostList_root__Cj_24")
    .find(".PostList_wrap__M0eE5")
    .should("be.visible")
})