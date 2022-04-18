import Image from "next/image";

import blogContent from "@/json/blog.json";

export default function BlogAuthor() {
  return (
    <div className="bg-gray-200 rounded-xl p-4 flex items-center">
      <Image
        src={blogContent[0].author.image.big}
        alt={blogContent[0].author.name}
        height={150}
        width={150}
        className="mr-6"
      />
      <div className="content">
        <h6 className="text-gray-400 mb-2">About the author</h6>
        <h5 className="font-bold mb-4">{blogContent[0].author.name}</h5>
        <p>{blogContent[0].author.bio}</p>
      </div>
    </div>
  );
}
