import Quiz from '../../client/src/components/Quiz.tsx';

const mockQuestions = [
  {
    question: 'What is 2 + 2?',
    answers: [
      { text: '3', isCorrect: false },
      { text: '4', isCorrect: true },
      { text: '5', isCorrect: false },
    ],
  },
  {
    question: 'What is the capital of France?',
    answers: [
      { text: 'Berlin', isCorrect: false },
      { text: 'Paris', isCorrect: true },
      { text: 'London', isCorrect: false },
    ],
  },
];

describe('Quiz component', () => {
  beforeEach(() => {
    cy.intercept('GET', '/api/questions/random', {
      statusCode: 200,
      body: mockQuestions,
    }).as('getQuestions');
  });

  it('should render the Quiz component with the proper content', () => {
    cy.mount(<Quiz />);
    cy.contains('Start Quiz');
  });

  it('should start quiz and complete it correctly', () => {
    cy.mount(<Quiz />);
    cy.contains('Start Quiz').click();
    cy.wait('@getQuestions');

    cy.contains('What is 2 + 2?').should('exist');
    cy.contains('button', '2').click();

    cy.contains('What is the capital of France').should('exist');
    cy.contains('button', '2').click();

    cy.contains('Quiz Completed').should('exist');
    cy.contains('Your score: 2/2').should('exist');
  });
});
