import { createYield } from "typescript"

describe('Home Page', () => {
    it('loads without problems', () => {
        cy.visit('/')

        cy.get('[data-cy=logo]').should('exist')

        cy.get('[data-cy=learn-react-button]')
            .should('exist')
            .and('have.attr', 'href')
            .and('eq', 'https://reactjs.org')
    })
})