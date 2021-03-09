import React from 'react';

function Button({ btnValue, buttonHandler, state }) {
  return (
    <button onClick = {(event,_id) => buttonHandler(event,_id)}> { btnValue }</button >
    );
}

export default Button;
