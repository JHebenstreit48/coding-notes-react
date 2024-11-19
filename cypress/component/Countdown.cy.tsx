
import Countdown from '../../client/src/components/Countdown'

describe('<Countdown />', () => {
  it('should initially render with a maximum of 9 guesses', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Countdown guesses={9}/>)
    cy.get('[data-cy="countdown"]').should('exist').and('have.text', 'Guesses Remaining: 9')
  })

  it('should render with a different number of guesses', () => {
    cy.mount(<Countdown guesses={5}/>)
    cy.get('[data-cy="countdown"]').should('exist').and('have.text', 'Guesses Remaining: 5')
  })

  it('should render a correct guess message', () => {
    cy.mount(<Countdown guesses={5} isCorrect={true} hasGuessed={true}/>)
    cy.get('[data-cy="toast"]').should('exist').and('contain.text', 'Correct!')
  })

  it('should render an incorrect guess message', () => {
    cy.mount(<Countdown guesses={5} isCorrect={false} hasGuessed={true}/>)
    cy.get('[data-cy="toast"]').should('exist').and('contain.text', 'Incorrect!')
  })
})
