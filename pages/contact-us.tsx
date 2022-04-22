import dynamic from "next/dynamic";

import Applayout from "@/layouts/Applayout";
import ContactBanner from "@/components/banners/ContactusBanner";
import ContactusCard from "@/components/cards/ContactusCard";
import ContactMap from "@/components/map/ContactusMap";
import ContactForm from "@/components/form/ContactForm";
import PartnerOutlet from "@/components/page-view/PartnerOutlet";

export default function ContactUs() {
  return (
    <Applayout title="Contact us">
      <ContactBanner />
      <ContactusCard />
      <PartnerOutlet />
      <div
        className="w-full flex-col lg:flex-row flex m-auto justify-between"
        id="map"
      >
        <ContactMap />
        <ContactForm />
      </div>
    </Applayout>
  );
}
