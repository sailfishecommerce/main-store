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
    <div
      className="border flex flex-row md:flex-col justify-start items-center md:items-start rounded-lg my-2 p-4 p-3 mr-1 md:mr-4 w-full md:w-1/3"
      title={offer.title}
    >
      <div className="w-6 h-6 mb-0 md:mb-2">
        <Image src={offer.icon} alt={offer.title} height={50} width={50} />
      </div>
      <h5 className="text-lg text-sm font-bold mx-4 md:ml-0">{offer.title}</h5>
      <p className="text-xs md:text-sm my-1">{offer.text}</p>
    </div>
  );
}
