import Image from 'next/image';

interface Props {
  height: number;
  title:  string;
  url:    string;
  width:  number;
}

export const GifItem = ({ height, title, url, width }: Props) => {
  return (
    <div className="card">
      <Image
        height={ height }
        src={ url }
        alt={ title }
        width={ width }
      />

      <p>{ title }</p>
    </div>
  )
}