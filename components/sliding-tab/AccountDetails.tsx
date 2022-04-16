import SlidingTab from "@/components/sliding-tab";
import AccountDetailsForm from "@/components/form/AccountDetailsForm";
import SaveShippingAddress from "@/components/shipping/SaveShippingAddress";

export default function AccountDetails() {
  return (
    <SlidingTab>
      <div className="header h-40 flex items-end bg-mountain-green p-4 w-full px-8">
        <h3 className="font-bold text-md text-white text-xl 2xl:mr-4">
          Account Details
        </h3>
      </div>
      <div className="content px-8 w-full mx-auto">
      <AccountDetailsForm />
      <SaveShippingAddress />
      </div>
    </SlidingTab>
  );
}
