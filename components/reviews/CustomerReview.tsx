import Stars from "@/components/icons/Stars";

interface Props {
  reviews: number;
  ratings: number;
}
export default function CustomerReview({ reviews, ratings }: Props) {
  console.log("ratings", ratings);
  const unfilledStars = 5 - Number(ratings);
  const filledStarsArray = new Array(ratings).fill(0);
  const unfilledStarsArray = new Array(unfilledStars).fill(0);
  const reviewText = reviews > 1 ? 'reviews' : 'review'
  return (
    <div className="customer-review flex items-center">
      <div className="star-group flex items-center">
        {filledStarsArray.map((_, index) => (
          <Stars key={index} fill="#FF6B00" />
        ))}
        {unfilledStarsArray.map((_, index) => (
          <Stars key={index} fill="none" />
        ))}
      </div>
      <p className="mountain-mist">
        {reviews} customer&#39;s {reviewText}
      </p>
    </div>
  );
}
