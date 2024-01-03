import './App.css';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import ExpenseList from './components/ExpenseList';
import { useState } from 'react';

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
    <>
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Expenses Tracker</h1>
      <div className='container'>
        <ExpenseList expenses={expenses} onDelete={handleDelete} />
      </div>
    </>
  );
}

export default App;
