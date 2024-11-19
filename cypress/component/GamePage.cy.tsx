// cypress/component/Game.cy.tsx

import GamePage from '../../client/src/pages/Game'; // Adjust the import path as necessary
import { mount } from 'cypress/react18';
import { mockState } from '../support/utils/helpers';
import '@testing-library/cypress/add-commands';

describe('<GamePage />', () => {
  beforeEach(() => {
    cy.intercept('GET', '/api/game/start', (req) => {
      req.reply({
        statusCode: 200,
        body: mockState
      });
    }).as('getRandomWord');

    cy.intercept('POST', `/api/game/${mockState.id}/guess`, (req) => {
      const letter = req.body.letter.toLowerCase();
      if (letter === 's') {
        req.reply({
          statusCode: 200,
          body: {
            maskedWord: 'Test',
            isComplete: true,
            isCorrect: true,
            isWinner: true
          }
        });
      } else {
        req.reply({
          statusCode: 200,
          body: {
            maskedWord: 'Te_t',
            isComplete: true,
            isCorrect: false,
            isWinner: false
          }
        });
      }
    }).as('postGuess');
  });

  it('should render the game page, word with underscores, keyboard, and countdown', () => {
    mount(<GamePage />);
    cy.get('[data-cy=game]').should('be.visible');
    cy.get('[data-cy=game]').should('contain', mockState.maskedWord);
    cy.get('[data-cy=keyboard]').should('be.visible');
    cy.get('[data-cy=countdown]').should('be.visible').and('contain', mockState.guessesRemaining);
  });

  it('should hide the game area and show "You won!" when the game is won', () => {
    mount(<GamePage />);

    // Wait for the game to start
    cy.wait('@getRandomWord');

    // Simulate final correct guess
    cy.get('[data-cy=s]').click();
    cy.wait('@postGuess');

    // Check if the winning message is displayed
    cy.get('[data-cy=game-area]').should('not.exist');
    cy.contains('You won!').should('be.visible');
  });

  it('should hide the game area and show a loss message when the game is complete but the word contains underscores', () => {
    mount(<GamePage />);

    // Wait for the game to start
    cy.wait('@getRandomWord');

    // Simulate incorrect guesses
    cy.get('[data-cy=a]').click();
    cy.wait('@postGuess');

    // Check if the loss message is displayed
    cy.get('[data-cy=game-area]').should('not.exist');
    cy.contains('You lost!').should('be.visible'); // Adjust the text based on the actual implementation
  });
});
