import { Routes, Route } from 'react-router-dom';
import Home from './pages/home.tsx';
import Expenses from './pages/expenses.tsx';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='expenses' element={<Expenses />} />
    </Routes>
  );
}

export default App;
