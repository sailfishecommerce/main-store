import Breadcrumb from "@/components/bread-crumb/Breadcrumb";
import Applayout from "@/layouts/Applayout";
import OrderHistory from "@/components/order/OrderHistory";
import AccountDetail from "@/components/shipping/AccountDetail";
import breadcrumb from "@/json/breadcrumb.json";

export default function Account() {
  return (
    <Applayout title="Account Details">
      <main className="container mx-auto">
        <Breadcrumb breadcrumbItems={breadcrumb.account} />
        <h1 className="text-2xl font-bold mt-8">My Account</h1>
        <OrderHistory />
        <AccountDetail />
      </main>
    </Applayout>
  );
}
