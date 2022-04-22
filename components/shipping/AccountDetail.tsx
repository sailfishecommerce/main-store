import accountDetails from "@/json/account-details-form.json";
import Button from "@/components/button";
import useSlidingTab from "@/hooks/useSlidingTab";

export default function AccountDetail() {
  const { updateSlideTab } = useSlidingTab();

  return (
    <div className="account-details">
      <h3 className="font-bold md:text-xl mb-4 text-lg">Account Details</h3>
      <ul className="details mb-4 md:mb-6 ">
        {accountDetails.accountData.map((data, index) => (
          <li key={index} className="flex flex-col my-2">
            <p className="mb-0">{data.text}</p>
            <p className="font-medium">{data.value}</p>
          </li>
        ))}
      </ul>
      <div className="button-group flex flex-col md:flex-row  items-center mb-14">
        <Button
          type="button"
          onClick={() => updateSlideTab("SLIDING-ACCOUNT")}
          text="Change account info"
          className="light-green my-2 md:mr-8 w-full md:w-1/4"
        />
        <Button
          type="button"
          onClick={() => updateSlideTab("SLIDING-ACCOUNT")}
          text="Change Shipping / Billing Address"
          className="plain my-2 w-full md:w-1/4"
        />
      </div>
    </div>
  );
}
