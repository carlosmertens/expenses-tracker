import { ArrowRightCircleIcon } from '@heroicons/react/20/solid';
import AppLayout from '../layout/AppLayout';
import { NavLink } from 'react-router-dom';
import texts from '../languages/english.json';

const Home = () => {
  return (
    <AppLayout>
      <main className='h-screen flex flex-col justify-center items-center  gap-8 text-center px-4'>
        <h1 className='text-4xl md:text-5xl'>
          <span className='block text-5xl md:text-6xl font-bold'>
            {texts.Home.h1.span}
          </span>
          {texts.Home.h1.content}
        </h1>
        <p className='text-lg'>
          <span className='block font-bold'>{texts.Home.p.span}</span>
          {texts.Home.p.content}
        </p>

        <NavLink
          to='expenses'
          className='mt-20 inline-flex items-center gap-x-1.5 rounded-md bg-lime-700 px-2.5 py-1.5 text-md font-semibold text-slate-200 shadow-sm hover:bg-lime-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-600'>
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
