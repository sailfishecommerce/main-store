import Image from "next/image";

interface Props {
  offer: {
    title: string;
    text: string;
    icon: string;
  };
}

export default function ProductOfferCards({ offer }: Props) {
  return (
    <div className="border rounded-lg p-4 mr-4" title={offer.title}>
      <div className="w-2/12">
      <Image src={offer.icon} alt={offer.title} height={50} width={50} />
      </div>
      <h5 className="text-lg">{offer.title}</h5>
      <p>{offer.text}</p>
    </div>
  );
}
