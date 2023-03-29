import Book from '../../common/interfaces/Book';
import purchasesApi from '../../api/purchasesApi';
import booksApi from '../../api/booksApi';
import './BookList.scss';
import BookCard from '../BookCard/BookCard';

interface BookListProps {
    books: Array<Book>,
    fetchBooks?: () => void,
    fetchPurchases?: () => void,
    isUserAuth?: Boolean,
    isAdmin?: Boolean,
}

const BookList = ({ books, fetchBooks, fetchPurchases, isUserAuth, isAdmin }: BookListProps) => {

    const purchaseBook = async (bookId: string) => {
        purchasesApi.purchaseBook(bookId).then(res => {
            fetchPurchases?.();
            console.log(res);
            alert('Book purchased successfully!');
        })
            .catch(_ => { });
    };

    const deleteBook = async (id: string) => {
        booksApi.deleteBook(id).then(_ => {
            fetchBooks?.();
        })
            .catch(_ => { });
    };

    return (
        <div className='book-list-container'>
            <h2>Book List</h2>

            <div className="book-list">
                {books.map(book =>
                    <BookCard
                        key={book.id}
                        book={book}
                        isUserAuth={isUserAuth}
                        isAdmin={isAdmin}
                        handlePurchase={purchaseBook}
                        handleDelete={deleteBook} />
                )}
            </div>
        </div>
    );
};

export default BookList;