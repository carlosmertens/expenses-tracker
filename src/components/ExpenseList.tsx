import { useState } from 'react';
import { TrashIcon } from '@heroicons/react/20/solid';
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

  if (expenses.length === 0) return <p>{texts.ExpenseList.starting}</p>;

  return (
    <div className='mb-10 flex flex-col items-center gap-4 '>
      <ExpenseFilter
        onSelectCategory={(category) => setSelectedCategory(category)}
      />
      <table className='border-2 shadow-md shadow-white'>
        <thead className=''>
          <tr className=''>
            <th className='border-2 p-2'>{texts.ExpenseList.th.items}</th>
            <th className='border-2 p-2'>{texts.ExpenseList.th.costs}</th>
            <th className='border-2 p-2'>{texts.ExpenseList.th.categories}</th>
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
                  className='py-1 px-2 text-lime-600 hover:text-lime-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-600 focus-visible:rounded-md'
                  onClick={() => onDelete(expense.id)}>
                  <TrashIcon className='-ml-0.5 h-6 w-6' aria-hidden='true' />
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
