import ReviewOrder from "@/components/checkout/ReviewOrder";
import PaymentMethod from "@/components/checkout/PaymentMethod";
import DeliveryAddress from "@/components/checkout/DeliveryAddress";
import Breadcrumb from "@/components/bread-crumb/Breadcrumb";
import breadcrumbContent from "@/json/breadcrumb.json";

export default function index() {
  return (
    <div className="w-full bg-gray-100 mx-auto p-4 pb-8">
      <div className="container flex flex-col mx-auto">
        <Breadcrumb breadcrumbItems={breadcrumbContent.checkout} />
        <div className="content flex flex-col md:flex-row md:flex-wrap w-full mx-auto">
          <ReviewOrder />
          <DeliveryAddress />
          <PaymentMethod />
        </div>
      </div>
    </div>
  );
}
