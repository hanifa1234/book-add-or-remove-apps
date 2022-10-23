import React from 'react'
import { useState, useReducer } from 'react'
import Modal from './Modal/Modal';
import { reducer } from "./Reducer";

//book Object
const booksData = [
    { id: 1, name: "React Book" },
    { id: 2, name: "Java Book" },
    { id: 3, name: "Php Book" }
]


//inisialState

const inisialState = {
    books: booksData,
    isModalOpen: false,
    modalText: " ",
}

//Modal
const UseReducer = () => {
    const [bookState, dispatch] = useReducer(reducer, inisialState)
    const [bookName, setBookName] = useState(" ");



    // onSubmit hendelartAdd

    const handelSubmit = (e) => {
        e.preventDefault();
        const newBook = { id: new Date().getDate().toString(), name: bookName }

        dispatch({
            //dispatch gona to reducer and add with action
            type: "ADD",
            payload: newBook,
        });
        setBookName(" ")
    }


    //id remove
    const removeBook = (id) => {
        dispatch({
            type: "REMOVE",
            payload: id,
        })
    };


    return <div>
        <h3>Book List</h3>
        <form onSubmit={handelSubmit} >
            <input type="text"
                placeholder='Add Book '
                value={bookName}
                onChange={(e) => { setBookName(e.target.value) }}
            />
            {/* buttonAdd */}
            <button type='text'> Add submit</button>
        </form>

        {/* Modal */}
        {bookState.isModalOpen && <Modal modalText={bookState.modalText} />}
        {/* bookMaping */}
        {bookState.books.map((book) => {
            //distructor 
            const { id, name } = book;
            return <li key={id}> 
            {name}   <button onClick={ ()=>{ removeBook(id) }}>
             Remove
             </button>
            </li>
        })}
    </div>

}

export default UseReducer