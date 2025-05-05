# module-19-challenge-tech-quiz-tech-suite

## 📹 Walkthrough Video
Screen recording: https://drive.google.com/file/d/1hT1jjI6NdLpq6OKROksTXUJz9Nh4QEi_/view?usp=sharing

## 🧪 Tech Quiz Test Suite
This project enhances a fully functional Tech Quiz application by integrating Cypress for both component and end-to-end testing. The application is built using the MERN stack: MongoDB, Express.js, React, and Node.js.

Users can take a quiz consisting of ten random tech questions and view their final score. The goal of this project is to implement thorough automated testing to ensure the app works as intended.

## 📦 Tech Stack
- Frontend: React
- Backend: Node.js, Express.js
- Database: MongoDB
- Testing: Cypress

## 🛠️ Getting Started
1. Clone the Repository
Make sure you've downloaded and unzipped the starter code and created your own GitHub repository with it.
```
git clone https://github.com/antoninast/module-19-challenge-tech-quiz-tech-suite.git
cd tech-quiz-suite
```
2. Install Dependencies
``` npm install ```

3. Run the Application
``` npm run start``` or ```npm run start:dev```

4. Run Component tests
```npm run test:component```

5. Run E2E tests
```npm run test:e2e```

6. Run Component and E2E tests together
```npm run test:```


## 🧪 Tests Overview
### ✅ Component Test
Tests the Quiz component's rendering and behavior in isolation.

### ✅ End-to-End Test
Simulates a full quiz-taking experience:
- Clicking "Start"
- Answering each question
- Viewing the final score
- Restarting the quiz

## 📄 License
This project is licensed under the **MIT License**.