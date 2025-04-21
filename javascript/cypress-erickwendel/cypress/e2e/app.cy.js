import { strict as assert } from 'assert'

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

  describe('Submitting an image with valid inputs using enter key', () => {
    after(() => {
      cy.clearAllLocalStorage()
    })

    const input = {
      title: "Alien (1979)",
      url: "https://wallpapers.com/images/hd/alien-1979-sci-fi-horror-movie-r3ro28y6u2pujp66.jpg"
    }

    it('Given I am on the image registration page', () => {
      cy.visit('/')
    })

    it("Then I click the submit button", () => {
      registerForm.clickSubmit()
    })

    it(`When I enter "${input.title}" in the title field`, () => {
      registerForm.typeTitle(input.title)
    })

    it("Then I should see a check icon in the title field", () => {
      registerForm.elements.titleInput()
        .should('have.css', 'background-image')
        .and('include', "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e")
    })

    it(`Then I enter "${input.url}" in the URL field`, () => {
      registerForm.typeUrl(input.url)
    })

    it("Then I should see a check icon in the imageUrl field", () => {
      registerForm.elements.imageUrlInput()
        .should('have.css', 'background-image')
        .and('include', "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e")
    })

    it("Then I can hit enter to submit the form", () => {
      registerForm.elements.imageUrlInput().type("{enter}")
    })

    it("And the list of registered images should be updated with the new item", () => {
      cy.get('#card-list .card-img').should((elements) => {
        const lastElement = elements[elements.length - 1]
        const lastElementSrc = lastElement.getAttribute('src')
        assert.strictEqual(lastElementSrc, input.url)
      })
    })

    it("And the new item should be stored in the localStorage", () => {
      cy.getAllLocalStorage().should(localStorage => {
        const localStorageItemsArray = JSON.parse(Object.values(localStorage[window.origin]))
        const lsLastItem = localStorageItemsArray[localStorageItemsArray.length - 1]

        assert.deepStrictEqual(lsLastItem, {
          title: input.title,
          imageUrl: input.url,
        })
      })
    })

    it('Then The inputs should be cleared', () => {
      registerForm.elements.titleInput().should('have.value', '')
      registerForm.elements.imageUrlInput().should('have.value', '')
    })
  })

  describe('Submitting an image and updating the list', () => {
    after(() => {
      cy.clearAllLocalStorage()
    })

    const input = {
      title: "Alien (1979)",
      url: "https://wallpapers.com/images/hd/alien-1979-sci-fi-horror-movie-r3ro28y6u2pujp66.jpg"
    }

    it('Given I am on the image registration page', () => {
      cy.visit('/')
    })

    it(`Then I have entered "${input.title}" in the title field`, () => {
      registerForm.typeTitle(input.title)
    })

    it(`Then I have entered "${input.url}" in the URL field`, () => {
      registerForm.typeUrl(input.url)
    })

    it("Then I click the submit button", () => {
      registerForm.clickSubmit()
    })

    it("And the list of registered images should be updated with the new item", () => {
      cy.get('#card-list .card-img').should((elements) => {
        const lastElement = elements[elements.length - 1]
        const lastElementSrc = lastElement.getAttribute('src')
        assert.strictEqual(lastElementSrc, input.url)
      })
    })

    it("And the new item should be stored in the localStorage", () => {
      cy.getAllLocalStorage().should(localStorage => {
        const localStorageItemsArray = JSON.parse(Object.values(localStorage[window.origin]))
        const lsLastItem = localStorageItemsArray[localStorageItemsArray.length - 1]

        assert.deepStrictEqual(lsLastItem, {
          title: input.title,
          imageUrl: input.url,
        })
      })
    })

    it('Then The inputs should be cleared', () => {
      registerForm.elements.titleInput().should('have.value', '')
      registerForm.elements.imageUrlInput().should('have.value', '')
    })
  })
})