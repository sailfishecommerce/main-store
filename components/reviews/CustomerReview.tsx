import Ratings from "@/components/reviews/Ratings";

interface Props {
  reviews: number;
  ratings: number;
}
export default function CustomerReview({ reviews, ratings }: Props) {
  const reviewText = reviews > 1 ? "reviews" : "review";
  return (
    <div className="customer-review flex items-center my-2">
      <Ratings ratings={ratings} />
      <p className="ml-2 mountain-mist">
        {reviews} customer&#39;s {reviewText}
      </p>
    </div>
  );
}
