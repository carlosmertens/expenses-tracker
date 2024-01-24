import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CheckCircleIcon } from '@heroicons/react/20/solid';
import { categories } from '../data';
import texts from '../languages/english.json';

// Create a schema-base validation with zod
const schema = z.object({
  description: z.string().min(1, { message: 'Requires!' }).max(25),
  amount: z
    .number({ invalid_type_error: 'Requires!' })
    .positive()
    .min(0.1, { message: 'Requires!' })
    .max(1_000),
  category: z.enum(categories, {
    errorMap: () => ({ message: 'Requires!' }),
  }),
});

//
type ExpenseData = z.infer<typeof schema>;

interface Props {
  onSubmit: (data: ExpenseData) => void;
}

const ExpenseForm = ({ onSubmit }: Props) => {
  // Create react-hook-form state manager
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ExpenseData>({ resolver: zodResolver(schema) });

  return (
    <form
      onSubmit={handleSubmit((data) => {
        onSubmit(data);
        reset();
      })}
      className='flex flex-col justify-center items-center gap-4'>
      <div>
        <label htmlFor='item' className='block text-sm font-medium leading-6'>
          {texts.ExpenseForm.labels.item}
        </label>
        <input
          {...register('description')}
          type='text'
          id='item'
          className='w-48 rounded-md border-0 py-1.5 px-2 text-slate-900 shadow-sm ring-1 ring-inset ring-lime-300 focus:ring-2 focus:ring-inset focus:ring-lime-600 sm:text-sm sm:leading-6'
        />
        {errors.description && <p>{errors.description.message}</p>}
      </div>

      <div>
        <label htmlFor='amount' className='block text-sm font-medium leading-6'>
          {texts.ExpenseForm.labels.cost}
        </label>
        <input
          {...register('amount', { valueAsNumber: true })}
          type='number'
          id='amount'
          className='w-48 rounded-md border-0 py-1.5 px-2 text-slate-900 shadow-sm ring-1 ring-inset ring-lime-300 focus:ring-2 focus:ring-inset focus:ring-lime-600 sm:text-sm sm:leading-6'
        />
        {errors.amount && <p>{errors.amount.message}</p>}
      </div>

      <div>
        <label
          htmlFor='category'
          className='block text-sm font-medium leading-6'>
          {texts.ExpenseForm.labels.category}
        </label>
        <select
          {...register('category')}
          id='category'
          className='w-48 rounded-md border-0 py-1.5 px-2 text-slate-900 shadow-sm ring-1 ring-inset ring-lime-300 focus:ring-2 focus:ring-inset focus:ring-lime-600 sm:text-sm sm:leading-6'>
          <option value=''>{texts.ExpenseForm.option}</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        {errors.category && <p>{errors.category.message}</p>}
      </div>

      <button
        type='submit'
        className='mt-2 inline-flex items-center gap-2 rounded-xl bg-lime-700 px-2.5 py-1.5 text-md font-semibold shadow-lg hover:bg-lime-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-600'>
        <CheckCircleIcon className='-ml-0.5 h-5 w-5' aria-hidden='true' />
        {texts.ExpenseForm.button}
      </button>
    </form>
  );
};

export default ExpenseForm;
