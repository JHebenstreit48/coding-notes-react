import React from 'react'
import Word from '../../client/src/components/Word/index'
import { mockState } from '../support/utils/helpers'
import '@testing-library/cypress/add-commands'

describe('<Word />', () => {
  it('should render initial game state', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Word
      word={mockState.maskedWord} />
    )

    cy.findByText(mockState.maskedWord).should('exist')
  })


  it('should update the game state when a correct letter is guessed', () => {
    const handleGuess = cy.stub().as('handleGuess');
    cy.mount(<Word word='T__t' guesses={['t']} handleGuess={handleGuess} />);

    cy.findByText('T__t').should('exist');
  })
})
