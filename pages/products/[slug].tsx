import ProductBreadcrumb from "@/components/bread-crumb/ProductBreadcrumb";
import ProductOverview from "@/components/product/ProductOverview";
import Applayout from "@/layouts/Applayout";
import fetchAllSwellProducts from "@/lib/processPageproduct";
import { ProductType } from "@/types";

interface Props {
  pageProduct: ProductType;
}

export default function ProductPage({ pageProduct }: any) {
  console.log("pageProduct", pageProduct);
  return (
    <Applayout>
      <main className="container mx-auto">
        <ProductBreadcrumb breadcrumbItem="Blackmores Vitamin B12 (Cyanocobalamin) 100mcg 75 Tablets" />
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
