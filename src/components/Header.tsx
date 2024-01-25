import { HomeIcon } from '@heroicons/react/20/solid';
import { LanguageIcon } from '@heroicons/react/20/solid';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import TextsContext from '../contexts/textsContext';

const Header = () => {
  const { texts, handleClick } = useContext(TextsContext);

  return (
    <header className='fixed top-0 left-0 w-full py-4 bg-green-900 flex justify-between items-center px-4'>
      <NavLink
        to='/'
        className='focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-600 focus-visible:rounded-md hover:text-lime-600'>
        <HomeIcon className='-ml-0.5 h-8 w-8' aria-hidden='true' />
      </NavLink>
      <p className=''>{texts.Header.p}</p>
      <button
        onClick={handleClick}
        type='button'
        className='inline-flex items-center gap-2 rounded-xl bg-lime-700 px-2.5 py-1 text-md font-semibold shadow-lg hover:bg-lime-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-600'>
        <LanguageIcon className='-ml-0.5 h-5 w-5' aria-hidden='true' />
        en/de
      </button>
    </header>
  );
};

export default Header;
