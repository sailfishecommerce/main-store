import { PropsWithChildren } from "react";
import { GiCancel } from "react-icons/gi";

interface ModalProps {
  modal: boolean;
  modalHandler: () => void;
  title?: string;
  header?: JSX.Element;
}
export default function Modal({
  modal,
  modalHandler,
  title,
  children,
  header,
}: PropsWithChildren<ModalProps>) {
  return (
    <>
      {modal ? (
        <>
          <div
            role="dialog"
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-5xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="header flex items-center w-full p-5">
                  <div className="flex justify-between relative items-center w-full">
                    {header}
                    <button
                      className="p-1 border-0 absolute right-0 top-0 text-black text-3xl leading-none font-semibold"
                      onClick={modalHandler}
                      aria-label="close"
                    >
                      <GiCancel
                        size={32}
                        aria-label="close"
                        className="mountain-green  font-bold h-6 w-6 text-2xl block outline-none focus:outline-none"
                      />
                    </button>
                  </div>
                </div>
                {title && (
                  <div className="flex relative items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                    <h3 className="text-3xl font-semibold">{title}</h3>
                  </div>
                )}
                <div className="relative p-6 flex-auto">{children}</div>
              </div>
            </div>
          </div>
          <div
            onClick={modalHandler}
            aria-label="close"
            className="opacity-50 fixed inset-0 z-40 bg-black h-full w-full"
          />
        </>
      ) : null}
    </>
  );
}
