import { useState } from 'react'
import BookList from '../BookList/BookList';
import SearchBar from '../SearchBar/SearchBar';
import Book from '../../common/interfaces/Book';

interface BooksWrapperProps {
    books: Array<Book>,
    fetchBooks?: () => void,
    fetchPurchases?: () => void,
    isUserAuth?: Boolean,
    isAdmin?: Boolean,
}

const BooksWrapper = ({ books, fetchBooks, fetchPurchases, isUserAuth, isAdmin }: BooksWrapperProps) => {
    const [filter, setFilter] = useState<string>('');

    const handleSearchChange = (filter: string) => {
        setFilter(filter);
    };

    const getFilteredBooks = () => {
        return (books.filter(
            (item) => {
                return (item.info.title.toLowerCase().includes(filter.toLowerCase())
                    || item.info.publisher?.toLowerCase().includes(filter.toLowerCase())
                    || item.info.author?.toLowerCase().includes(filter.toLowerCase())
                    || item.info.price.toString().toLowerCase().includes(filter.toLowerCase()))
            }))
    }

    return (
        <div>
            <SearchBar onSearchChanged={handleSearchChange} />
            <BookList
                books={getFilteredBooks()}
                fetchBooks={fetchBooks}
                fetchPurchases={fetchPurchases}
                isUserAuth={isUserAuth}
                isAdmin={isAdmin} />
        </div>
    )
}

export default BooksWrapper;