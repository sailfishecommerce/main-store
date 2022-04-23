import { memo } from "react";
import isEqual from "react-fast-compare";
import { Configure, InstantSearch } from "react-instantsearch-dom";

import { VirtualSearchBox } from "@/components/@instantsearch/widgets/virtual-search-box/virtual-search-box";
import { VirtualStateResults } from "@/components/@instantsearch/widgets/virtual-state-results/virtual-state-results";
import { VirtualStats } from "@/components/@instantsearch/widgets/virtual-stats/virtual-stats";

function SearchComponent({ children, searchParameters, ...props }: any) {
  return (
    <InstantSearch {...props}>
      <Configure {...searchParameters} />

      <VirtualSearchBox />
      <VirtualStateResults />
      <VirtualStats />

      {children}
    </InstantSearch>
  );
}

export const Search = memo(SearchComponent, isEqual);
