import accountDetails from "@/json/account-details-form.json";
import Button from "@/components/button";
import useSlidingTab from "@/hooks/useSlidingTab";

export default function AccountDetail() {
  const { updateSlideTab } = useSlidingTab();

  return (
    <div className="account-details">
      <h3 className="font-bold text-xl mb-4">Account Details</h3>
      <ul className="details mb-6">
        {accountDetails.accountData.map((data, index) => (
          <li key={index} className="flex flex-col">
            <p className="mb-0">{data.text}</p>
            <p className="font-medium">{data.value}</p>
          </li>
        ))}
      </ul>
      <div className="button-group flex items-center mb-14">
        <Button
          type="button"
          onClick={() => updateSlideTab("SLIDING-ACCOUNT")}
          text="Change account info"
          className="light-green mr-8"
        />
        <Button
          type="button"
          onClick={() => updateSlideTab("SLIDING-ACCOUNT")}
          text="Change Shipping / Billing Address"
          className="plain"
        />
      </div>
    </div>
  );
}
