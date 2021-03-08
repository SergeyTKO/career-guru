import React from 'react';

function Button({value,buttonHandler}) {
  return (
      <button type='button' value={value} onClick={(event) => buttonHandler(event)}>{value}</button>
  );
}

export default Button;
