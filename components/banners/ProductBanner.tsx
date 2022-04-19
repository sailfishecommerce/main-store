import Image from "next/image";

import useLiveHealthyProduct from "@/hooks/useLivehealthyProduct";
import Product from "@/components/cards/ProductCard";

export default function ProductBanner() {
  const [data, status] = useLiveHealthyProduct();
  const getThreeProducts = data?.slice(5, 8);
  return (
    <div className="container mx-auto justify-between px-4 md:px-0 flex flex-col md:flex-row items-start h-1/2">
      <div className="banner w-full md:w-4/5">
        <Image
          src="/skin-care-banner.webp"
          height={530}
          width={900}
          alt="skin care"
          layout="responsive"
        />
      </div>
      <div className="product-group w-full md:w-2/6 ml-0 md:ml-4">
        {status === "error"
          ? "unable to load products"
          : status === "loading"
          ? "loading"
          : data &&
            getThreeProducts.map((product: any, index: number) => (
              <Product
                key={index}
                color="#24BFCE"
                className="items-center h-1/4 justify-between"
                product={product}
                row
                smallerImage
              />
            ))}
      </div>
    </div>
  );
}
