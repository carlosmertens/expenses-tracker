import { HomeIcon } from '@heroicons/react/20/solid';
import { NavLink } from 'react-router-dom';
import texts from '../languages/english.json';

const Header = () => {
  return (
    <header className='fixed top-0 left-0 w-full py-2 bg-green-900 flex justify-between items-center px-4'>
      <NavLink to='/'>
        <HomeIcon className='-ml-0.5 h-8 w-8' aria-hidden='true' />
      </NavLink>
      <p className=''>{texts.Header.p}</p>
    </header>
  );
};

export default Header;
