import { useState } from 'react';
import AppLayout from '../layout/AppLayout';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseList from '../components/ExpenseList';
import { ExpenseType } from '../interfaces';

const Expenses = () => {
  const [expenses, setExpenses] = useState<ExpenseType[]>([]);

  return (
    <AppLayout>
      <main className='flex flex-col items-center py-16'>
        <div className='mb-10'>
          <ExpenseForm
            onSubmit={(data) =>
              setExpenses([...expenses, { ...data, id: expenses.length + 1 }])
            }
          />
        </div>

        <div>
          <ExpenseList
            expenses={expenses}
            onDelete={(id) =>
              setExpenses(expenses.filter((expense) => expense.id !== id))
            }
          />
        </div>
      </main>
    </AppLayout>
  );
};

export default Expenses;
