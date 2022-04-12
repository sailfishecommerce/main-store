import Image from "next/image";

interface Props {
    offer:{
        title:string;
        text:string;
        icon:string;
    }
}

export default function ProductOfferCards({offer}:Props) {
  return (
    <div className="border rounded-lg p-4 mr-4" title={offer.title}>
        <Image src={offer.icon} alt={offer.title} />
        <h5 className="text-lg">{offer.title}</h5>
        <p>{offer.text}</p>
    </div>
  )
}
