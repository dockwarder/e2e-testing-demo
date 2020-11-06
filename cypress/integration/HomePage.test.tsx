import { createYield } from "typescript"

describe('Home Page', () => {
    it('loads without problems', () => {
        cy.visit('/')
    })
})