import { useState } from 'react';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseList from '../components/ExpenseList';

export interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}

const Expenses = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  return (
    <>
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
    </>
  );
};

export default Expenses;
