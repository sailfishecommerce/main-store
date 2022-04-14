import { FaTimes } from "react-icons/fa";
import { useAppDispatch } from "@/hooks/useRedux";
import { updateProductInfoVisibility } from "@/redux/product-slice";
import { PropsWithChildren } from "react";

export default function SlidingTab({ children }: PropsWithChildren<{}>) {
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
      <div className="fixed top-0 items-start bg-white z-50 flex flex-col sliding-tab w-1/3">
        <button
          onClick={closeSlidingTab}
          className="text-white absolute top-5 right-10 hover:text-green-600 hover:bg-white hover:rounded-full"
        > 
          <FaTimes size={30} />
        </button>
        {children}
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
