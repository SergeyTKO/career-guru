import React from 'react';

function Button({btnValue,buttonHandler}) {
  return (
      <button type='button' onClick={(event) => buttonHandler(event)}>{btnValue}</button>
  );
}

export default Button;
