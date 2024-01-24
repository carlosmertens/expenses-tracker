import { ArrowRightCircleIcon } from '@heroicons/react/20/solid';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className='h-screen flex flex-col justify-center items-center gap-20 bg-gradient-to-r from-green-800 to-cyan-800 text-slate-300'>
      <Header />

      <main className='flex flex-col gap-8 items-center text-center px-4'>
        <h1 className='text-5xl'>Supermarket Expenses Tracker</h1>
        <p>
          Tired of the mystery behind your grocery bills? We are here to
          revolutionize the way you manage your supermarket spending.
        </p>

        <button className='mt-32 inline-flex items-center gap-x-1.5 rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
          <ArrowRightCircleIcon
            className='-ml-0.5 h-5 w-5'
            aria-hidden='true'
          />
          Start Tracking
        </button>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
