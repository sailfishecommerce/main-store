import { ProductProps } from "@/types";
import ProductDetail from "@/components/product/ProductDetail";
import ProductMagnifier from "@/components/product/ProductMagnifier";
import ProductReview from "@/components/product/ProductReview";
import ProductBreadcrumb from "@/components/bread-crumb/ProductBreadcrumb";
import ProductSlider from "@/components/slider/ProductSlider";

export default function ProductOverview({ product }: ProductProps) {
  console.log("product", product);
  return (
    <div className="flex flex-col items-start">
      <ProductBreadcrumb breadcrumbItem={product.name} link={product.slug} />
      <div className="flex justify-start">
        <ProductMagnifier product={product} />
        <ProductDetail product={product} />
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
