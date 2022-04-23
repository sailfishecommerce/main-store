import ProductOverview from "@/components/product/ProductOverview";
import Applayout from "@/layouts/Applayout";
import fetchAllSwellProducts from "@/lib/processPageproduct";

export default function ProductPage({ pageProduct }: any) {
  console.log("pageProduct", pageProduct);
  return (
    <Applayout title={pageProduct.name}>
      <main className="container mx-auto">
        <ProductOverview product={pageProduct} />
      </main>
    </Applayout>
  );
}

type propsType = {
  params: { slug: string };
};
export async function getStaticProps({ params }: propsType) {
  const productData: any = await fetchAllSwellProducts();
  const results: any = await Promise.all(productData);

  const pageProduct = results[0].filter(
    (product: { slug: any }) => product?.slug === params.slug
  );

  return {
    props: {
      pageProduct: pageProduct[0],
    },
  };
}

export async function getStaticPaths() {
  const productData: any = await fetchAllSwellProducts();

  const results: any = await Promise.all(productData);

  return {
    paths:
      results[0].map((product: { slug: any }) => `/products/${product.slug}`) ||
      [],
    fallback: false,
  };
}
