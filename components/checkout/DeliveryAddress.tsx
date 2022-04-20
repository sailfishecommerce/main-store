import { Formik } from "formik";

import { checkoutFormSchema } from "@/components/form/schema/CheckoutFormSchema";
import checkoutFormContent from "@/json/checkout-form.json";
import { displayFormElement } from "@/components/form/FormElement";
import { useAppDispatch } from "@/hooks/useRedux";
import { AddressInputGroup } from "@/components/form/FormFields";
import { updatePaymentForm } from "@/redux/payment-slice";
import useShippingPayment from "@/hooks/useShippingPayment";

export default function DeliveryAddress() {
  const { formValues } = useShippingPayment();
  const dispatch = useAppDispatch();

  return (
    <div className="w-full bg-white h-fullx md:w-1/2 lg:w-1/3 p-4 mx-4 rounded-md">
      <h3 className="font-semibold mb-2 text-xl mr-2">2. Specify Details</h3>
      <p className="mb-4 text-sm">All fields required</p>

      <div className="delivery-form">
        <Formik
          enableReinitialize
          initialValues={formValues}
          validationSchema={checkoutFormSchema}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(false);
            dispatch(updatePaymentForm({ form: values, completed: true }));
          }}
        >
          {(formik) => (
            <form onSubmit={formik.handleSubmit}>
              <div>
                {checkoutFormContent.personalDetails.content.map(
                  (formRow, index) => (
                    <div key={index} className="flex flex-wrap">
                      {formRow.map((formInput, index) => (
                        <div key={index} className="w-full">
                          {displayFormElement(formInput, formik)}
                        </div>
                      ))}
                    </div>
                  )
                )}
                <AddressInputGroup formik={formik} />
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}
