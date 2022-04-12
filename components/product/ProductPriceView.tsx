import Image from "next/image";

export default function ProductPriceView({ product }: any) {
  return (
    <div className="border my-4 mt-2 rounded-lg p-4 flex flex-col">
      <div className="price flex flex-col mb-8">
        <h4 className="font-bold text-2xl">$ {product.price}</h4>
        {product.oldPrice && (
          <h4 className="gray-manatee text-2xl">{product.oldPrice}</h4>
        )}
        <div className="buy-now-section flex flex-col">
          <div className="row-1 flex items-center justify-between my-2">
            <div className="button-group flex items-center my-2">
              <button className="add-to-cart rounded-lg mr-4 flex items-center bg-mountain-green text-white py-1 px-4">
                <Image
                  src="/cart-white-icon.png"
                  alt="cart"
                  className="mr-6"
                  height={20}
                  width={20}
                />{" "}
                Add to cart
              </button>
              <button className="buy-now rounded-lg bg-tan-hide text-white py-1 px-4">
                Buy now
              </button>
            </div>
            <div className="rounded-full border w-1/5 flex items-center px-2 my-2 py-1">
              <div className="image-wrappe w-1/5 flex items-center">
                <Image
                  src="/check-icon-green.png"
                  alt="many in stock"
                  height={20}
                  width={20}
                />
              </div>
              <p className="font-normal text-sm ml-1">Many in stock</p>
            </div>
          </div>
          <div className="secure-transaction border-b pb-2 flex items-center">
            <Image
              className="mr-3"
              src="/secured.png"
              alt="secured"
              height={20}
              width={20}
            />
            <p className="font-normal text-sm ml-1">Secure transaction</p>
          </div>
          <div className="imported pt-2 flex items-center justify-between">
            <div className="from-ausralia">
              <p>Imported from Australia</p>
            </div>
            <p>Buy now to receive by 31 April 2022</p>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .add-to-cart:hover {
            background-color: var(--mountain-mist);
          }
          .buy-now:hover {
            background-color: var(--tan-deep-hide);
          }
        `}
      </style>
    </div>
  );
}
