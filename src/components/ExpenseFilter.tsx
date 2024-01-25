import { useContext } from 'react';
import { categories } from '../data';
import TextsContext from '../contexts/textsContext';

interface Props {
  onSelectCategory: (category: string) => void;
}

const ExpenseFilter = ({ onSelectCategory }: Props) => {
  const { texts } = useContext(TextsContext);

  return (
    <div>
      <label htmlFor='filter' className='block text-sm font-medium leading-6'>
        {texts.ExpenseFilter.label}
      </label>
      <select
        id='filter'
        className='w-48 rounded-md border-0 py-1.5 px-2 text-slate-900 shadow-sm ring-1 ring-inset ring-lime-300 focus:ring-2 focus:ring-inset focus:ring-lime-600 sm:text-sm sm:leading-6'
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
