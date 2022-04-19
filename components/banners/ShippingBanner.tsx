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
    <section className="container mx-auto flx justify-cente">
      <Image
        src={imageSrc}
        alt="free shipping"
        height={imageDimension.height}
        width={imageDimension.width}
        layout="responsive"
      />
    </section>
  );
}
