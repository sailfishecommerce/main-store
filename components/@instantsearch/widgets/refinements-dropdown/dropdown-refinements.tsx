import { memo } from "react";
import isEqual from "react-fast-compare";
import type { CurrentRefinementsProvided } from "react-instantsearch-core";
import { connectCurrentRefinements } from "react-instantsearch-dom";

import { Dropdown } from "@/components/@algolia-ui/dropdown/dropdown";
import type { DropdownProps } from "@/components/@algolia-ui/dropdown/dropdown";
import { useCurrentRefinementCount } from "@/components/@instantsearch/hooks/useCurrentRefinementCount";

export type RefinementsDropdownProps = CurrentRefinementsProvided &
  DropdownProps & {
    children: React.ReactNode;
    attributes?: string[];
  };

export function RefinementsDropdownComponent({
  children,
  attributes = [],
  items,
  header,
  className,
  classNameContainer,
}: RefinementsDropdownProps) {
  const currentRefinementCount = useCurrentRefinementCount(items, attributes);

  return (
    <Dropdown
      header={header}
      className={className}
      classNameContainer={classNameContainer}
      count={currentRefinementCount}
    >
      <div className="p-3">{children}</div>
    </Dropdown>
  );
}

export const RefinementsDropdown = connectCurrentRefinements(
  memo(RefinementsDropdownComponent, isEqual)
);
