import { SpinnerRoller } from "@/components/loader/SpinnerLoader";

interface buttonProps {
  disable: boolean;
  className: string;
  onClick?: () => void;
  loading: boolean;
  text: string;
  type?: "submit" | "reset" | "button";
}

export default function AppButton({
  disable,
  className,
  onClick,
  loading,
  text,
  type,
}: buttonProps) {
  const disableBtn = disable ? disable : false;
  const loadingState = loading ? "loading" : "";
  const btnType = type ? type : "button";
  return (
    <button
      className={`btn position-relative flex justify-center items-center ${className}`}
      disabled={disableBtn}
      onClick={onClick}
      type={btnType}
      aria-label="button"
    >
      {loading && (
        <span>
          <SpinnerRoller />
        </span>
      )}
      <p className={`mb-0 text-truncate ${loadingState}`}>
        {loading ? "Submitting ..." : text}
      </p>
      <style jsx>
        {`
          .loading {
            margin-left: 35px;
          }
        `}
      </style>
    </button>
  );
}
