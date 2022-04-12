import Image from "next/image";

export default function ProductPriceView({ product }:any) {
  return (
    <div className="border rounded-lg p-4 flex flex-col">
      <div className="price flex flex-col items-center mb-8">
        <h4 className="font-bold">$ {product.price}</h4>
        {product.oldPrice && (
          <h4 className="gray-manatee">{product.oldPrice}</h4>
        )}
        <div className="buy-now flex flex-col tem-center justify-between">
          <div className="button-group flex items-center">
            <button className="button mr-4 bg-mountain-green py-2 px-4">
              Add to cart
            </button>
            <button className="button bg-tan-hide py-2 px-4">Buy now</button>
          </div>
          <div className="rounded-full border flex items-center px-2 py-1">
            <Image
              src="/check-icon-green.png"
              className="mr-2"
              alt="many in stock"
              height={20}
              width={20}
            />
            <p className="font-normal">Many in stock</p>
          </div>
          <div className="secure-transaction">
            <Image
              className="mr-3"
              src="/secured.png"
              alt="secured"
              height={20}
              width={20}
            />
            <p>Secure transaction</p>
          </div>
          <hr className="border-b" />
          <div className="imported flex items-center justify-between">
              <div className="from-ausralia">
                  <p>Imported from Australia</p>
              </div>
              <p>Buy now to receive by 31 April 2022</p>
          </div>
        </div>
      </div>
    </div>
  );
}
