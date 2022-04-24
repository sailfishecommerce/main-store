import { AnimatePresence } from "framer-motion";
import { QueryClient, QueryClientProvider } from "react-query";
import AOS from "aos";
import { Provider } from "react-redux";
import { useEffect } from "react";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { ReactQueryDevtools } from "react-query/devtools";
import { atom, Provider as JotaiProvider } from "jotai";
import { useAtomValue } from "jotai/utils";

import store from "@/redux/store";
import "@/styles/globals.css";
import Nprogress from "@/components/loader/Nprogress";
import { scrollToTop } from "@/lib/scrollToTop";
import { configAtom } from "@/components/algolia/config";
import { useSearchClient } from "@/hooks/useSearchClient";
import { useSearchInsights } from "@/hooks/useSearchInsights";
import { MediaContextProvider } from "@/lib/media";
import { createInitialValues } from "@/lib/createInitialValues";
import { appId, searchApiKey } from "@/lib/env";

import type { SearchClient } from "algoliasearch/lite";
import type { AppProps } from "next/app";

export const searchClientAtom = atom<SearchClient | undefined>(undefined);

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  const persistor = persistStore(store);

  const { setUserToken } = useAtomValue(configAtom);

  // Initialize search client
  const searchClient = useSearchClient({
    appId,
    searchApiKey,
  });

  const { get, set } = createInitialValues();
  set(searchClientAtom, searchClient);

  // Initialize search insights
  useSearchInsights({
    appId,
    searchApiKey,
    setUserToken,
  });
  useEffect(() => {
    AOS.init({
      startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
      easing: "ease", // default easing for AOS animations
      delay: 500,
    });
    AOS.refresh();
  }, []);

  return (
    <Provider store={store}>
      <JotaiProvider initialValues={get()}>
        <QueryClientProvider client={queryClient}>
          <PersistGate loading={null} persistor={persistor}>
            <Nprogress
              color="#95bf11"
              options={{ showSpinner: true }}
              height={3}
            />
            <MediaContextProvider>
              <AnimatePresence
                exitBeforeEnter={true}
                onExitComplete={scrollToTop}
              >
                <Component {...pageProps} />
              </AnimatePresence>
            </MediaContextProvider>
            <ReactQueryDevtools initialIsOpen={false} />
          </PersistGate>
        </QueryClientProvider>
      </JotaiProvider>
    </Provider>
  );
}

export default MyApp;
