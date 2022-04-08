import Image from "next/image";

export default function CategoryView() {
  return (
    <div>
      <div className="category-image w-4/5">
        <Image
          src="/category-image.webp"
          height={800}
          width={1000}
          alt="natural-oil"
        />
      </div>
    </div>
  );
}
