import Applayout from "@/layouts/Applayout";
import CheckoutCustomer from "@/components/checkout";
import Breadcrumb from "@/components/bread-crumb/Breadcrumb";
import breadcrumbContent from '@/json/breadcrumb.json' 

export default function Checkout() {
  return (
    <Applayout title="Checkout - Thanks for shopping with us">
      <main className="mx-auto container">
        <Breadcrumb breadcrumbItems={breadcrumbContent.checkout} />
        <CheckoutCustomer />
      </main>
    </Applayout>
  );
}
