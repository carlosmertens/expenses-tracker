import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const AppLayout = ({ children }: Props) => {
  return (
    <div className='h-screen bg-gradient-to-r from-green-800 to-cyan-800 text-slate-300'>
      {children}
    </div>
  );
};

export default AppLayout;
