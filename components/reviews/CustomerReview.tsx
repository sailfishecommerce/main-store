import Image from 'next/image'
import Stars from '@/components/icons/Stars';

interface Props {
  reviews: number;
  ratings: number;
}
export default function CustomerReview({ reviews, ratings }: Props) {
  const unfilledStars = 5 - Number(ratings);
  const filledStarsArray = new Array(ratings).fill(0);
  const unfilledStarsArray = new Array(unfilledStars).fill(0);
  const reviewText = reviews > 1 ? 'reviews' : 'review'
  return (
    <div className="customer-review flex items-center my-2">
      <div className="star-group flex items-center">
        {filledStarsArray.map((_, index) => (
          <Image src="/filled-star.png" key={index} className="mx-1" height={20} width={20} />
        ))}
        {unfilledStarsArray.map((_, index) => (
          <Stars key={index} fill="none" />
        ))}
      </div>
      <p className="ml-2 mountain-mist">
        {reviews} customer&#39;s {reviewText}
      </p>
    </div>
  );
}
