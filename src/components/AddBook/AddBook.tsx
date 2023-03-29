import React, { ChangeEvent, FormEvent, useState } from 'react';
import booksApi from '../../api/booksApi';
import BookData from '../../common/interfaces/BookData';
import './AddBook.scss';

interface AddBookprops {
    fetchBooks: () => void,
}

const AddBook = (props: AddBookprops) => {
    const [newBook, setNewBook] = useState<BookData>({ title: '', author: '', publisher: '', price: 0 });

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNewBook({ ...newBook, [name]: value });
    };

    const AddBook = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        booksApi.createBook(newBook).then(_ => {
            props.fetchBooks();

            // Clear data
            setNewBook({ title: '', author: '', publisher: '', price: 0 });
        })
            .catch(_ => { });
    };

    return (
        <>
            <form onSubmit={AddBook} className='add-book-container'>
                <label>
                    Title:
                    <input type="text" name="title" value={newBook.title} onChange={handleInputChange} required />
                </label>
                <label>
                    Author:
                    <input type="text" name="author" value={newBook.author} onChange={handleInputChange} required />
                </label>
                <label>
                    Publisher:
                    <input type="text" name="publisher" value={newBook.publisher} onChange={handleInputChange} required />
                </label>
                <label>
                    Price:
                    <input type="number" name="price" value={newBook.price} onChange={handleInputChange} step="0.01" min="0" required />
                </label>
                <button type="submit">Add Book</button>
            </form>
        </>
    );
};

export default AddBook;
