import React from 'react';

function AdminForm() {

    function addCard(e) {
        e.preventDefault()

        const {question, answerTrue, answerFalse1, answerFalse2, answerFalse3, count, theme, tags} = e.target

        fetch('http://localhost:4000/admin', {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json'
            },
            body: JSON.stringify({
                question: question.value,
                answer: [{
                    answer: answerTrue.value,
                    validity: true,
                }, {
                    answer: answerFalse1.value,
                    validity: false
                }, {
                    answer: answerFalse2.value,
                    validity: false
                }, {
                    answer: answerFalse3.value,
                    validity: false
                }
                ],
                count: count.value,
                theme: theme.value,
                tags: tags.value
            })
        })
            .then(res => res.json())
            .then(data => console.log(data))

    }

    // function deleteCard(e){
    //   const {id} = e.target
    //
    //   fetch('http://localhost:4000/admin',{
    //     method:'DELETE',
    //     headers:{
    //       'Content-Type':'Application/json'
    //     },
    //     body: JSON.stringify({_id: id})
    //   })
    //   .then(res => res.json())
    //   .then(data => console.log(data))
    // }

    return (
        <div>
            <form onSubmit={addCard}>
                <input type="text" name="question" placeholder="вопрос"/>
                <input type="text" name="answerTrue" placeholder="Правильный ответ"/>
                <input type="text" name="answerFalse1" placeholder="Неправильный ответ"/>
                <input type="text" name="answerFalse2" placeholder="Неправильный ответ"/>
                <input type="text" name="answerFalse3" placeholder="Неправильный ответ"/>
                <input type="number" name="count" placeholder="счет"/>
                <input type="text" name="theme" placeholder="тема"/>
                <input type="text" name="tags" placeholder="тег"/>
                <button>Добавить</button>
            </form>
        </div>
    );
}

export default AdminForm;
