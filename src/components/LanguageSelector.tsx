('use client');

import { useState, useContext } from 'react';
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/react';
import { ChevronUpDownIcon } from '@heroicons/react/16/solid';
import { CheckIcon } from '@heroicons/react/20/solid';
import TextsContext from '../contexts/textsContext';

const languages = [
  { id: 'en', name: 'English' },
  { id: 'es', name: 'Spanish' },
  { id: 'de', name: 'German' },
];

const LanguageSelector = () => {
  const { handleClick } = useContext(TextsContext);
  const [selected, setSelected] = useState(languages[0]);

  interface IValues {
    id: string;
    name: string;
  }

  const handleSelect = (value: IValues) => {
    setSelected(value);
    handleClick(value.id);
  };

  return (
    <Listbox value={selected} onChange={handleSelect}>
      <div className='relative mt-2'>
        <ListboxButton className='grid w-full cursor-default grid-cols-1 rounded-md bg-lime-700 py-1.5 pl-3 pr-2 text-left focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-lime-600 sm:text-sm/6'>
          <span className='col-start-1 row-start-1 truncate pr-6'>
            {selected.name}
          </span>
          <ChevronUpDownIcon
            aria-hidden='true'
            className='col-start-1 row-start-1 size-5 self-center justify-self-end sm:size-4'
          />
        </ListboxButton>

        <ListboxOptions
          transition
          className='absolute z-10 mt-1 max-h-60 w-auto overflow-auto rounded-md bg-white py-1 text-base shadow-lg outline outline-1 outline-black/5 data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm'
        >
          {languages.map((language) => (
            <ListboxOption
              key={language.id}
              value={language}
              className='group relative cursor-default select-none py-2 pl-8 pr-4 text-lime-900 data-[focus]:bg-lime-600 data-[focus]:text-white data-[focus]:outline-none'
            >
              <span className='block truncate font-normal group-data-[selected]:font-semibold'>
                {language.name}
              </span>

              <span className='absolute inset-y-0 left-0 flex items-center pl-1.5 text-lime-600 group-[:not([data-selected])]:hidden group-data-[focus]:text-white'>
                <CheckIcon aria-hidden='true' className='size-5' />
              </span>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
  );
};

export default LanguageSelector;
