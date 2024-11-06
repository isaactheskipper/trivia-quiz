import React, { useState } from 'react';
import Question from './Question';

const questions = [
  { question: 'What is the capital of France?', options: ['Paris', 'London', 'Berlin'], correctAnswer: 'Paris' },
  { question: 'Which planet is known as the Red Planet?', options: ['Mars', 'Jupiter', 'Saturn'], correctAnswer: 'Mars' }
];

function QuizGame() {
  const [answers, setAnswers] = useState({});  // Tracks selected answers by question index

  const handleAnswerSelect = (questionIndex, selectedAnswer) => {
    setAnswers(prev => ({
      ...prev,
      [questionIndex]: selectedAnswer
    }));
  };

  return (
    <div>
      <h1>Trivia Quiz Game</h1>
      {questions.map((question, index) => (
        <Question
          key={index}
          question={question}
          questionIndex={index}
          selectedAnswer={answers[index]}
          handleAnswerSelect={handleAnswerSelect}
        />
      ))}
    </div>
  );
}

export default QuizGame;
