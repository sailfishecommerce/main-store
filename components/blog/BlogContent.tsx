import Image from "next/image";

import blogContent from "@/json/blog.json";

export default function BlogContent() {
  const content = blogContent[0];
  return (
    <section className="content">
      <div className="row flex flex-col">
        <Image
          src={content.section1.banner}
          height={500}
          width={500}
          alt={content.title}
          className="rounded-xl mb-8"
        />
        <hr />
        <div className="text">
          <p>{content.section1.text}</p>
        </div>
      </div>
      <div className="row flex flex-col">
        <h4 className="font-bold mb-4 text-xl">{content.section2.title}</h4>
        <ul className="list">
          {content.section2.list.map((item, index) => (
            <li className="my-2" key={index}>
              {item}
            </li>
          ))}
        </ul>

        <p className="mb-4">{content.section2.text}</p>
        <ul>
          <li className="font-bold text-lg mb-4">Pros:</li>
          {content.section2.pros.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
          <li className="font-bold text-lg mb-4">Cons:</li>
          <li className="font-bold text-lg mb-4">Pros:</li>
          {content.section2.pros.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
          <span className="con-list mt-2">
            {content.section2.consList.map((item, index) => (
              <li key={index}>
                <span className="font-bold">{item.text}:</span>
                <p>{item.value}</p>
              </li>
            ))}
          </span>
          <div className="video-review">
            <h2 className="font-bold text-xl mb-4">Video review</h2>
            <Image
              src={content.section3.banner}
              height={500}
              width={500}
              alt={content.section3.banner}
              className="rounded-xl mb-8"
            />
          </div>
        </ul>
      </div>
    </section>
  );
}
