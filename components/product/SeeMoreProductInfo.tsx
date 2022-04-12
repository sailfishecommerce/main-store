interface Props{
    title:string;
}

export default function SeeMoreProductInfo({title}:Props) {
  return (
    <div className="flex justify-start">
        <h3 className="text-xl">{title}</h3>
        <span className='mountain-mist'>See more</span>
    </div>
  )
}
