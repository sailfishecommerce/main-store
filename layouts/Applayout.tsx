import Head from "next/head";
import { PropsWithChildren } from "react";
import Footer from "@/components/footer";
import Header from "@/components/header";

interface Props {
  title: string;
}

export default function Applayout({
  children,
  title,
}: PropsWithChildren<Props>) {
  return (
    <>
      <Head>
        <title>{title} | Live healthy e-commerce online store </title>
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  );
}
