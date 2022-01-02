import { Formik, Form, Field, ErrorMessage } from "formik";
import emailjs from "emailjs-com";
import { useRef } from "react";
import toast from "react-hot-toast";

import { SectionHeader } from "../SectionHeader";
import { ErrorMessageCustom } from "./ErrorMessageCustom";

export const ContactForm: React.FC = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = async () => {
    try {
      await emailjs.sendForm(
        "service_0n0mqcy",
        "contact_form",
        form.current || "",
        "user_F3XWRNln9CEiSB0e7Kvmi"
      );
      toast.success("Poruka uspješno poslana!");
      form.current?.reset();
    } catch (error) {
      toast.error(
        "Došlo je do poteškoča, molimo pokušajte ponovno ili nas nazovite!"
      );
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
    if (!values.area) {
      errors.area = "Required";
    }
    return errors;
  };
  return (
    <div className="flex flex-col justify-between mx-auto md:flex-row my-14">
      <div className="w-full md:w-1/2">
        <SectionHeader
          title="Zatražite Konzultacije"
          id="consultation"
          headerClassName="w-full md:w-3/6 lg:w-4/6"
          className="flex-grow mb-4"
        />
        <div className="w-full mb-10 text-white md:w-4/6">
          <p>
            Ukoliko ste zainteresirani za pravnu pomoć u Odvjetničkom uredu
            Zoran Švaco, ispunite formular i pošaljite opis problema putem
            online forme.
          </p>
          <br />
          <p>Javit ćemo Vam se u najkraćem mogućem roku.</p>
        </div>
      </div>
      <div className="w-full bg-white md:w-1/2">
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            message: "",
            area: "",
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
                  <ErrorMessage
                    name="firstName"
                    component={ErrorMessageCustom}
                  />
                  <Field
                    className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    type="text"
                    name="firstName"
                  />
                </div>
                <div className="col-span-2 md:col-span-1">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="username"
                  >
                    Prezime
                  </label>
                  <ErrorMessage
                    name="lastName"
                    component={ErrorMessageCustom}
                  />
                  <Field
                    className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    type="text"
                    name="lastName"
                  />
                </div>
                <div className="col-span-2 md:col-span-1">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <ErrorMessage name="email" component={ErrorMessageCustom} />
                  <Field
                    className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    type="email"
                    name="email"
                  />
                </div>
                <div className="col-span-2 md:col-span-1">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="phone"
                  >
                    Broj Telefona
                  </label>
                  <ErrorMessage name="phone" component={ErrorMessageCustom} />
                  <Field
                    className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    type="text"
                    name="phone"
                  />
                </div>
                <div className="col-span-2 ">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="phone"
                  >
                    Pravno područje
                  </label>
                  <ErrorMessage name="area" component={ErrorMessageCustom} />
                  <Field
                    className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    as="select"
                    name="area"
                  >
                    {selectOptions.map((so) => (
                      <option value={so}>{so}</option>
                    ))}
                  </Field>
                </div>
                <div className="col-span-2">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="phone"
                  >
                    Poruka
                  </label>
                  <ErrorMessage name="message" component={ErrorMessageCustom} />
                  <Field
                    as={"textarea"}
                    className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    type="text"
                    name="message"
                    rows="4"
                    cols="50"
                  />
                </div>
                <div className="col-span-2 justify-self-end ">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="p-2 px-6 text-black transition-all duration-500 border hover:opacity-70 border-gold hover:bg-gold"
                  >
                    Pošalji
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
  area: string;
}

const selectOptions = [
  "",
  "Zemljišno-knjižno pravo (nekretnine)",
  "Ugovorno pravo",
  " Izvanugovorni odnosi",
  "Obiteljsko pravo",
  "Naknade šteta",
  " Obvezno pravo",
  " Ovršno pravo",
  " Prekršajno pravo",
  " Radno pravo",
  " Stvarno pravo",
  " Upravno pravo",
  " Kazneno pravo]",
];
