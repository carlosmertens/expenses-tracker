import { useState } from 'react';
import ExpenseList from './components/ExpenseList';
import Header from './components/Header';
import AppLayout from './layout/AppLayout.tsx';
import MainLayout from './layout/MainLayout.tsx';
import ExpenseForm from './components/ExpenseForm.tsx';

export interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}

function App() {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  return (
    <AppLayout>
      <Header />
      <MainLayout>
        <ExpenseForm
          onSubmit={(data) =>
            setExpenses([...expenses, { ...data, id: expenses.length + 1 }])
          }
        />

        <ExpenseList
          expenses={expenses}
          onDelete={(id) =>
            setExpenses(expenses.filter((expense) => expense.id !== id))
          }
        />
      </MainLayout>
    </AppLayout>
  );
}

export default App;
