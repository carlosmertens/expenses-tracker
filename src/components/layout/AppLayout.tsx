import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const AppLayout = ({ children }: Props) => {
  return (
    <div className='h-screen bg-slate-700 text-white flex flex-col justify-center items-center gap-4'>
      {children}
    </div>
  );
};

export default AppLayout;
