import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CheckCircleIcon } from '@heroicons/react/20/solid';
import { categories } from '../data';

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
        <label
          htmlFor='description'
          className='block text-sm font-medium leading-6 text-gray-300'>
          Description:
        </label>
        <input
          {...register('description')}
          type='text'
          id='description'
          className='block w-48 rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
        />
        {errors.description && <p>{errors.description.message}</p>}
      </div>

      <div>
        <label
          htmlFor='amount'
          className='block text-sm font-medium leading-6 text-gray-300'>
          Amount:
        </label>
        <input
          {...register('amount', { valueAsNumber: true })}
          type='number'
          id='amount'
          className='block w-48 rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
        />
        {errors.amount && <p>{errors.amount.message}</p>}
      </div>

      <div>
        <label
          htmlFor='category'
          className='block text-sm font-medium leading-6 text-gray-300'>
          Category:
        </label>
        <select
          {...register('category')}
          id='category'
          className='block w-48 rounded-md border-0 py-1.5 px-2 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6'>
          <option value=''>Choose Category</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        {errors.category && <p className=''>{errors.category.message}</p>}
      </div>

      <button
        type='submit'
        className='inline-flex items-center gap-x-1.5 rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
        <CheckCircleIcon className='-ml-0.5 h-5 w-5' aria-hidden='true' />
        Add item
      </button>
    </form>
  );
};

export default ExpenseForm;
