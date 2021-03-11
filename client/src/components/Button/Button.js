import React from 'react';

function Button({ btnValue, buttonHandler, color}) {
  return (
    <button style={{backgroundColor: color}} onClick = {(event,_id) => buttonHandler(event,_id)}> { btnValue }</button >
    );
}

export default Button;
