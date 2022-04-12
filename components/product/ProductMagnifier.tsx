import Image from "next/image";
import Magnifier from "react-magnifier";
import dynamic from "next/dynamic";
import { useState } from "react";
const Lightbox = dynamic(() => import("react-image-lightbox"));

import type { ProductProps } from "@/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ProductOfferCards from "@/components/cards/ProductOfferCards";
import productOffers from "@/json/product-offers.json";

export default function ProductMagnifier({ product }: ProductProps) {
  const [activeImage, setActiveImage] = useState(0);
  const [lightBoxOpen, setLightBoxOpen] = useState(false);
  const tabletView = useMediaQuery("(max-width:768px)");
  const mobileView = useMediaQuery("(max-width:450px)");

  const imageSize = mobileView ? "w-1/3 lg:w-full" : "w-1/3 lg:w-full";

  const activethumbnailImg = (index: number) =>
    activeImage === index
      ? "active border rounded-2xl p-1 border-gray-500"
      : "";

  const updateActiveImage = (index: number) => setActiveImage(index);

  const images = product?.images;

  const onImgClick = () => setLightBoxOpen(!lightBoxOpen);

  const imageView = tabletView
    ? {
        height: 90,
        width: 90,
      }
    : {
        height: 150,
        width: 150,
      };

  const customStyles = {
    overlay: {
      zIndex: "5000",
    },
    bodyOpen: {
      position: "fixed",
    },
  };

  return (
    <div className="w-1/1">
      <div className="main-image">
        <div
          onClick={onImgClick}
          className="product-gallery-preview-item active"
        >
          <Magnifier
            mgShowOverflow={false}
            mgWidth={2000}
            mgHeight={2000}
            height={500}
            className="img-fluid"
            src={images[activeImage].file.url}
            zoomFactor={0.11}
          />
          <div className="image-zoom-pane"></div>
        </div>
        {lightBoxOpen && (
          <Lightbox
            mainSrc={images[activeImage].file.url}
            nextSrc={images[(activeImage + 1) % images.length].file.url}
            prevSrc={
              images[(activeImage + images.length - 1) % images.length].file.url
            }
            onCloseRequest={() => setLightBoxOpen(false)}
            imageCaption={product.image_alt_text[activeImage]}
            onMovePrevRequest={() =>
              setActiveImage((activeImage + images.length - 1) % images.length)
            }
            onMoveNextRequest={() =>
              setActiveImage((activeImage + 1) % images.length)
            }
            enableZoom={false}
            reactModalStyle={customStyles}
          />
        )}
      </div>
      <div className="product-gallery-thumblist mt-4 flex hidden md:flex flex-wrap w-full lg:flex-col lg:order-1 lg:w-1/5">
        {images?.map((image: any, index) => (
          <a
            className={`items-center justify-center ${imageSize} flex px-2 cursor-pointer hover:border-green-500 border-gray-500 ${activethumbnailImg(
              index
            )}`}
            onClick={() => updateActiveImage(index)}
            key={index}
            aria-label={product.image_alt_text[index]}
          >
            <Image
              height={imageView.height}
              width={imageView.width}
              src={image.file.url}
              alt={product.image_alt_text[index]}
            />
          </a>
        ))}
      </div>
      <div className="product-offers my-4 flex items-center">
        {productOffers.map((offer, index) => (
          <ProductOfferCards offer={offer} key={index} />
        ))}
      </div>
    </div>
  );
}
