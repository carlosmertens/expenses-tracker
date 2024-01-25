import { ReactNode } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface Props {
  children: ReactNode;
}

const AppLayout = ({ children }: Props) => {
  return (
    <div className='min-h-screen bg-gradient-to-r from-green-800 to-cyan-800 text-slate-200 font-serif text-xs md:text-lg'>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default AppLayout;
