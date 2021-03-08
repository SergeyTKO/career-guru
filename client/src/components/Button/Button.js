import React from 'react';

function Button({btnValue,buttonHandler}) {
    return (
        <button type='button' value={btnValue} onClick={(event) => buttonHandler(event)}>{btnValue}</button>
    );
}

export default Button;