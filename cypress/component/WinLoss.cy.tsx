import React from 'react'
import WinLoss from '../../client/src/components/WinLoss/index'
import mockWord from '../fixtures/mockWord.json'

describe('<WinLoss />', () => {
  it('should render with a heading, solution, and button', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<WinLoss isWinner={''} solution={mockWord.text}/>)
    cy.get('[data-cy="win-loss-heading"]').should('exist')
    cy.get('[data-cy="win-loss-solution"]').should('exist')
    cy.get('[data-cy="reload-button"]').should('exist')
  })

  it('should display a win message', () => {
    cy.mount(<WinLoss isWinner={true} isComplete={true} solution={mockWord.text}/>)
    cy.findByText('You won!').should('exist')
  })

  it('should display a lose message', () => {
    cy.mount(<WinLoss isWinner={false} isComplete={true} solution={mockWord.text}/>)
    cy.findByText('You lost!').should('exist')
  })

  it('should display the solution', () => {
    cy.mount(<WinLoss isWinner={false} isComplete={true} solution={mockWord.text}/>)
    cy.findByText(`The solution was: ${mockWord.text}`).should('exist')
  })
})
