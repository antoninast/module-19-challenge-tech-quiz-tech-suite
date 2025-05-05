describe('Quiz Component', () => {
  let mockQuestions;

  beforeEach(() => {
    cy.fixture('mockQuestions').then((data) => {
      mockQuestions = data;
      cy.intercept('GET', '/api/questions/random', {
        statusCode: 200,
        body: mockQuestions,
      }).as('getQuestions');
    });
  });

  it('should start the quiz', () => {
    cy.visit('http://localhost:3001');
    // cy.mount(<Quiz />);

    cy.contains('Start Quiz');
  });

  it('should display the first question when "Start Quiz" is clicked', () => {
    cy.visit('http://localhost:3001');
    // cy.mount(<Quiz />);

    cy.contains('Start Quiz').click();
    cy.wait('@getQuestions');

    cy.contains('What is 2 + 2?').should('exist');
    cy.contains('3').should('exist');
    cy.contains('4').should('exist');
    cy.contains('5').should('exist');
  });
  
  it('should answer a question and go to the next one', () => {
    // cy.mount(<Quiz />);
    cy.visit('http://localhost:3001');

    cy.contains('Start Quiz').click();
    cy.wait('@getQuestions');

    cy.contains('What is 2 + 2?').should('exist');
    cy.contains('button', '2').click();
    cy.contains('What is 3 + 5?').should('exist');
  });
  
  it('should complete the quiz and show the score', () => {
    // cy.mount(<Quiz />);
    cy.visit('http://localhost:3001');

    cy.contains('Start Quiz').click();
    cy.wait('@getQuestions');

    cy.contains('button', '2').click(); 
    cy.contains('button', '2').click();

    cy.contains('Quiz Completed').should('exist');
    cy.contains('Your score: 2/2').should('exist');
  });
});
