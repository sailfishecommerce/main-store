import CategorySidebarList from "@/components/dropdown/CategorySidebarList";
import CategoryMainList from "@/components/dropdown/CategoryMainList";

interface Props {
  updateDropdown: () => void;
}

export default function AllCategoriesDropdownView({ updateDropdown }: Props) {
  return (
    <div className="sticky z-50 w-full bg-white h-full left-0 top-60 flex flex-col">
      <div className="content bg-white h-3/5 z-40 left-0 top-20 mx-auto flex justify-start justify-between container">
        <CategorySidebarList />
        <CategoryMainList />
      </div>
      <div
        onClick={updateDropdown}
        className="overlay-wrapper cursor-pointer flex z-50 w-full  flex left-0"
      ></div>
      <style jsx>
        {`
          .content {
            height: 60vh;
          }
          .overlay-wrapper {
            background: rgba(8, 7, 8, 0.32);
            height: 40vh;
          }
        `}
      </style>
    </div>
  );
}
