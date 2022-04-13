import { QueryClient, QueryClientProvider } from "react-query";
import AOS from "aos";
import { Provider } from "react-redux";
import { useEffect } from "react";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { ReactQueryDevtools } from "react-query/devtools";

import store from "@/redux/store";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Nprogress from "@/components/loader/Nprogress";

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  const persistor = persistStore(store);

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
      <QueryClientProvider client={queryClient}>
        <PersistGate loading={null} persistor={persistor}>
          <Nprogress
            color="#95bf11"
            options={{ showSpinner: true }}
            height={3}
          />
          <Component {...pageProps} />
          <ReactQueryDevtools initialIsOpen={false} />
        </PersistGate>
      </QueryClientProvider>
    </Provider>
  );
}

export default MyApp;
