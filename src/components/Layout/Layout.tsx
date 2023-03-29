import { ReactNode, useEffect } from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'
import './Layout.scss';
import useBooks from '../../hooks/useBooks';

interface LayoutProps {
    children?: ReactNode,
}

function Layout({ children }: LayoutProps) {
    const { fetchBooks } = useBooks();

    useEffect(() => {
        fetchBooks();
    }, [])

    return (
        <>
            <div className='layout-container'>
                <Header />
                <div className='content-area'>
                    {children ?
                        <div className='children-area'>
                            {children}
                        </div>
                        :
                        <Outlet />}
                </div>
            </div>
        </>
    )
}

export default Layout