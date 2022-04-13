import Head from "next/head";
import { ToastContainer } from "react-toastify";
import dynamic from "next/dynamic";

import LayoutMetatag from "@/components/metatag/LayoutMetatag";
import { PropsWithChildren } from "react";
import { useAppSelector } from "@/hooks/useRedux";

const DynamicSlidingInformationTab = dynamic(
  () => import("@/components/sliding-tab/SlidingInformationTab")
);

export default function LayoutWrapper({ children }: PropsWithChildren<{}>) {
  const { viewProductInfoVisibility, activeProduct } = useAppSelector(
    (state) => state.product
  );
  return (
    <body className="relative">
      <Head>
        <link
          href="https://CZT5MA7JLJ-dsn.algolia.net"
          rel="preconnect"
          crossOrigin="true"
        />
      </Head>
      <LayoutMetatag />
      <div data-aos="fade-up" id="head" />
      <ToastContainer />
      {viewProductInfoVisibility && activeProduct && (
        <DynamicSlidingInformationTab product={activeProduct} />
      )}
      {children}
    </body>
  );
}
