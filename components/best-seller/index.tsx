import { productType } from "@/types";
import Image from "next/image";

interface bestSellerProps {
  content: productType;
}

export default function BestSeller({ content }: bestSellerProps) {
  return (
    <div className="bg-white rounded-lg p-4 flex flex-col">
      <Image src={content.img} height={400} width={400} alt={content.name} />
      <hr />
      <div className="text">
        <h5 className="brand">{content.brand}</h5>
        <h4>{content.name}</h4>

        <div className="price-view">
          <h3 className="font-bold mt-6 mb-3">{content.price}</h3>
          <h3 className="font-bold text-gray-500 mt-6 mb-3">
            {content.oldPrice}
          </h3>
        </div>
        <button
          type="button"
          className="bg-green-500 text-white hover:bg-green-800"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
