import { Routes, Route } from 'react-router-dom';
import Home from './pages/home.tsx';
import Expenses from './pages/expenses.tsx';
import NotFound from './pages/notFound.tsx';
// import english from './languages/english.json';
import { english } from './languages/english.ts';
import { german } from './languages/german.ts';
import TextsContext from './contexts/textsContext.ts';
import { useState } from 'react';

function App() {
  const [texts, setTexts] = useState(english);

  const handleClick = () => {
    setTexts(texts.id === 'en' ? german : english);
  };

  // console.log('render app');

  return (
    <TextsContext.Provider value={{ texts, handleClick }}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='expenses' element={<Expenses />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </TextsContext.Provider>
  );
}

export default App;
