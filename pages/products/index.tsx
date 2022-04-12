import ProductBreadcrumb from "@/components/bread-crumb/ProductBreadcrumb";
import Applayout from "@/layouts/Applayout";

import React from "react";

export default function index() {
  return (
    <Applayout>
      <main className="container mx-auto">
        <ProductBreadcrumb breadcrumbItem="Blackmores Vitamin B12 (Cyanocobalamin) 100mcg 75 Tablets" />
      </main>
    </Applayout>
  );
}
