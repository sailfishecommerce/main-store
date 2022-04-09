import Image from "next/image";
import { ProductProps } from "@/types";

interface ProductTypes extends ProductProps {
  row?: string;
}

export default function Product({ product, row }: ProductTypes) {
  const isRow = row ? "flex" : "flex flex-col";
  return (
    <div
      className={`hover:bg-white hover:shadow-lg hover:rounded-lg product ${isRow} p-4`}
    >
      <Image
        src={product.images[0].file.url}
        alt={product.name}
        height={500}
        width={500}
      />
      <div className="text">
        <h4 className="text-xl brand text-blue-500">{product.vendor}</h4>
        <h3>{product.name}</h3>
        <div className="price-view">
          <h3 className="font-bold mt-6 mb-3">{product.price}</h3>
          <h3 className="font-bold text-gray-500 mt-6 mb-3">
            {product.oldPrice}
          </h3>
        </div>
        <button
          type="button"
          className="add-to-cart text-white px-4 py-1 flex mx-auto rounded-md"
        >
          Add to cart
        </button>
      </div>
      <style jsx>
        {`
          .add-to-cart {
            background-color: var(--mountain-green);
          }
          .add-to-cart:hover {
            background-color: green;
          }
        `}
      </style>
    </div>
  );
}
