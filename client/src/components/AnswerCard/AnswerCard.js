import React from 'react';

function AnswerCard({answer}) {
  return (
    <div>
      <div>
        <h3>Вариант 1</h3>
        <p>{answer[0].answer}</p>
      </div>
      <div>
        <h3>Вариант 2</h3>
        <p>{answer[1].answer}</p>
      </div>
      <div>
        <h3>Вариант 3</h3>
        <p>{answer[2].answer}</p>
      </div>
      <div>
        <h3>Вариант 4</h3>
        <p>{answer[3].answer}</p>
      </div>
    </div>
  );
}

export default AnswerCard;
