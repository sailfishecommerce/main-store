import Image from "next/image";
import Link from "next/link";

import type { ProductProps } from "@/types";

interface ProductTypes extends ProductProps {
  className?: string;
  smallerImage?: boolean;
  imageClassName?: string;
}

export default function RecommendedProductCard({
  product,
  className,
  smallerImage,
  imageClassName,
}: ProductTypes) {
  const productClassName = className ? className : "";
  const productImageClassName = imageClassName ? imageClassName : "";
  const imageSize = smallerImage
    ? {
        height: 100,
        width: 100,
      }
    : {
        height: 150,
        width: 150,
      };
  return (
    <Link href={`/products/${product.slug}`} passHref>
      <a
        className={`hov hover:shadow-lg w-5/6 flex bg-gray-100 rounded-md flex-col hover:rounded-lg product ${productClassName}  p-4 hover:border`}
        title={product.name}
      >
        <div className={`${productImageClassName} mx-auto image-wrapper`}>
          <Image
            src={product.images[0].file.url}
            alt={product.name}
            height={imageSize.height}
            width={imageSize.width}
            className="rounded-xl"
            blurDataURL={product.images[0].file.url}
          />
        </div>
        <div className="text">
          <div className="product-name-view my-2">
            <h3 className="text-xs text-overflow">{product.name}</h3>
          </div>
          <div className="price-view my-2 flex items-center justify-between">
            <h4 className="font-bold ">${product.price}</h4>
            <button
              type="button"
              className="add-to-cart w-1/4 justify-center text-white px-2 py-1 flex items-center rounded-md"
            >
              <Image
                src="/cart-white-icon.png"
                alt="cart"
                height={20}
                width={20}
              />
            </button>
          </div>
        </div>
        <style jsx>
          {`
            .add-to-cart {
              background-color: var(--mountain-green);
            }
            .add-to-cart:hover {
              background-color: var(--mountain-mist);
            }
            
          `}
        </style>
      </a>
    </Link>
  );
}
