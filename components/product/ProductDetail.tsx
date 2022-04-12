import CustomerReview from "@/components/reviews/CustomerReview";
import PaymentMethodView from "@/components/payment/PaymentMethodView";
import ProductPriceView from "@/components/product/ProductPriceView";
import SeeMoreProductInfo from "@/components/product/SeeMoreProductInfo";

export default function ProductDetail({ product }: any) {
  return (
    <div>
      <h3>{product.name}</h3>
      <p>
        By <span className="text-green-500">{product.vendor}</span>
      </p>
      <CustomerReview reviews={product?.review_rating} ratings={product?.rating} />
      <ProductPriceView product={product} />
      <SeeMoreProductInfo title="Product Information" />
      <SeeMoreProductInfo title="Ingredients" />
      <SeeMoreProductInfo title="Directions" />
      <hr />
      <PaymentMethodView />
    </div>
  );
}
