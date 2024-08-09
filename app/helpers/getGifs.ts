import { GifResponse } from '../interfaces/gif.interface';

export const getGifs = async( category: string ) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=BbN4ATx2qrZzyxCcU60PEh12VNtcQqoe&q=${ category }&limit=10`;
  const response = await fetch( url );
  const { data }: GifResponse = await response.json();

  return data.map( img => ({
    height: +img.images.original.height,
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
    width: +img.images.original.width
  }));
}