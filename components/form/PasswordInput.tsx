import { inputContentType } from "@/types";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

interface Props {
  passwordVisibilityHandler: () => void;
  showPassword: boolean;
  formik: {
    handleBlur: () => void;
    handleChange: () => void;
    values: any;
  };
  content: inputContentType;
}

export default function PasswordInput({
  content,
  formik,
  passwordVisibilityHandler,
  showPassword,
}: Props) {
  const passwordVisibilty = showPassword ? "text" : "password";
  return (
    <div className="password-toggle relative">
      <input
        className="w-full border border-gray-200 px-2 rounded-md h-10 focus:text-gray-700 focus:bg-white focus:border-red-500 focus:outline-none"
        type={passwordVisibilty}
        name={content.name}
        placeholder={content.placeholder}
        id={content.id}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[content.name]}
      />
      <button
        onClick={passwordVisibilityHandler}
        className="absolute right-4 top-2.5"
        aria-label="show/hide-password"
      >
        {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
      </button>
    </div>
  );
}
