import Head from "next/head";
import { ToastContainer } from "react-toastify";
import dynamic from "next/dynamic";
import { PropsWithChildren } from "react";

import LayoutMetatag from "@/components/metatag/LayoutMetatag";
import { useAppSelector } from "@/hooks/useRedux";
import useSlidingTab from "@/hooks/useSlidingTab";
import "react-toastify/dist/ReactToastify.css";
import useUI from "@/hooks/useUI";
import AuthModal from "@/components/modal/AuthModal";

const DynamicSlidingInformationTab = dynamic(
  () => import("@/components/sliding-tab/SlidingInformationTab")
);

const DynamicAuthModal = dynamic(
  () => import("@/components/modal/AuthModal")
);

const DynamicSlidingCartTab = dynamic(
  () => import("@/components/sliding-tab/SlidingCartTab")
);

const DynamicAccountDetailsTab = dynamic(
  () => import("@/components/sliding-tab/AccountDetails")
);

export default function LayoutWrapper({ children }: PropsWithChildren<{}>) {
  const { slideTab } = useSlidingTab();
  const { activeProduct } = useAppSelector((state) => state.product);
  const { displayAuthModal, toggleAuthModalHandler } = useUI();
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
      {displayAuthModal && (
        <DynamicAuthModal
          onHide={toggleAuthModalHandler}
          show={displayAuthModal}
        />
      )}
      {slideTab === "SLIDING-INFO" && activeProduct && (
        <DynamicSlidingInformationTab product={activeProduct} />
      )}
      {slideTab === "SLIDING-CART" && <DynamicSlidingCartTab />}
      {slideTab === "SLIDING-ACCOUNT" && <DynamicAccountDetailsTab />}

      {children}
    </div>
  );
}
