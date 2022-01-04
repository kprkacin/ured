import type { NextPage } from "next";

import { Layout } from "../components/layout/Layout";
import { GDPRPage } from "../components/privacy/GdprPage";

const Privacy: NextPage = () => {
  return (
    <Layout>
      <GDPRPage />
    </Layout>
  );
};

export default Privacy;
