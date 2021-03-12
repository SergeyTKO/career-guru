import React, {useState} from 'react';
import Button from '../Button/Button'

function PushTheAnswer({divValue, divHandler}) {
    const [state, setState] = useState('#393e46')

    const changeColor=event=>{

        divHandler(event)
            if (divValue.validity === true) setState('green')
            if (divValue.validity === false) setState('red')
            setTimeout(() => {
                setState('#393e46')
            }, 900)
    }

    return (
      <Button color={state} btnValue={divValue.answer} value={divValue.answer} buttonHandler={(event)=>changeColor(event)}></Button>
    )
}

export default PushTheAnswer;