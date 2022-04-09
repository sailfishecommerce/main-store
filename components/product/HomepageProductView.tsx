import Product from "@/components/product";
import useLiveHealthyProduct from "@/hooks/useLivehealthyProduct";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

interface Props {
  title: string;
  tags: string[];
  products?: any[];
}
export default function HomepageProductView({ title, tags, products }: Props) {
  const [data, status] = useLiveHealthyProduct();
  console.log("data", data);

  return (
    <section className="container mx-auto flex flex-col my-4">
      <div className="top mb-4">
        <h1 className="font-bold text-3xl">{title}</h1>
        <div className="controls"></div>
      </div>
      <ul className="flex items-center justify-between w-1/4">
        {tags.map((tag) => (
          <li
            className="flex items-center p-2 border border-blue-500 hover:text-white text-blue-500 bg-white hover:bg-blue-500 rounded-xl"
            key={tag}
          >
            {tag}
          </li>
        ))}
      </ul>
      <div className="products mx-auto container mt-4 flex items-center justify-between pb-12">
        {status === "error" ? (
          "unable to load products"
        ) : status === "loading" ? (
          "loading"
        ) : (
          <Splide
            options={{
              perPage: 6,
            }}
            className="container mx-auto"
          >
            {data.map((product: any) => (
              <SplideSlide key={product.id}>
                <Product product={product} />
              </SplideSlide>
            ))}
          </Splide>
        )}
      </div>
    </section>
  );
}
