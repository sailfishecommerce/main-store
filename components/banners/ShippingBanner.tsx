import { useMediaQuery } from "@/hooks";
import Image from "next/image";

export default function ShippingBanner() {
  const mobileWidth = useMediaQuery("(max-width:768px)");
  const imageSrc = mobileWidth
    ? "/free-shipping-mobile.webp"
    : "/free-shipping.webp";

  const imageSize = [
    {
      height: 280,
      width: 1400,
    },
    {
      height: 335,
      width: 400,
    },
  ];
  const imageDimension = mobileWidth ? imageSize[1] : imageSize[0];
  return (
    <section className="container -ml-2 mx-auto -mt-8 md:mt-0 mb-6 md:mb-0 px-4">
      <div className="w-full justify-center fle items-cente">
        <Image
          src={imageSrc}
          alt="free shipping"
          height={imageDimension.height}
          width={imageDimension.width}
          layout="responsive"
        />
      </div>
    </section>
  );
}
