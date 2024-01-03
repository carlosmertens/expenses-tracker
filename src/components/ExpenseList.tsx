interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}

interface Props {
  expenses: Expense[];
  onDelete: (id: number) => void;
}
const ExpenseList = ({ expenses, onDelete }: Props) => {
  if (expenses.length === 0) return null;

  return (
    <table className='border-2 mx-auto'>
      <thead className=''>
        <tr className=''>
          <th className='border-2 p-2.5'>Description</th>
          <th className='border-2 p-2.5'>Amount</th>
          <th className='border-2 p-2.5'>Category</th>
          <th className='border-2 p-2.5'></th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <tr key={expense.id} className='text-center'>
            <td className='border-2 p-2.5 '>{expense.description}</td>
            <td className='border-2 p-2.5'>{expense.amount}</td>
            <td className='border-2 p-2.5'>{expense.category}</td>
            <td className='border-2 p-2.5'>
              <button
                className='bg-purple-700 py-1 px-2 border-2 border-transparent rounded-lg hover:border-2 hover:border-orange-600'
                onClick={() => onDelete(expense.id)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr className='text-center font-bold'>
          <td className='border-2 p-2.5'>Total</td>
          <td className='border-2 p-2.5'>
            $
            {expenses
              .reduce((acc, expense) => expense.amount + acc, 0)
              .toFixed(2)}
          </td>
          <td></td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  );
};

export default ExpenseList;
