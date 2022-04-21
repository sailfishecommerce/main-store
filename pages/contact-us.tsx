import dynamic from "next/dynamic";

import Applayout from "@/layouts/Applayout";
import ContactBanner from "@/components/banners/ContactusBanner";
import ContactusCard from "@/components/cards/ContactusCard";

const DynamicContactMap = dynamic(
  () => import("@/components/map/ContactusMap")
);
const DynamicContactForm = dynamic(
  () => import("@/components/form/ContactForm")
);
const DynamicPartnerOutlet = dynamic(
  () => import("@/components/page-view/PartnerOutlet")
);

export default function ContactUs() {
  return (
    <Applayout title="Contact us">
      <ContactBanner />
      <ContactusCard />
      <DynamicPartnerOutlet />
      <div
        className="w-full flex-col lg:flex-row flex m-auto justify-between"
        id="map"
      >
        <DynamicContactMap />
        <DynamicContactForm />
      </div>
    </Applayout>
  );
}
