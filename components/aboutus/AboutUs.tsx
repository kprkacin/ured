import { AboutOffice } from "./AboutOffice";
import { AboutPerson } from "./AboutPerson";
import { SectionHeader } from "../SectionHeader";

export const AboutUs: React.FC = () => {
  const arr = [1, 2, 3, 4, 5];
  return (
    <div className="mt-20">
      <SectionHeader title="O nama" className="mb-4" id="about" />
      <AboutOffice />
      <AboutPerson />
    </div>
  );
};
