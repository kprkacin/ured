import { SectionHeader } from "../SectionHeader";

export const Map: React.FC = () => {
  return (
    <div className="mx-auto">
      <SectionHeader title="Kako do nas" id="contact" className="mb-4" />
      {/* <iframe
        className="w-full"
        height="450"
        loading="lazy"
        allowFullScreen
        src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJBZCTQconZkcRsrIf1zJHkQA&zoom=19&center=46.163714,16.825985
        &key=${process.env.key}`}
      /> */}
      <iframe
        className="w-full"
        height="450"
        loading="lazy"
        allowFullScreen
        src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ6VBZhhwnZkcRO3S1vT8vw9A&key=${process.env.key}`}
      />
    </div>
  );
};

//src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ6VBZhhwnZkcRO3S1vT8vw9A&key=${process.env.key}`}
