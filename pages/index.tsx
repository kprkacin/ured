import type { NextPage } from "next";
import emailjs from "emailjs-com";
import { AboutUs } from "../components/aboutus/AboutUs";
import { ContactForm } from "../components/contact/ContactForm";
import { Map } from "../components/contact/Map";
import { Hero } from "../components/layout/Hero";
import { Layout } from "../components/layout/Layout";
import { WhatWeDo } from "../components/worksection/WhatWeDo";

const Home: NextPage = () => {
  emailjs.init(`${process.env.emailjs_id}`);

  return (
    <Layout>
      <Hero />
      <WhatWeDo />
      <AboutUs />
      <Map />
      <ContactForm />
    </Layout>
  );
};

export default Home;
