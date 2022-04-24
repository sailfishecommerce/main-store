import FilterIcon from "@material-design-icons/svg/outlined/filter_list.svg";
import classNames from "classnames";
import { useAtomValue, useUpdateAtom } from "jotai/utils";
import dynamic from "next/dynamic";

import { refinementsPanelMobileExpandedAtom } from "@/components/refinementspanel/refinements-panel";
import { ToggleFilters } from "@/components/toggle-filters";
import { ViewModes } from "@/components/view-modes";
import { configAtom } from "@/components/algolia/config";
import { Laptop, Tablet } from "@/lib/media";
import { withDebugLayer } from "@/components/@dev/debug-layer/debug-layer";
import {
  CurrentRefinements,
  refinementCountAtom,
} from "@/components/@instantsearch/widgets/current-refinements/current-refinements";
import { RelevantSort } from "@/components/@instantsearch/widgets/relevant-sort/relevant-sort";
import { SortBy } from "@/components/@instantsearch/widgets/sort-by/sort-by";
import { searchResultsAtom } from "@/components/@instantsearch/widgets/virtual-state-results/virtual-state-results";
import { Button } from "@/components/@algolia-ui/button/button";
import { Count } from "@/components/@algolia-ui/count/count";
import { IconLabel } from "@/components/@algolia-ui/icon-label/icon-label";

const RefinementsBarDropdowns = dynamic<any>(() =>
  import(
    /* webpackChunkName: 'refinements-bar' */ "@/components/refinementsbar/refinements-bar-dropdowns"
  ).then((mod) => mod.RefinementsBarDropdowns)
);

export type RefinementsBarProps = {
  dynamicWidgets?: boolean;
  showRefinements?: boolean;
  className?: string;
};

function RefinementsBarComponent({
  dynamicWidgets = true,
  showRefinements = false,
  className,
}: RefinementsBarProps) {
  const { sorts } = useAtomValue(configAtom);
  const sortDefaultRefinement = sorts.find((s) => s.isDefault)?.value;

  const setMobileExpanded = useUpdateAtom(refinementsPanelMobileExpandedAtom);
  const refinementCount = useAtomValue(refinementCountAtom);
  const searchResults = useAtomValue(searchResultsAtom);

  return (
    <section
      className={classNames(
        "w-full laptop:px-3",
        { hidden: searchResults?.nbHits === 0 },
        className
      )}
    >
      <Tablet className="flex flex-col gap-2">
        <div className="flex justify-between">
          <ViewModes />

          <Button
            className="flex items-center gap-1"
            onClick={() => setMobileExpanded(true)}
          >
            <IconLabel
              icon={FilterIcon}
              label="Filter &amp; Sort"
              labelPosition="right"
              classNameLabel="body-regular"
            />
            {refinementCount > 0 && <Count>{refinementCount}</Count>}
          </Button>
        </div>

        <RelevantSort />
      </Tablet>

      <Laptop className="flex flex-col items-start gap-4">
        <div className="w-full flex gap-6">
          {showRefinements && (
            <RefinementsBarDropdowns dynamicWidgets={dynamicWidgets} />
          )}

          {!showRefinements && <CurrentRefinements />}

          <div className="flex gap-6 ml-auto flex-shrink-0 items-center">
            {!showRefinements && <ToggleFilters />}
            <ViewModes />
            <SortBy
              defaultRefinement={sortDefaultRefinement}
              items={sorts}
              className="w-52"
            />
          </div>
        </div>

        {showRefinements && <CurrentRefinements />}

        <RelevantSort />
      </Laptop>
    </section>
  );
}

export const RefinementsBar = withDebugLayer(
  RefinementsBarComponent,
  "RefinementsBar"
);