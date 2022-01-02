import Head from "next/head";
import { Toaster } from "react-hot-toast";

import { Footer } from "./Footer";
import { Header } from "./Header";

export const Layout: React.FC = ({ children }) => {
  return (
    <div className=" bg-darkgrey font-body scroll-smooth">
      <Head>
        <title>{"Odvjetnički ured Zoran Švaco"}</title>
        <link rel="icon" href="../../public/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Toaster position="top-right" />
        <div className="max-w-[90%] px-6 mx-auto">{children}</div>
      </main>
      <Footer />
    </div>
  );
};
