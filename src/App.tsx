import { useState } from 'react';
import ExpenseList from './components/ExpenseList';
import ExpenseFilter from './components/ExpenseFilter';
import Header from './components/Header';
import AppLayout from './layout/AppLayout.tsx';
import MainLayout from './layout/MainLayout.tsx';
import ExpenseForm from './components/ExpenseForm.tsx';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [expenses, setExpenses] = useState([
    { id: 1, description: 'aaa', amount: 10, category: 'Utilities' },
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

  return (
    <AppLayout>
      <Header />
      <MainLayout>
        <ExpenseForm
          onSubmit={(data) =>
            setExpenses([...expenses, { ...data, id: expenses.length + 1 }])
          }
        />
        <ExpenseFilter onSelectCategory={handleSelect} />
        <ExpenseList expenses={showExpenses} onDelete={handleDelete} />
      </MainLayout>
    </AppLayout>
  );
}

export default App;
