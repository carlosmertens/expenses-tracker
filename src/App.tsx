import './App.css';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { useState } from 'react';
import ExpenseList from './components/ExpenseList';

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: 'aaa', amount: 10, category: 'Utilities' },
    { id: 2, description: 'bbb', amount: 10, category: 'Household' },
    { id: 3, description: 'ccc', amount: 10, category: 'Groceries' },
    { id: 4, description: 'ddd', amount: 10, category: 'Utilities' },
  ]);

  const handleDelete = (id: number) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  return (
    <div className='h-screen bg-slate-700 text-white flex flex-col justify-center items-center gap-4'>
      <div className='flex gap-x-6'>
        <a href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} className='h-28' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='h-28' alt='React logo' />
        </a>
      </div>
      <h1 className='text-5xl mt-8'>Expenses Tracker</h1>
      <div className='container'>
        <ExpenseList expenses={expenses} onDelete={handleDelete} />
      </div>
    </div>
  );
}

export default App;
