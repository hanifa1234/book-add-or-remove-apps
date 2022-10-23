
export const reducer = (state, action) => {
    //action.type, action.payload 

    //add
    if (action.type === "ADD") {
        const allBooks = [...state.books, action.payload]
        return {
            ...state,
            books: allBooks,
            isModalOpen: true,
            modalText: "book is Added",
        }
    }
    //remove
    if (action.type === "REMOVE") {
        const filterBooks = [...state.books].filter(book => book.id !== action.payload);
        return {
            ...state,
            books: filterBooks,
            isModalOpen: true,
            modalText: "book is Remove Already"

        }
    }
    return state;
}
