import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <main className='flex flex-col justify-center items-center gap-4'>
      {children}
    </main>
  );
};

export default MainLayout;
