import Image from "next/image";

export default function ShippingBanner() {
  return (
    <section>
      <Image
        src="/free-shipping.webp"
        alt="free shipping"
        height={280}
        width={1400}
        layout="responsive"
      />
    </section>
  );
}
