import { ArrowRightCircleIcon } from '@heroicons/react/20/solid';
import AppLayout from '../layout/AppLayout';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <AppLayout>
      <main className='h-full flex flex-col justify-center items-center  gap-8 text-center px-4'>
        <h1 className='text-5xl'>
          <span className='text-6xl'>Supermarket</span> Expenses Tracker
        </h1>
        <p className='text-lg'>
          Tired of the mystery behind your grocery bills? We are here to
          revolutionize the way you manage your supermarket spending.
        </p>

        <NavLink
          to='expenses'
          className='mt-20 inline-flex items-center gap-x-1.5 rounded-md bg-lime-700 px-2.5 py-1.5 text-md font-semibold text-slate-200 shadow-sm hover:bg-lime-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-600'>
          <ArrowRightCircleIcon
            className='-ml-0.5 h-5 w-5'
            aria-hidden='true'
          />
          Start Tracking
        </NavLink>
      </main>
    </AppLayout>
  );
};

export default Home;
