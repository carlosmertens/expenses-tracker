import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const AppLayout = ({ children }: Props) => {
  return (
    <div className='h-screen bg-gradient-to-r from-sky-800 to-indigo-800'>
      {children}
    </div>
  );
};

export default AppLayout;
