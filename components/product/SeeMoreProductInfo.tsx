interface Props{
    title:string;
}

export default function SeeMoreProductInfo({title}:Props) {
  return (
    <div className="flex justify-start my-2">
        <h3 className="text-xl font-bold">{title}</h3>
        <span className='mountain-mist ml-2 text-sm'>See more</span>
    </div>
  )
}
