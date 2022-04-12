import Stars from "@/components/icons/Stars";

interface Props {
  reviews: number;
  ratings: number;
}
export default function CustomerReview({ reviews, ratings }: Props) {
  const unfilledStars = 5 - Number(ratings);
  const filledStarsArray = new Array(ratings);
  const unfilledStarsArray = new Array(unfilledStars);
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
        {reviews} customer's {reviewText}
      </p>
    </div>
  );
}
