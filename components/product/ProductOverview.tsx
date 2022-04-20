import { ProductProps } from "@/types";
import ProductDetail from "@/components/product/ProductDetail";
import ProductMagnifier from "@/components/product/ProductMagnifier";
import ProductReview from "@/components/product/ProductReview";
import Breadcrumb from "@/components/bread-crumb/Breadcrumb";
import ProductSlider from "@/components/slider/ProductSlider";
import breadcrumb from "@/json/breadcrumb.json";
import ProductOffers from "@/components/product/ProductOffers";

type breadcrumbType = Array<{
  name: string;
  link: string | null;
  active?: boolean;
}>;

export default function ProductOverview({ product }: ProductProps) {
  const breadcrumbItems: breadcrumbType = breadcrumb.product;
  breadcrumbItems[2] = {
    name: product.name,
    link: null,
    active: true,
  };

  return (
    <div className="flex flex-col items-start">
      <Breadcrumb breadcrumbItems={breadcrumbItems} />
      <div className="flex flex-col px-4 md:px-0 lg:flex-row md:justify-start">
        <ProductMagnifier product={product} />
        <ProductDetail product={product} />
        <ProductOffers className="md:hidden" />
      </div>
      <ProductReview />
      <div className="mt-6" />
      <ProductSlider
        title="Customers also purchased"
        productClassName="border border-gray-200 mr-6 rounded-lg"
        randomColor
      />
      <ProductSlider
        title="Popular with"
        productName={product.name}
        productClassName="border border-gray-200 mr-6 rounded-lg"
        randomColor={true}
      />
    </div>
  );
}
