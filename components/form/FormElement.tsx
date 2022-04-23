import dynamic from "next/dynamic";
import { useState } from "react";
import PasswordInput from "@/components/form/PasswordInput";
import { inputContentType } from "@/types";

const SelectCountries = dynamic(
  () => import("@/components/form/SelectCountries")
);
const SearchLocationInput = dynamic(
  () => import("@/components/form/SearchLocationInput")
);

const Select = dynamic(() => import("@/components/form/Select"));

interface Props {
  content: inputContentType;
  formik: any;
  className?: string;
  withIcon?: string;
}

export function Input({ content, formik, className }: Props) {
  const [showPassword, setShowPassword] = useState(false);
  function passwordVisibilityHandler() {
    setShowPassword(!showPassword);
  }
  const passwordInputType = showPassword ? "text" : "password";
  const inputClassName = className ? className : "mb-3";
  return (
    <div className={`${inputClassName} mb-3 flex flex-col mx-2`}>
      {content.label && (
        <label className="text-md text-gray-400 mb-1" htmlFor={content.name}>
          {content.label}
        </label>
      )}
      {content.inputText !== "password" ? (
        <input
          className="border border-gray-200 px-2 rounded-md h-10 focus:text-gray-700 focus:bg-white focus:border-red-500 focus:outline-none"
          type={content.inputText}
          id={content.id}
          name={content.name}
          onChange={formik.handleChange}
          placeholder={content.placeholder}
          onBlur={formik.handleBlur}
          value={formik.values[content.name]}
        />
      ) : (
        <PasswordInput
          content={content}
          formik={formik}
          passwordVisibilityHandler={passwordVisibilityHandler}
          showPassword={showPassword}
        />
      )}
      <p className="text-red-500 text-sm">
        {formik.errors[content.name] &&
          formik.touched[content.name] &&
          formik.errors[content.name]}
      </p>
    </div>
  );
}

export function TextArea({ content, formik }: Props) {
  return (
    <div className="textarea flex flex-col">
      <textarea
        className="border-2 border-gray-200 rounded-md"
        rows={5}
        onChange={formik.handleChange}
        name={content.name}
        value={formik.values[content.name]}
        placeholder={content.placeholder}
      ></textarea>
      <p className="text-red-500 text-sm">
        {formik.errors[content.name] &&
          formik.touched[content.name] &&
          formik.errors[content.name]}
      </p>
    </div>
  );
}

export function displayFormElement(
  content: any,
  _formik: any,
  className?: string,
  withIcon?: string
) {
  switch (content.type) {
    case "input": {
      return (
        <Input
          content={content}
          formik={_formik}
          className={className}
          withIcon={withIcon}
        />
      );
    }
    case "select": {
      return <Select content={content} formik={_formik} />;
    }
    case "selectCountry": {
      return <SelectCountries content={content} formik={_formik} />;
    }
    case "searchLocationInput": {
      return <SearchLocationInput formik={_formik} />;
    }
    case "textarea": {
      return <TextArea content={content} formik={_formik} />;
    }
  }
}
