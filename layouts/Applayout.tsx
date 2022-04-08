import { PropsWithChildren } from "react";
import Footer from "@/components/footer";
import Header from "@/components/header";

export default function Applayout({ children }: PropsWithChildren<any>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
