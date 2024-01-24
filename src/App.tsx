import { Routes, Route } from 'react-router-dom';
import Home from './pages/home.tsx';
import Expenses from './pages/expenses.tsx';
import NotFound from './pages/notFound.tsx';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='expenses' element={<Expenses />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
