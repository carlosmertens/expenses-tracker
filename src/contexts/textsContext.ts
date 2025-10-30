import { createContext } from 'react';
import { TextsType } from '../interfaces';

interface TextsContextType {
  texts: TextsType;
  handleClick: (id: string) => void;
}

const TextsContext = createContext<TextsContextType>({} as TextsContextType);

export default TextsContext;
