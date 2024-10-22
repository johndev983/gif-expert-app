'use client';

import { ChangeEvent, FormEvent, useState } from 'react';

interface Props {
  onNewCategory: ( newCategory: string ) => void;
}

export const AddCategory = ({ onNewCategory }: Props) => {
  const [ inputValue, setInputValue ] = useState('');

  const onInputChange = ( event: ChangeEvent<HTMLInputElement> ) => {
    setInputValue( event.currentTarget.value );
  }

  const onSubmit = ( event: FormEvent<HTMLFormElement> ) => {
    event.preventDefault();
    if ( inputValue.trim().length < 1 ) return;

    onNewCategory( inputValue.trim() );
    setInputValue('');
  }

  return (
    <form onSubmit={ onSubmit }>
      <input type="text" placeholder="Buscar gifs" value={ inputValue } onChange={ onInputChange } />
    </form>
  )
}