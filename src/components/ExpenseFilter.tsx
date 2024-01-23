import { categories } from '../data';

interface Props {
  onSelectCategory: (category: string) => void;
}

const ExpenseFilter = ({ onSelectCategory }: Props) => {
  return (
    <select
      className='block w-48 rounded-md border-0 py-1.5 px-2 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6'
      onChange={(event) => onSelectCategory(event.target.value)}>
      <option value=''>All Categories</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
      <option value='Groceries'>Groceries</option>
      <option value='Household'>Household</option>
      <option value='Utilities'>Utilities</option>
    </select>
  );
};

export default ExpenseFilter;
