import Applayout from "@/layouts/Applayout";
import { categoryType } from "@/types";
import getStoreCategories from "@/lib/getStoreCategories";
import CategoryMetatag from "@/components/metatag/CategoryMetatag";

interface collectionProps {
  collection: categoryType;
}

export default function CategoryPage({ collection }: collectionProps) {
  return (
    <Applayout title="Category Page">
      <CategoryMetatag collection={collection} />
    </Applayout>
  );
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const storeCategories: any[] = await getStoreCategories();

  const collection = storeCategories?.filter(
    (collection: { slug: any }) => collection?.slug === params.slug
  );

  return {
    props: {
      collection: collection[0],
    },
  };
}

export async function getStaticPaths() {
  const storeCategories: any[] = await getStoreCategories();

  return {
    paths:
      storeCategories?.map(
        (collection: { slug: any }) => `/category/${collection.slug}`
      ) || [],
    fallback: false,
  };
}
