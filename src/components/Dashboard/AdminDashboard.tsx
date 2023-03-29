import AddBook from '../AddBook/AddBook';
import useBooks from '../../hooks/useBooks';
import BooksWrapper from '../BooksWrapper/BooksWrapper';

interface AdminDashboardProps {
}

const AdminDashboard = () => {
    const { books, fetchBooks } = useBooks();

    return (
        <div>
            <AddBook fetchBooks={fetchBooks} />
            <BooksWrapper
                books={books}
                fetchBooks={fetchBooks}
                isAdmin={true}
                isUserAuth={true} />
        </div>
    );
};

export default AdminDashboard;
