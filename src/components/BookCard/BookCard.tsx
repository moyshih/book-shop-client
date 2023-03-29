import './BookCard.scss';
import Book from '../../common/interfaces/Book';

interface BookCardProps {
    book: Book,
    isAdmin?: Boolean,
    isUserAuth?: Boolean,
    handlePurchase?: (id: string) => void,
    handleDelete?: (id: string) => void,
}

const BookCard = ({ book, isUserAuth, isAdmin, handlePurchase, handleDelete }: BookCardProps) => {
    return (
        <div key={book.id} className='book-card-container'>
            <div className="book-info">
                <h3>{book.info.title}</h3>
                <p>Author: {book.info.author}</p>
                <p>Publisher: {book.info.publisher}</p>
                <p>Price: {book.info.price}</p>
            </div>

            {isUserAuth && (isAdmin ?
                <button className='delete-btn' onClick={() => handleDelete?.(book.id)}>Delete</button>
                :
                <button className='purchase-btn' onClick={() => handlePurchase?.(book.id)}>Purchase</button>)}
        </div>)
}

export default BookCard;