import { HomeIcon } from '@heroicons/react/20/solid';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import TextsContext from '../contexts/textsContext';
import LanguageSelector from './LanguageSelector';

const Header = () => {
  const { texts } = useContext(TextsContext);

  return (
    <header className='fixed top-0 left-0 w-full py-4 bg-green-900 flex justify-between items-center px-4'>
      <NavLink
        to='/'
        className='focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-600 focus-visible:rounded-md hover:text-lime-600'
      >
        <HomeIcon className='-ml-0.5 h-8 w-8' aria-hidden='true' />
      </NavLink>
      <p className='text-base'>{texts.Header.p}</p>

      <LanguageSelector />
    </header>
  );
};

export default Header;
