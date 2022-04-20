import Image from "next/image";

import BankTransferPaymentMethod from "@/components/payment/BankTransferPaymentMethod";
import AirwallexPaymentMethod from "@/components/payment/AirwallexPaymentMethod";
import PaymentWithStripe from "@/components/payment/PaymentWithStripe";

export default function SelectPaymentMethod() {
  return (
    <div className="flex w-full flex-col bg-white rounded-md p-4 mb-2 h-full">
      <div className="payment-methods flex items-center justify-between">
        <h3 className="font-semibold text-xl mb-4">
          3.Payment method & Order Total
        </h3>{" "}
      </div>
      <>
        <PaymentWithStripe title="Stripe" isGray={false} />
        <AirwallexPaymentMethod isGray={false} />
        <BankTransferPaymentMethod isGray={false} />
      </>
    </div>
  );
}
