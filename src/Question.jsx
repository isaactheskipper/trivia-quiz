import React from 'react';

function Question({ question, questionIndex, selectedAnswer, handleAnswerSelect }) {
  const isCorrect = selectedAnswer === question.correctAnswer;

  return (
    <div style={{ marginBottom: '20px' }}>
      <h3>{question.question}</h3>
      <ul>
        {question.options.map((option, idx) => (
          <li
            key={idx}
            onClick={() => handleAnswerSelect(questionIndex, option)}
            style={{
              cursor: 'pointer',
              color: selectedAnswer === option ? (isCorrect ? 'green' : 'red') : 'black'
            }}
          >
            {option}
            {selectedAnswer === option && isCorrect && <span> ✔️</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Question;
