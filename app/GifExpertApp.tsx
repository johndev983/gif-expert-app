'use client';

import { useState } from 'react';
import { AddCategory, GifGrid } from '@/components'

export const GifExpert = () => {
  const [ categories, setCategories ] = useState<string[]>([ 'One Punch' ]);

  const onAddCategory = ( newCategory: string ) => {
    if ( categories.includes( newCategory ) ) return;

    setCategories([ newCategory, ...categories ]);
  }

  return (
    <>
      <AddCategory onNewCategory={ onAddCategory } />

      <ol>
        {
          categories.map( category => (
            <GifGrid key={ category } category={ category } />
          ))
        }
      </ol>
    </>
  )
}