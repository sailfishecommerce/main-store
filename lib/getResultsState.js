import { findResultsState } from "react-instantsearch-dom/server";
import { getSearchClient } from "@/hooks/useSearchClient";

export async function getResultsState({
  component,
  searchState,
  appId,
  searchApiKey,
  indexName,
  ...customProps
}) {
  // 'useSearchClient' hook is not used here as this function runs on server-side only
  const searchClient = getSearchClient(appId, searchApiKey);

  // We need two 'findResultsState' for 'DynamicWidgets' to work properly
  const firstResultsState = await findResultsState(component, {
    ...customProps,
    searchClient,
    indexName,
    searchState,
  });

  let resultsState = await findResultsState(component, {
    ...customProps,
    searchClient,
    indexName,
    searchState,
    resultsState: firstResultsState,
  });

  // Strips down unserializable values so Next.js doesn't show an error
  resultsState = JSON.parse(JSON.stringify(resultsState));

  return resultsState;
}
