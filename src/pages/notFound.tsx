import { useContext } from 'react';
import AppLayout from '../layout/AppLayout';
import TextsContext from '../contexts/textsContext';

const NotFound = () => {
  const texts = useContext(TextsContext);
  return (
    <AppLayout>
      <main className='h-screen flex flex-col justify-center items-center'>
        <h2 className='text-3xl'>{texts.NotFound.h2}</h2>
      </main>
    </AppLayout>
  );
};

export default NotFound;
