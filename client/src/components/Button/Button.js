import React from 'react';

function Button({ btnValue, buttonHandler, color, id, value}) {
  return (
    <button value={value} id={id} style={{backgroundColor: color}} onClick = {(event, id) => buttonHandler(event, id)}> { btnValue }</button >
    );
}

export default Button;
