import Head from "next/head";
import { ToastContainer } from "react-toastify";
import dynamic from "next/dynamic";

import LayoutMetatag from "@/components/metatag/LayoutMetatag";
import { PropsWithChildren } from "react";
import { useAppSelector } from "@/hooks/useRedux";
import useSlidingTab from "@/hooks/useSlidingTab";
import "react-toastify/dist/ReactToastify.css";

const DynamicSlidingInformationTab = dynamic(
  () => import("@/components/sliding-tab/SlidingInformationTab")
);

const DynamicSlidingCartTab = dynamic(
  () => import("@/components/sliding-tab/SlidingCartTab")
);

export default function LayoutWrapper({ children }: PropsWithChildren<{}>) {
  const { slideTab } = useSlidingTab();
  const { activeProduct } = useAppSelector((state) => state.product);
  return (
    <div className="relative">
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
      {slideTab === 'SLIDING-INFO' && activeProduct && (
        <DynamicSlidingInformationTab product={activeProduct} />
      )}
      {slideTab === 'SLIDING-CART' && <DynamicSlidingCartTab />}
      {children}
    </div>
  );
}
