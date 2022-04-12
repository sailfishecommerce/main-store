import React from "react";
import ReviewBars from "@/components/reviews/ReviewBars";

export default function ProductReview() {
  const reviewsStat = [
    { count: 5, barWidth: 68 },
    { count: 4, barWidth: 15 },
    { count: 3, barWidth: 5 },
    { count: 2, barWidth: 2 },
    { count: 1, barWidth: 0 },
  ];
  return (
    <div>
      <h3>Reviews</h3>
      <div className="trustmate-reviews">
        <div className="trust-mate w-1/5"></div>
        <div className="review-bar w-4/5 flex flex-col">
          {reviewsStat.map((review) => (
            <ReviewBars
              key={review.count}
              count={review.count}
              barWidth={review.barWidth}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
