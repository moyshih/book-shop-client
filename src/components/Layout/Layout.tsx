import { ReactNode } from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'
import './Layout.scss';

interface LayoutProps {
    children?: ReactNode,
}

function Layout({ children }: LayoutProps) {
    
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