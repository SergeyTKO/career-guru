import React from 'react';
import {useDispatch, useSelector} from "react-redux";


function FavoriteCards() {
    
    const favCards = useSelector(state => state.auth.user.favoriteCards);
 console.log(favCards);

    return (
        <div>
            {favCards && favCards.map(el =>
                <div key={performance.now()}>
                    <div>Вопрос: {el.question}</div>
                    {/* <div>Ответ: {el.answer[0].answer}</div> */}
                   
                </div>
            )}
        </div>
    );
}

export default FavoriteCards;