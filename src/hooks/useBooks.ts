import { useContext } from 'react'
import { BooksContext } from '../context/BookContextProvider';

function useBooks() {
    return useContext(BooksContext);
}

export default useBooks