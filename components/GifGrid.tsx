
import { useFetchGifs } from '@/app/hooks/useFetchGifs'
import { GifItem } from './';

interface Props {
  category: string;
}

export const GifGrid = ({ category }: Props) => {
  const { images, isLoading } = useFetchGifs( category );

  return (
    <>
      <h1>{ category }</h1>
      { isLoading && ( <h3>Cargando...</h3> ) }

      <div className="card-grid">
        {
          images.map( image => (
            <GifItem key={ image.id } { ...image } />
          ))
        }
      </div>
    </>
  )
}