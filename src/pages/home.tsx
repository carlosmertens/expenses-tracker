import { ArrowRightCircleIcon } from '@heroicons/react/20/solid';
import AppLayout from '../layout/AppLayout';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import TextsContext from '../contexts/textsContext';

const Home = () => {
  const { texts } = useContext(TextsContext);

  return (
    <AppLayout>
      <main className='h-screen flex flex-col justify-center items-center  gap-8 text-center px-4'>
        <h1 className='text-2xl md:text-5xl'>
          <span className='block text-4xl md:text-6xl font-bold tracking-widest'>
            {texts.Home.h1.span}
          </span>
          {texts.Home.h1.content}
        </h1>
        <p className='text-base'>
          <span className='block italic'>{texts.Home.p.span}</span>
          {texts.Home.p.content}
        </p>

        <NavLink
          to='expenses'
          className='mt-20 inline-flex items-center gap-2 rounded-xl bg-lime-700 px-2.5 py-1.5 text-md font-semibold shadow-lg hover:bg-lime-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-600'>
          <ArrowRightCircleIcon
            className='-ml-0.5 h-5 w-5'
            aria-hidden='true'
          />
          {texts.Home.NavLink}
        </NavLink>
      </main>
    </AppLayout>
  );
};

export default Home;
