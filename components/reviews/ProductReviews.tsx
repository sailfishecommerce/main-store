import Script from "next/script";
import { memo } from "react";

function ProductReviewsComponent() {
  return (
    <div className="container mx-auto justify-center items-center my-lg-3 py-5">
      <Script
        src="https://en.trustmate.io/api/widget/95d50730-e6a5-4465-b950-3fab710cf306/script?product=/products/"
        strategy="lazyOnload"
        id="products-widget-script-1"
      />
      <Script
        src="https://en.trustmate.io/api/widget/5c6b265a-9520-4676-9d01-2ecfca53d95c/script"
        strategy="lazyOnload"
        id="trustmate-widget-script-2"
      />
      <div className="flex items-center">
        <div id="95d50730-e6a5-4465-b950-3fab710cf306"></div>
        <div id="5c6b265a-9520-4676-9d01-2ecfca53d95c"></div>
      </div>
    </div>
  );
}
const ProductReviews = memo(ProductReviewsComponent);
export default ProductReviews;
