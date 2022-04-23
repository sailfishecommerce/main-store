import { Formik } from "formik";
import Link from "next/link";

import { useAppDispatch } from "@/hooks/useRedux";
import { signinFormSchema } from "@/components/form/schema/AuthSchema";
import { displayFormElement } from "@/components/form/FormElement";
import { useAuth } from "@/hooks";
import { toggleAuthModal } from "@/redux/ui-slice";
import authContent from "@/json/authForm.json";

export default function SigninForm() {
  const { signIn } = useAuth();
  const dispatch = useAppDispatch();

  function toggleAuthmodal() {
    dispatch(toggleAuthModal());
  }
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={signinFormSchema}
      onSubmit={(values, formik) => signIn(values, formik)}
    >
      {(formik) => (
        <form
          className="w-full"
          autoComplete="off"
          noValidate
          onSubmit={formik.handleSubmit}
          id="signin-tab"
        >
          {authContent.signIn.map((content, index) => (
            <div key={index} className="flex flex-col w-100">
              {displayFormElement(content, formik)}
            </div>
          ))}
          <div className="mb-3 flex flex-wrap justify-between">
            <Link href="/account-password-recovery" passHref>
              <a
                aria-label="forgot password?"
                onClick={toggleAuthmodal}
                title="Forgot password"
                className="fs-sm mountain-green"
              >
                Forgot password?
              </a>
            </Link>
          </div>
          <button
            aria-label="Sign in"
            className="bg-mountain-green mx-auto rounded-md text-white px-3 py-2 flex"
            type="submit"
            title="Sign in"
          >
            Sign in
          </button>
        </form>
      )}
    </Formik>
  );
}
