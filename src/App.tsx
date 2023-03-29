// import logo from './logo.svg';
import { RouterProvider } from 'react-router-dom';
import { router } from './services/routerManager';
import './App.scss';
import { BooksContextProvier } from './context/BookContextProvider';
import { ThemeModeContextProvider } from './context/ThemeModeProvider';
import useTheme from './hooks/useTheme';

function App() {
  const { theme } = useTheme();

  return (
    <ThemeModeContextProvider>
      <BooksContextProvier>
        <div data-theme={theme} className={`app ${theme}`}>
          <RouterProvider router={router} />
        </div >
      </BooksContextProvier>
    </ThemeModeContextProvider>
  );
}

export default App;
