import CustomerReview from '@/components/reviews/CustomerReview'

export default function ProductDetail({product}:any) {
  return (
    <div>
        <h3>{product.name}</h3>
        <p>By <span className='text-green-500'>{product.vendor}</span></p>
        <CustomerReview reviews={product.review} ratings={product.ratings} />
    </div>
  )
}
