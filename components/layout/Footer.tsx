export const Footer: React.FC = ({ children }) => {
  return (
    <div className="w-full mb-10 bg-white after:w-full after:m-auto after:block after:col-span-3 after:border-b after:border-b-1-black">
      <div className="container grid items-start w-full grid-cols-3 gap-6 px-6 pt-10 mx-auto mb-10 ">
        <div className="w-4/6 col-span-full md:col-span-1 md:w-full lg:w-1/2 lg:col-span-1">
          <div className="w-1/2 md:w-full">
            <img className="" src="./logo.png" alt="Logo.png" />
          </div>
        </div>
        <div className="col-span-full md:col-span-2 lg:col-span-1">
          <p className="text-gray-500">
            Odvjetnik Zoran Švaco i njegov tim pružaju Vam stručno pravno
            savjetovanje. Kao moderan ured svakodnevno i kontinuirano proširuju
            područja pravne pomoći i spektar pružanja pravnih usluga.
          </p>
        </div>
        <div className="flex flex-col justify-start text-left md:justify-between md:flex-row lg:flex-col col-span-full md:text-center lg:col-span-1 lg:justify-end lg:text-right">
          <h4 className="mb-2 text-xl font-semibold text-gold">099 6735 700</h4>
          <h4 className="mb-2 font-semibold text-gray-500 text-medium">
            zoran.svaco@gmail.com
          </h4>
          <h4 className="font-semibold text-gray-500 text-medium">
            Josipa Vargovića 2/l <br />
            48 000 Koprivnica{" "}
          </h4>
        </div>
      </div>
    </div>
  );
};
