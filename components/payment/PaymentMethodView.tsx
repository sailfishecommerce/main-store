import Image from "next/image";

export default function PaymentMethodView() {
  const paymentMethodIcons = [
    "/visa.png",
    "/mastercard.png",
    "/paypal.png",
    "/american-express.png",
    "/bank-transfer.png",
  ];
  return (
    <div className="flex flex-col">
      <h5 className="text-lg my-2">Payment methods</h5>
      <div className="payment-icons flex items-center my-2">
        {paymentMethodIcons.map((item, index) => (
          <div key={index} className="w-1/6">
            <Image src={item} height={30} alt="payment-icon" width={100} />
          </div>
        ))}
      </div>
      <p className="gray-lavender">
        We accept bank deposits through all major networks globally including
        AHC, Fedwire, SWIFT, IBAN and BSB. Orders shipped after new partners are
        manually verified. Additional documentation might be requested
      </p>
    </div>
  );
}
