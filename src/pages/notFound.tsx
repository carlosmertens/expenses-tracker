import AppLayout from '../layout/AppLayout';

const NotFound = () => {
  return (
    <AppLayout>
      <main className='h-full flex flex-col justify-center items-center'>
        <h2 className='text-2xl'>404 - Page Not Found</h2>
      </main>
    </AppLayout>
  );
};

export default NotFound;
