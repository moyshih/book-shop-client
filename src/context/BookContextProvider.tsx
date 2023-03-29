import { createContext, useState } from "react";
import Book from "../common/interfaces/Book";
import booksApi from "../api/booksApi";

interface BooksContextProvierProps {
    children?: JSX.Element
}

export const BooksContext = createContext({ books: new Array<Book>(), setBooks: (books: []) => { }, fetchBooks: () => { } });

export const BooksContextProvier = ({ children }: BooksContextProvierProps) => {
    const [books, setBooks] = useState([]);

    const fetchBooks = async () => {
        booksApi.getBooks().then((res) => {

            const newBoooks = res?.data.data.map((item: any) => {
                let book: Book =
                {
                    id: item._id,
                    info:
                    {
                        title: item.title,
                        author: item.author,
                        publisher: item.publisher,
                        price: item.price
                    }
                };

                return book;
            });

            newBoooks && setBooks(newBoooks);
        })
            .catch(_ => { });
    }

    const value = {
        books,
        setBooks,
        fetchBooks,
    };

    return (
        <BooksContext.Provider value={value}>{children}</BooksContext.Provider>
    );
}