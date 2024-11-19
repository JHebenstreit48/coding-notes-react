import Keyboard from '../../client/src/components/Keyboard'
import KEYS from '../fixtures/keys.json'

describe('<Keyboard />', () => {
  it('should render full Keyboard', () => {
    const handleGuess = cy.stub().as('handleGuess');
    cy.mount(<Keyboard handleGuess={handleGuess} KEYS={KEYS} guesses={[]}/>)
    cy.get('[data-cy=keyboard]').children().should('have.length', 26)
  })

  it('should call the `handleGuess` function when letter T is clicked', () => {
    const handleGuess = cy.stub().as('handleGuess');
    cy.mount(<Keyboard handleGuess={handleGuess} KEYS={KEYS} guesses={[]}/>)

    cy.findByText('T').should('exist').and('have.value', 't').click();
    cy.get('@handleGuess').should('have.been.calledOnce');
  });

  it('should disable the letter T after it is clicked', () => {
    const handleGuess = cy.stub().as('handleGuess');
    cy.mount(<Keyboard handleGuess={handleGuess} KEYS={KEYS} guesses={['t']}/>)

    cy.findByText('T').should('exist').and('have.value', 't').and('be.disabled');
  })
})
