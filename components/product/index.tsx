import Image from "next/image";
import Link from "next/link";

import type { ProductProps } from "@/types";

interface ProductTypes extends ProductProps {
  row?: string;
  color?: string;
}

export default function Product({ product, row, color }: ProductTypes) {
  const isRow = row ? "flex" : "flex flex-col";
  return (
    <Link href={`/products/${product.slug}`} passHref>
      <a
        className={`hover:bg-white hover:shadow-lg hover:rounded-lg product ${isRow} p-6 hover:border`}
        title={product.name}
      >
        <Image
          src={product.images[0].file.url}
          alt={product.name}
          height={500}
          width={500}
          blurDataURL={product.images[0].file.url}
        />
        <div className="text">
          <h4 className="vendor font-bold pl-2 my-0 py-0 h-5">
            {product.vendor}
          </h4>
          <div className="product-name-view">
            <h3 className="text-md">{product.name}</h3>
          </div>  
          <div className="price-view">
            <h4 className="font-bold mt-6 mb-3">${product.price}</h4>
            <h4 className="font-bold text-gray-500 mt-6 mb-0">
              {product.oldPrice}
            </h4>
          </div>
          <button
            type="button"
            className="add-to-cart text-white px-4 py-1 flex items-center mx-auto rounded-md"
          >
            <Image
              src="/cart-white-icon.png"
              alt="cart"
              className="mr-6"
              height={20}
              width={20}
            />{" "}
            <p className="text-sm">Add to cart</p>
          </button>
        </div>
        <style jsx>
          {`
            .add-to-cart {
              background-color: var(--mountain-green);
            }
            .add-to-cart:hover {
              background-color: var(--mountain-mist);
            }
            .vendor {
              border-left: 3px solid ${color};
              color: ${color};
            }
            .text h3 {
              height: 80px;
            }
          `}
        </style>
      </a>
    </Link>
  );
}
