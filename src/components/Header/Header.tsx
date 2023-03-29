import authService from '../../services/authService';
import { Link, useNavigate } from 'react-router-dom';
import { ThemeMode } from '../../common/Enum/ThemeMode';
import useTheme from '../../hooks/useTheme';
import './Header.scss';

function Header() {
  const navigate = useNavigate();
  const { theme, setTheme } = useTheme();

  return (
    <div className='header-container'>
      <a href='/' className='home-page-link'>
        TheBook'sPlace
      </a>

      <div className='sign-link'>
        {authService.isUserAuth() ?
          (
            <>
              <Link to={''}
                onClick={() => authService.logout()
                  .then(_ => navigate('/')
                  )}>
                Logout
              </Link>
            </>
          )
          :
          <>
            <Link to={'/login'}>
              Login
            </Link>
          </>
        }
      </div>

      <button className='change-theme-mode-btn'
        onClick={_ => setTheme(theme === ThemeMode.light ? ThemeMode.dark : ThemeMode.light)}>
        {theme === 'light' ?
          <i className="fas fa-sun light-icon"></i>
          :
          <i className="fas fa-moon dark-icon"></i>}
      </button>

    </div>
  )
}

export default Header;