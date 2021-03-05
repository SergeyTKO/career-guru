import React from 'react';

function Button({btnValue,buttonHandler}) {
  return (
      <button onClick={buttonHandler}>{btnValue}</button>
  );
}

export default Button;
