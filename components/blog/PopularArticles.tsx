import blogContent from "@/json/blog.json";
import Image from "next/image";

export default function PopularArticles() {
  const content = blogContent[0].popularArticles;
  return (
    <div className="flex flex-col">
      <h3 className="font-bold">Popular Articles</h3>
      <ul>
        {content.map((item, index) => (
          <li key={index} className="flex items-center my-2">
            <Image
              src={item.thumbnailImg}
              alt={item.thumbnailImg}
              height={100}
              width={100}
              className="rounded-lg"
            />
            <p>{item.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
