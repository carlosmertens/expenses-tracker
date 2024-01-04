import reactLogo from '../assets/react.svg';
import viteLogo from '/vite.svg';

const Header = () => {
  return (
    <header className='flex flex-col justify-center items-center'>
      <div className='flex gap-x-6'>
        <a href='https://vitejs.dev' target='_blank'>
          <img
            src={viteLogo}
            className='h-28 hover:drop-shadow-2xl'
            alt='Vite logo'
          />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='h-28' alt='React logo' />
        </a>
      </div>
      <h1 className='text-5xl mt-12 mb-4'>Expenses Tracker</h1>
    </header>
  );
};

export default Header;
