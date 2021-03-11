import React from 'react';

function Button({ btnValue, buttonHandler, color, id}) {
  return (
    <button id={id} style={{backgroundColor: color}} onClick = {(...args) => buttonHandler(...args)}> { btnValue }</button >
    );
}

export default Button;
