import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Main = ({ children }: Props) => {
  return (
    <main className='flex flex-col justify-center items-center gap-4'>
      {children}
    </main>
  );
};

export default Main;
