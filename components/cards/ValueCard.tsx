import Image from "next/image";

interface valuecardProps {
  content: {
    icon: string;
    title: string;
    text: string;
    color: string;
    link?: string;
  };
}

export default function ValueCard({ content }: valuecardProps) {
  return (
    <>
      <div
        className={`value-card w-1/24 rounded-lg p-6 flex flex-col  h-44 {indexKey}`}
      >
        <div className="w-1/12">
          <Image
            src={content.icon}
            alt={content.title}
            height={20}
            width={20}
            layout="responsive"
          />
        </div>
        <h3 className="font-bold text-xl my-2">{content.title}</h3>
        <p>{content.text}</p>
        {<span className="font-bold text-blue-500">{content?.link}</span>}
      </div>
      <style jsx>
        {`
          .value-card {
            background-color: ${content.color};
          }
        `}
      </style>
    </>
  );
}
