import Image from "next/image";

interface ProductProps {
  product: {
    brand: string;
    name: string;
    price: number;
    oldPrice: number;
    img: string;
  };
}

export default function Product({ product }: ProductProps) {
  return (
    <div>
      <Image src={product.img} alt={product.name} height={500} width={500} />
      <div className="text">
        <h4 className="text-xl brand text-blue-500">{product.brand}</h4>
        <h3>{product.name}</h3>
        <div className="price-view">
          <h3 className="font-bold mt-6 mb-3">{product.price}</h3>
          <h3 className="font-bold text-gray-500 mt-6 mb-3">
            {product.oldPrice}
          </h3>
        </div>
        <button type="button">Add to cart</button>
      </div>
    </div>
  );
}
