import { useEffect } from 'react'
import useBooks from '../../hooks/useBooks';
import authService from '../../services/authService';
import { useNavigate } from 'react-router-dom';
import BooksWrapper from '../../components/BooksWrapper/BooksWrapper';
import './Home.scss';

function Home() {
    const { books, fetchBooks } = useBooks();
    const navigate = useNavigate();

    useEffect(() => {
        if (authService.isUserAuth())
            navigate('/dashboard')
    }, [])

    return (
        <div className='home-container'>
            <h1>
                The Book's Place
            </h1>
            <h3>
                The place where the next Einstein was born
            </h3>
            <BooksWrapper
                books={books}
                fetchBooks={fetchBooks} />
        </div>
    )
}

export default Home;