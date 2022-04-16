import { connectRefinementList } from "react-instantsearch-dom";

import Ratings from "@/components/reviews/Ratings";

export default function RatingsRefinementList({
  items,
  refine,
  createURL,
}: any) {
  function refineSearch(item: any) {
    refine(item.value);
  }
  return (
    <div className="widget widget-categories flex flex-col">
      <h3 className="widget-title">Ratings</h3>
      {items.map((item: { label: number; count: number }, index: number) => (
        <div className="my-1 flex items-center justify-between" key={index}>
          <div
            onClick={() => refineSearch(item)}
            className="btn btn-link m-0 p-0"
          >
            <Ratings ratings={item.label} />
          </div>
          <span className="mx-2 badge bg-danger">{item.count}</span>
        </div>
      ))}
    </div>
  );
}

export const RatingsList = connectRefinementList(RatingsRefinementList);
