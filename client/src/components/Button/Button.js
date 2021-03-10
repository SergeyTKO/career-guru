import React from 'react';

function Button({ btnValue, buttonHandler, state,id }) {
  return (
    <button id = {id} onClick = {(event,_id) => buttonHandler(event,_id)}> { btnValue }</button >
    );
}

export default Button;
