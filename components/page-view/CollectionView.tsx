import { InstantSearch } from "react-instantsearch-dom";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import algoliasearch from "algoliasearch/lite";
import Link from "next/link";
import { Configure } from "react-instantsearch-dom";
import useMediaQuery from "@/hooks/useMediaQuery";

import AlgoliaCurrentRefinement from "@/components/algolia/AlgoliaCurrentRefinement";
import ShopViewCategories from "@/components/page-view/CollectionViewCategories";
import ShopBannerToolbar from "@/components/banners/CollectionBannerToolbar";
import InfiniteProductHits from "@/components/algolia/InfiniteHits";
import useAlgoliaSearch from "@/hooks/useAlgoliaSearch";
import {
  updateDefaultRefinement,
  updateDefaultMenuRefinement,
} from "@/redux/algolia-slice";
import { useAppDispatch } from "@/hooks/useRedux";

interface ShopViewProps {
  vendor?: string;
  menu?: string;
}

const DEBOUNCE_TIME = 700;

export default function ShopView({ vendor, menu }: ShopViewProps) {
  const router = useRouter();
  const tabWidth = useMediaQuery("(max-width:768px)");

  const { slug } = router?.query;
  const { searchStateToUrl, urlToSearchState, createURL } = useAlgoliaSearch();
  const { asPath } = router;
  const [searchState, setSearchState] = useState(urlToSearchState(asPath));
  const debouncedSetStateRef: any = useRef(null);
  const dispatch = useAppDispatch();

  const searchClient = algoliasearch(
    `${process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID}`,
    `${process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY}`
  );

  const onSearchStateChange = (updatedSearchState: any) => {
    clearTimeout(debouncedSetStateRef.current);
    const href = searchStateToUrl(updatedSearchState);

    debouncedSetStateRef.current = setTimeout(() => {
      router.push(href, href, {
        shallow: true,
      });
    }, DEBOUNCE_TIME);

    setSearchState(updatedSearchState);
  };

  useEffect(() => {
    if (vendor && slug && slug.includes(vendor.toLowerCase())) {
      dispatch(updateDefaultRefinement(vendor));
    }
  }, []);

  useEffect(() => {
    if (menu && slug && slug.includes(menu.toLowerCase())) {
      dispatch(updateDefaultMenuRefinement(menu));
    }
  }, []);

  return (
    <InstantSearch
      indexName="New_Livehealthy_products_index"
      searchClient={searchClient}
      onSearchStateChange={onSearchStateChange}
      searchState={searchState}
      createURL={createURL}
    >
      <Configure
        hitsPerPage={9}
        clickAnalytics
        distinct
        enablePersonalization={true}
      />
      <div className="w-full flex bg-gray-700 justify-between h-44 lg:h-52">
        <div className="container m-auto mb-3 mb-lg-0 pt-lg-2 flex flex-col md:h-32 relative">
          <nav className="w-full items-start justify-start flex bg-gray-700 ">
            <ol className="text-white flex items-center md:items-start mx-auto md:mx-0 justify-center lg:justify-start">
              <li className="mb-0">
                <Link href="/" passHref>
                  <a aria-label="home" className="hover:text-red-500">
                    Home
                  </a>
                </Link>
              </li>
              <li className="mx-2">
                <span> &gt; </span>
              </li>
              <li className="text-nowrap active">Shop</li>
            </ol>
            <AlgoliaCurrentRefinement />
          </nav>
          <ShopBannerToolbar />
        </div>
      </div>
      <div className="container mx-auto flex pb-5 mb-2 md:mb-4">
        {!tabWidth && <ShopViewCategories />}
        <section className="w0full md:w-3/4 flex flex-col">
          <div className="flex flex-wrap">
            <InfiniteProductHits minHitsPerPage={9} animation={true} />
          </div>
          <hr className="mb-2" />
        </section>
      </div>
    </InstantSearch>
  );
}
