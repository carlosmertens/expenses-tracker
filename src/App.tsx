import { useState } from 'react';
import ExpenseList from './components/ExpenseList';
import ExpenseFilter from './components/ExpenseFilter';
import Header from './components/Header';
import AppLayout from './components/layout/AppLayout';
import Main from './components/layout/Main';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [expenses, setExpenses] = useState([
    { id: 1, description: 'aaa', amount: 10, category: 'Utilities' },
    { id: 2, description: 'bbb', amount: 10, category: 'Household' },
    { id: 3, description: 'ccc', amount: 10, category: 'Groceries' },
    { id: 4, description: 'ddd', amount: 10, category: 'Utilities' },
  ]);

  const showExpenses = selectedCategory
    ? expenses.filter((expense) => expense.category === selectedCategory)
    : expenses;

  const handleDelete = (id: number) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const handleSelect = (category: string) => {
    setSelectedCategory(category);
  };
  console.log(selectedCategory);

  return (
    <AppLayout>
      <Header />
      <Main>
        <ExpenseFilter onSelectCategory={handleSelect} />
        <ExpenseList expenses={showExpenses} onDelete={handleDelete} />
      </Main>
    </AppLayout>
  );
}

export default App;
