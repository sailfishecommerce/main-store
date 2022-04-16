import { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Highlight, connectRefinementList } from "react-instantsearch-dom";
import { FiSearch } from "react-icons/fi";

import LoadCategorySidebar from "@/components/loader/CategorySidebarLoader";
import { replaceSpaceWithHypen } from "@/lib/formatString";

export function SingleVendorList({
  items,
  isFromSearch,
  refine,
  searchForItems,
}: any) {
  const router = useRouter();
  // const { pathname, asPath }: any = useRouter();

  const vendor =
    router?.asPath.includes("/vendors") && router?.asPath.split("/vendors/")[1];
  console.log("vendor", vendor);
  useEffect(() => {
    if (vendor) {
      refine(vendor);
    }
  }, []);

  const selectedVendor = (item: string) => {
    router?.pathname.includes(item) ? "font-bold text-danger" : "";
  };

  console.log("items", items);

  function searchItems(e: any) {
    searchForItems(e.currentTarget.value);
  }

  return (
    <div className="mb-4 pb-4 border-b-4">
      <h3 className="mb-2 text-xl font-medium">EEVendors</h3>
      <div className="relative flex mb-1">
        <input
          className="border-2 w-full h-10 focus:border-red-500 border-gray-200 rounded-lg px-4 text-sm mb-2"
          type="text"
          onChange={searchItems}
          placeholder="Search"
        />
        <FiSearch size={25} className="text-red-500 absolute right-4 top-2" />
      </div>
      <div className="accordion mt-n1" id="shop-categories">
        {items?.length > 0 ? (
          items?.map(
            (item: {
              label: string;
              count: number;
              value: string;
              isRefined: boolean;
            }) => (
              <div key={item.label} className="accordion-item my-4">
                <Link
                  href={`/shop/vendors/${replaceSpaceWithHypen(item.label)}`}
                  passHref
                >
                  <a
                    aria-label={item.label}
                    className={`my-4 ${selectedVendor(item.label)}`}
                  >
                    {isFromSearch ? (
                      <Highlight attribute="label" hit={item} />
                    ) : (
                      <>
                        {item.label}
                        <span className="ml-4 bg-red-500 rounded-full px-3 py-1 h-4 hover:bg-red-700 text-sm text-white">
                          {item.count}
                        </span>
                      </>
                    )}
                  </a>
                </Link>
              </div>
            )
          )
        ) : (
          <LoadCategorySidebar />
        )}
      </div>
      <style jsx>
        {`
          a.cat-link {
            font-size: 0.9375rem;
            color: #4b566b;
          }
          a:hover {
            color: #fe696a;
          }
          a.badge {
            font-size: 0.75rem;
            font-weight: normal;
            color: white;
          }
          .accordion {
            scrollbar-width: thin;
            scrollbar-color: darkgrey slategrey;
            max-height: 400px;
            overflow-y: auto;
          }
          .accordion::-webkit-scrollbar {
            width: 8px;
          }
          .accordion::-webkit-scrollbar-track {
            box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
          }
          .accordion::-webkit-scrollbar-thumb {
            background-color: darkgrey;
            outline: 1px solid slategrey;
            border: 0px;
          }
        `}
      </style>
    </div>
  );
}
export const VendorRefinementList = connectRefinementList(SingleVendorList);
