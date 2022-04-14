import { FaTimes } from "react-icons/fa";
import { PropsWithChildren } from "react";

import useSlidingTab from "@/hooks/useSlidingTab";

export default function SlidingTab({ children }: PropsWithChildren<{}>) {
  const { updateSlideTab} = useSlidingTab()
  

  return (
    <aside className="fixed flex z-50 justify-between h-screen items-center w-full right-0 top-0">
      <div
        onClick={() => updateSlideTab(null)}
        className="overlay w-2/3 flex cursor-pointer h-full"
      ></div>
      <div className="fixed top-0 items-start bg-white z-50 flex flex-col sliding-tab w-1/3 h-full">
        <button
          onClick={() => updateSlideTab(null)}
          className="text-black absolute p-1 top-5 right-10 hover:text-white hover:bg-red-500 hover:rounded-full"
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
