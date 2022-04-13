import Image from 'next/image'
import React from 'react'
import Ratings from '@/components/reviews/Ratings'
import { ProductType } from '@/types'

interface Props{
  product:ProductType
  review:{
    time:string;
    username:string;
    ratings:number;
    review:string;
  }
}

export default function UserChoiceCard({product, review}:Props) {
  return (
    <div className='border border-gray-200 rounded-md'>
        <Image 
         src={product.images[0].file.url}
          alt={product.name}
          height={500}
          width={500}
          blurDataURL={product.images[0].file.url}
          />
          <hr className='border-b border-gray-200' />
          <div className="user-review flex flex-col items-center">
            <h4 className='font-bold text-xl'>{review.username}</h4>
            <Ratings ratings={review.ratings} />
            <p className='text-lg text-center'>{review.review}</p>
            <p className='text-sm text-gray-200'>{review.time}</p>
          </div>
    </div>
  )
}
