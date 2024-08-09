import { useCallback, useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';
import { Gif } from '../interfaces/gif.interface';

export const useFetchGifs = ( category: string ) => {
  const [ images, setImages ] = useState<Gif[]>([]);
  const [ isLoading, setIsLoading ] = useState( true );

  const getImages = useCallback( async() => {
      const newImages = await getGifs( category );
      setImages( newImages );
      setIsLoading( false );
    }, [ category ]
  );
  
  useEffect(() => {
    getImages();
  }, [ getImages ])
  
  return {
    images,
    isLoading
  }
}