import { smoothScroll } from "../../helpers/helpers";

export const Hero: React.FC = () => {
  return (
    <div className="py-16 mx-auto ">
      <div className="grid grid-cols-4">
        <div className="flex flex-col items-start justify-center col-span-4 mt-10 md:row-start-2 lg:row-start-1 lg:col-span-1">
          <h1 className="text-xl font-semibold text-white lg:text-2xl">
            Odvjetnički ured Zoran Švaco u pretežitom dijelu bavi se područjem
            građanskog prava te pruža stručnu pravnu pomoć fizičkim i pravnim
            osobama.
          </h1>
          <button
            onClick={() => smoothScroll("consultation")}
            className="p-2 mt-10 text-white transition-all duration-500 border hover:opacity-70 border-gold hover:bg-gold"
          >
            Konzultacije
          </button>
        </div>
        <div className="col-span-4 md:col-span-2">
          <img className="w-full h-full" src="./lawyer.png" alt="Laywer.png" />
        </div>
        <div className="flex flex-col items-start justify-center col-span-4 pt-8 lg:pt-0 md:col-span-2 lg:col-span-1">
          <div className="flex flex-row">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              className="mr-3"
              height="28"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#D7AF75"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <circle cx="12" cy="11" r="3" />
              <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
            </svg>
            <div className="flex flex-col ">
              <p className="text-white ">Adresa ureda</p>
              <h1 className="font-semibold text-white uppercase ">
                Josipa Vargovića 2/l <br />
                48 000 Koprivnica
              </h1>
            </div>
          </div>
          <div className="flex flex-row mt-7">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              className="mr-3"
              height="28"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#D7AF75"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <circle cx="12" cy="12" r="9" />
              <polyline points="12 7 12 12 15 15" />
            </svg>
            <div className="flex flex-col ">
              <p className="text-white ">Radno vrijeme sa strankama</p>
              <h1 className="font-semibold text-white uppercase ">
                Pon - Pet (7:30 - 13:30)
                <br />I po dogovoru
              </h1>
            </div>
          </div>
          <div className="flex flex-row mt-7">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              className="mr-3"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#D7AF75"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
            </svg>
            <div className="flex flex-col ">
              <p className="text-white ">Telefon/fax:</p>
              <h1 className="font-semibold text-white uppercase ">
                099/6735-700
              </h1>
              <h1 className="font-semibold text-white uppercase ">
                048/853-706
              </h1>
            </div>
          </div>
          <div className="flex flex-row mt-7">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              className="mr-3"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#D7AF75"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <polyline points="3 7 12 13 21 7" />
            </svg>
            <div className="flex flex-col ">
              <p className="text-white ">Mail</p>
              <h1 className="font-semibold text-white">
                zoran.svaco@gmail.com
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
