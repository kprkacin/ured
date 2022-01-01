import { Formik, Form, Field, ErrorMessage } from "formik";
import emailjs from "emailjs-com";
import { useRef } from "react";

export const ContactForm: React.FC = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = async () => {
    try {
      await emailjs
        .sendForm(
          "service_0n0mqcy",
          "contact_form",
          form.current || "",
          "user_F3XWRNln9CEiSB0e7Kvmi"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    } catch (error) {
      console.log(error);
    }
  };

  const validateForm = (values: FormValues) => {
    const errors: any = {};
    if (!values.email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }
    if (!values.firstName) {
      errors.firstName = "Required";
    }
    if (!values.lastName) {
      errors.lastName = "Required";
    }
    if (!values.phone) {
      errors.phone = "Required";
    }
    return errors;
  };
  return (
    <div className="flex flex-col justify-between mx-auto md:flex-row my-14">
      <div className="w-full mb-10 text-white md:w-1/2">
        <h1 className="pb-5 text-2xl font-semibold">Zatražite konzultacije</h1>
        <p>
          Ukoliko ste zainteresirani za pravnu pomoć u Odvjetničkom uredu Zoran
          Švaco, ispunite formular i pošaljite opis problema putem online forme.
          Javit ćemo Vam se u najkraćem mogućem roku.
        </p>
      </div>
      <div className="w-full bg-white md:w-1/2">
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            message: "",
          }}
          validate={validateForm}
          onSubmit={(values, { setSubmitting }) => {
            sendEmail();
            setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <Form ref={form}>
              <div className="grid grid-cols-2 gap-5 px-8 py-4">
                <div className="col-span-2 md:col-span-1">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="firstName"
                  >
                    Ime
                  </label>
                  <Field
                    className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    type="text"
                    name="firstName"
                  />
                  <ErrorMessage name="firstName" component="div" />
                </div>
                <div className="col-span-2 md:col-span-1">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="username"
                  >
                    Prezime
                  </label>
                  <Field
                    className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    type="text"
                    name="lastName"
                  />
                  <ErrorMessage name="lastName" component="div" />
                </div>
                <div className="col-span-2 md:col-span-1">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <Field
                    className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    type="email"
                    name="email"
                  />
                  <ErrorMessage name="email" component="div" />
                </div>
                <div className="col-span-2 md:col-span-1">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="phone"
                  >
                    Broj Telefona
                  </label>
                  <Field
                    className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    type="text"
                    name="phone"
                  />
                  <ErrorMessage name="phone" component="div" />
                </div>
                <div className="col-span-2">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="phone"
                  >
                    Message
                  </label>
                  <Field
                    as={"textarea"}
                    className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    type="text"
                    name="message"
                    rows="4"
                    cols="50"
                  />
                  <ErrorMessage name="message" component="div" />
                </div>

                <div className="col-span-2 justify-self-end ">
                  <button type="submit" disabled={isSubmitting}>
                    Submit
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}
