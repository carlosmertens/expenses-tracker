import { useState } from 'react';
import { Expense } from '../pages/expenses';
import ExpenseFilter from './ExpenseFilter';
import texts from '../languages/english.json';

interface Props {
  expenses: Expense[];
  onDelete: (id: number) => void;
}
const ExpenseList = ({ expenses, onDelete }: Props) => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const displayExpenses = selectedCategory
    ? expenses.filter((expense) => expense.category === selectedCategory)
    : expenses;

  if (expenses.length === 0)
    return <p className='text-gray-400'>Start adding your expenses...</p>;

  return (
    <div className='mb-10 flex flex-col items-center gap-4 '>
      <ExpenseFilter
        onSelectCategory={(category) => setSelectedCategory(category)}
      />
      <table className='border-2 shadow-lg shadow-white'>
        <thead className=''>
          <tr className=''>
            <th className='border-2 p-2.5'>{texts.ExpenseList.th.items}</th>
            <th className='border-2 p-2.5'>{texts.ExpenseList.th.costs}</th>
            <th className='border-2 p-2.5'>
              {texts.ExpenseList.th.categories}
            </th>
            <th className='border-2 p-2.5'></th>
          </tr>
        </thead>
        <tbody>
          {displayExpenses.map((expense) => (
            <tr key={expense.id} className='text-center'>
              <td className='border-2 p-2.5 '>{expense.description}</td>
              <td className='border-2 p-2.5'>{expense.amount}</td>
              <td className='border-2 p-2.5'>{expense.category}</td>
              <td className='border-2 p-2.5'>
                <button
                  className='py-1 px-2 border-2 border-red-400 text-red-400 rounded-lg hover:border-2 hover:bg-red-400 hover:text-slate-900'
                  onClick={() => onDelete(expense.id)}>
                  X
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className='text-center font-bold'>
            <td className='border-2 p-2.5'>{texts.ExpenseList.td}</td>
            <td className='border-2 p-2.5'>
              € {expenses.reduce((acc, expense) => expense.amount + acc, 0)}
            </td>
            <td></td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default ExpenseList;
