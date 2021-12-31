import Head from "next/head";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const Layout: React.FC = ({ children }) => {
  return (
    <div className=" bg-darkgrey font-body scroll-smooth">
      <Head>
        <title>{"ured"}</title>
      </Head>
      <Header />
      <main>
        <div className="container px-6 mx-auto">{children}</div>
      </main>
      <Footer />
    </div>
  );
};
