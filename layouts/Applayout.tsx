import Head from "next/head";
import { PropsWithChildren } from "react";

import Footer from "@/components/footer";
import Header from "@/components/header";
import LayoutWrapper from "@/layouts/LayoutWrapper";

interface Props {
  title: string;
}

export default function Applayout({
  children,
  title,
}: PropsWithChildren<Props>) {
  return (
    <LayoutWrapper>
      <Head>
        <title>{title} | Live healthy e-commerce online store </title>
      </Head>
      <Header />
      {children}
      <Footer />
    </LayoutWrapper>
  );
}
