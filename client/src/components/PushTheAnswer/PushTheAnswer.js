import React, {useState} from 'react';

function PushTheAnswer({divValue, divHandler}) {
    const [state, setState] = useState('transparent')

    return (
        <button style={{backgroundColor: state}} value={divValue.answer} onClick={(event) => {
            divHandler(event)
            if (divValue.validity === true) setState('green')
            if (divValue.validity === false) setState('red')
            setTimeout(() => {
                setState('transparent')
            }, 1200)
        }}>{divValue.answer}</button>
    );
}

export default PushTheAnswer;