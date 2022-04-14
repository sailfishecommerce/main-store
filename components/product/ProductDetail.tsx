import CustomerReview from "@/components/reviews/CustomerReview";
import PaymentMethodView from "@/components/payment/PaymentMethodView";
import ProductPriceView from "@/components/product/ProductPriceView";
import SeeMoreProductInfo from "@/components/product/SeeMoreProductInfo";
import { useAppDispatch } from "@/hooks/useRedux";
import { updateActiveProduct } from "@/redux/product-slice";
import useSlidingTab from "@/hooks/useSlidingTab";

export default function ProductDetail({ product }: any) {
  const dispatch = useAppDispatch();
  const { updateSlideTab } = useSlidingTab();

  function seeMoreProductsHandler() {
    updateSlideTab("SLIDING-INFO");
    dispatch(updateActiveProduct(product));
  }
  return (
    <div className="w-1/2 flex flex-col justify-start">
      <h3 className="text-2xl font-bold">{product.name}</h3>
      <p>
        By <span className="text-green-500">{product.vendor}</span>
      </p>
      <CustomerReview
        reviews={product?.review_rating}
        ratings={product?.rating}
      />
      <ProductPriceView product={product} />
      <SeeMoreProductInfo
        title="Product Information"
        onClick={seeMoreProductsHandler}
      />
      <SeeMoreProductInfo
        title="Ingredients"
        onClick={seeMoreProductsHandler}
      />
      <SeeMoreProductInfo title="Directions" onClick={seeMoreProductsHandler} />
      <hr className="my-4 border border-gray-100" />
      <PaymentMethodView />
    </div>
  );
}
