interface Props{
    title:string;
}

export default function SeeMoreProductInfo({title}:Props) {
  return (
    <div className="flex justify-start my-4">
        <h3 className="text-xl font-bold">{title}</h3>
        <span className='mountain-mist ml-2 text-xs font-medium'>See more</span>
    </div>
  )
}
