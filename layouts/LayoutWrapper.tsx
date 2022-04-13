import Head from "next/head";
import { ToastContainer } from "react-toastify";

import LayoutMetatag from "@/components/metatag/LayoutMetatag";
import { PropsWithChildren } from "react";

export default function LayoutWrapper({children}:PropsWithChildren<{}>) {
  return (
    <>
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
      {children}
    </>
  );
}
