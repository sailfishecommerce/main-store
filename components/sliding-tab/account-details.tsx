import SlidingTab from "@/components/sliding-tab";

export default function AccountDetails() {
  return (
    <SlidingTab>
      <div className="header h-40 flex items-end bg-mountain-green p-4 w-full">
        <h3 className="font-bold text-md 2xl:text-xl 2xl:mr-4 mx-2">
          Account Details
        </h3>
      </div>
    </SlidingTab>
  );
}
