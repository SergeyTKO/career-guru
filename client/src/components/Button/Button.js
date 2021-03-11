import React from 'react';

function Button({ btnValue, buttonHandler}) {
  return (
    <button onClick = {(event,_id) => buttonHandler(event,_id)}> { btnValue }</button >
    );
}

export default Button;
