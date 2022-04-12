import Image from "next/image";

export default function PaymentMethodView() {
  const paymentMethodIcons = [
    "/visa.png",
    "/mastercard.png",
    "/paypal.png",
    "/american-express.png",
    "/bank-transfer.pn",
  ];
  return (
    <div className="flex flex-col">
      <h5 className="text-lg">Payment methods</h5>
      <div className="payment-icons flex items-center justify-between">
        {paymentMethodIcons.map((item, index) => (
          <Image src={item} key={index} height={20} width={20} />
        ))}
      </div>
      <p className="gray-platinum">
        We accept bank deposits through all major networks globally including
        AHC, Fedwire, SWIFT, IBAN and BSB. Orders shipped after new partners are
        manually verified. Additional documentation might be requested
      </p>
    </div>
  );
}
