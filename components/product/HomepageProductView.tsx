import Product from "@/components/product";

interface Props {
  title: string;
  tags: string[];
  products: any[];
}
export default function HomepageProductView({ title, tags, products }: Props) {
  return (
    <section className="container mx-auto flex flex-col">
      <div className="top">
        <h1>{title}</h1>
        <div className="controls"></div>
      </div>
      <ul className="flex items-center">
        {tags.map((tag) => (
          <li
            className="flex items-center p-4 border border-blue-500 hover:text-white text-blue-500 bg-white hover:bg-blue-500"
            key={tag}
          >
            {tag}
          </li>
        ))}
      </ul>
      {products && (
        <div className="products flex items-center justify-between">
          {products.map((product, index) => (
            <Product key={index} product={product} />
          ))}
        </div>
      )}
    </section>
  );
}
