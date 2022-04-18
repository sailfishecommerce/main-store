import Image from "next/image";
import {
  BsWhatsapp,
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsPinterest,
} from "react-icons/bs";

import blogContent from "@/json/blog.json";

export default function ShareBlogLink() {
  const content = blogContent[0].links;
  return (
    <div className="row">
      <div className="author">
        <Image src="/arabella-small.webp" alt="author" height={50} width={50} />
        <div className="content">
          <h6 className="font-bold mb-4">Arabella Noakes</h6>
          <p className="font-medium">
            April 10,2022 <li className="text-gray-100">10 minutes read</li>
          </p>
        </div>
      </div>
      <div className="share">
        <h5 className="font-bold mr-4">Share</h5>
        <div className="share-icons flex items-center">
          <BsWhatsapp className="mx-2" />
          <BsFacebook className="mx-2" />
          <BsTwitter className="mx-2" />
          <BsInstagram className="mx-2" />
          <BsPinterest className="mx-2" />
        </div>
      </div>
    </div>
  );
}
