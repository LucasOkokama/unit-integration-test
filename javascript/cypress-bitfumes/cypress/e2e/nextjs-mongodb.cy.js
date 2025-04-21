/// <reference types="cypress" />

describe('Test the feed section of the nextjs/mongodb app', () => {
  it("Visit nextjs/mongodb app feed page", () => {
    cy.visit("https://nextjs-mongodb.vercel.app/feed")
  })

  it("Count the feed as 2", () => {
    cy.intercept("GET", "https://nextjs-mongodb.vercel.app/api/posts?limit=10", {
      fixture: "posts.json"
    })
    cy.posts().should('have.length', 2)
  })
})