import Image from "next/image";
import Magnifier from "react-magnifier";
import dynamic from "next/dynamic";
import { useState } from "react";
const Lightbox = dynamic(() => import("react-image-lightbox"));

import type { ProductProps } from "@/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ProductOffers from "./ProductOffers";

export default function ProductMagnifier({ product }: ProductProps) {
  const [activeImage, setActiveImage] = useState(0);
  const [lightBoxOpen, setLightBoxOpen] = useState(false);
  const tabletView = useMediaQuery("(max-width:768px)");

  const activethumbnailImg = (index: number) =>
    activeImage === index
      ? "active border md:rounded-2xl rounded-lg p-1 border-green-500"
      : "";

  const updateActiveImage = (index: number) => setActiveImage(index);

  const images = product?.images;

  const onImgClick = () => setLightBoxOpen(!lightBoxOpen);
  const magnifierDimens = tabletView
    ? { height: 300, mgHeight: 300, mgWidth: 300 }
    : { height: 500, mgHeight: 500, mgWidth: 500 };

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
    <div className="p-3 w-full md:w-1/2">
      <div className="main-image">
        <div
          onClick={onImgClick}
          className="product-gallery-preview-item active w-full flex items-center mx-auto"
        >
          <Magnifier
            mgShowOverflow={false}
            mgWidth={magnifierDimens.mgWidth}
            mgHeight={magnifierDimens.mgHeight}
            height={magnifierDimens.height}
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
      <div className="product-gallery-thumblist mt-4 flex flex-wrap w-full lg:order-1">
        {images?.map((image: any, index) => (
          <a
            className={`items-center justify-center flex p-1 md:px-2 cursor-pointer hover:border-green-500 w-1/6 border-gray-500 ${activethumbnailImg(
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
      <ProductOffers className="hidden md:flex" />
    </div>
  );
}
