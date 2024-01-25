import { Routes, Route } from 'react-router-dom';
import Home from './pages/home.tsx';
import Expenses from './pages/expenses.tsx';
import NotFound from './pages/notFound.tsx';
import english from './languages/english.json';
// import { english } from './languages/english.ts';
import TextsContext from './contexts/textsContext.ts';

function App() {
  return (
    <TextsContext.Provider value={english}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='expenses' element={<Expenses />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </TextsContext.Provider>
  );
}

export default App;
