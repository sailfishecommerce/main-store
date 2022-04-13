import { FaTimes } from "react-icons/fa";
import type { productType } from "@/types";
import { useAppDispatch } from "@/hooks/useRedux";
import { updateProductInfoVisibility } from "@/redux/product-slice";

interface Props {
  product: productType;
}

export default function SlidingInformation({ product }: Props) {
  const tabTitle = [
    "Product Information",
    "Storage Instructions",
    "Directions",
  ];
  const dispatch = useAppDispatch();
  function closeSlidingTab() {
    dispatch(updateProductInfoVisibility(false));
  }

  return (
    <aside className="fixed flex z-50 justify-between h-screen items-center w-full right-0 top-0">
      <div
        onClick={closeSlidingTab}
        className="overlay w-2/3 flex cursor-pointer"
      ></div>
      <div className="border border-gray-100 sliding-tab w-1/3">
        <div className="header h-52 flex items-end bg-mountain-green p-4 w-full">
          <button
            onClick={closeSlidingTab}
            className="text-white absolute top-10 right-10 hover:text-green-600 hover:bg-white hover:rounded-full"
          >
            <FaTimes size={30} />
          </button>
          {tabTitle.map((title, index) => {
            const tabStyle = index === 0 ? "text-white" : "text-gray-300";
            return (
              <h3
                key={index}
                className={`${tabStyle} font-bold text-md 2xl:text-xl 2xl:mr-4 mx-2`}
              >
                {title}
              </h3>
            );
          })}
        </div>
        <div
          className="text-content bg-white px-6 pb-16"
          dangerouslySetInnerHTML={{
            __html: product["description"],
          }}
        />
      </div>
      <style jsx>
        {`
          .overlay {
            background-color: rgba(0, 0, 0, 0.4);
            height: 100vh;
            left: 0;
            top: 0%;
          }
          .sliding-tab {
            right: 0;
          }
          .text-content {
            overflow-y: auto;
            height: 80vh;
          }
        `}
      </style>
    </aside>
  );
}
