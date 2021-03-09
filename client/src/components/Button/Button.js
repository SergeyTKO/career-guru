import React from 'react';

function Button({ btnValue, buttonHandler, state }) {
  return (
    <button style={state ? {fontSize: '30px'}: {fontSize: '10px'}} type = 'button' value = { btnValue } onClick = {(event,_id) => buttonHandler(event,_id)}> { btnValue }</button >
    );
}

export default Button;
