class RegisterForm {
  elements = {
    titleInput: () => cy.get('#title'),
    titleFeedback: () => cy.get('#titleFeedback'),
    imageUrlInput: () => cy.get('#imageUrl'),
    urlFeedback: () => cy.get('#urlFeedback'),
    btnSubmit: () => cy.get('#btnSubmit')
  }

  typeTitle(title) {
    if (!title) return;
    this.elements.titleInput().type(title)
  }

  typeUrl(url) {
    if (!url) return;
    this.elements.imageUrlInput().type(url)
  }

  clickSubmit() {
    this.elements.btnSubmit().click()
  }
}

const registerForm = new RegisterForm()

describe('Image Registration', () => {
  describe('Submitting an image with invalid inputs', () => {
    after(() => {
      cy.clearAllLocalStorage()
    })

    const input = {
      title: "",
      url: ""
    }

    it('Given I am on the image registration page', () => {
      cy.visit('/')
    })

    it(`When I enter "${input.title}" in the title field`, () => {
      registerForm.typeTitle(input.title)
    })

    it(`Then I enter "${input.url}" in the URL field`, () => {
      registerForm.typeUrl(input.url)
    })

    it("Then I click the submit button", () => {
      registerForm.clickSubmit()
    })

    it("Then I should see 'Please type a title for the image' message above the title field", () => {
      registerForm.elements.titleFeedback().should('contains.text', 'Please type a title for the image')
    })

    it("And I should see 'Please type a valid URL' message above the imageUrl field", () => {
      registerForm.elements.urlFeedback().should('contains.text', 'Please type a valid URL')
    })

    it("And I should see an exclamation icon in the title and URL fields", () => {
      registerForm.elements.titleInput()
        .should('have.css', 'background-image')
        .and('include', "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e")

      registerForm.elements.imageUrlInput()
        .should('have.css', 'background-image')
        .and('include', "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e")
    })
  })
})