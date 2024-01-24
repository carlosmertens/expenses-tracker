import { categories } from '../data';
import texts from '../languages/english.json';

interface Props {
  onSelectCategory: (category: string) => void;
}

const ExpenseFilter = ({ onSelectCategory }: Props) => {
  return (
    <div>
      <label
        htmlFor='filter'
        className='block text-sm font-medium leading-6 text-gray-300'>
        {texts.ExpenseFilter.label}
      </label>
      <select
        id='filter'
        className='block w-48 rounded-md border-0 py-1.5 px-2 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6'
        onChange={(event) => onSelectCategory(event.target.value)}>
        <option value=''>{texts.ExpenseFilter.option}</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ExpenseFilter;
