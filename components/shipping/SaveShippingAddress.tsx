import AccountDetailsFormContent from "@/json/account-details-form.json";
import Input from "@/components/form/form-elements/Input";

export default function SaveShippingAddress() {
  return (
    <div className="shipping-address my-6">
      <h3 className="text-xl font-medium my-4">Shipping / Billing Address</h3>
      <form>
        {AccountDetailsFormContent.ShippingAddress.map((content, index) => (
          <Input content={content} key={index} />
        ))}
        <button
          type="button"
          className="saveInformation border hover:text-white font-bold rounded-xl w-full p-3 mt-2"
        >
          Save account Information
        </button>
      </form>
      <style jsx>
        {`
          .saveInformation:hover {
            background-color: var(--mountain-green);
          }
        `}
      </style>
    </div>
  );
}
