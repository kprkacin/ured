import { useEffect, useState } from "react";
import clsx from "clsx";

import { NavbarItems } from "./NavbarItems";
import { smoothScroll } from "../../helpers/helpers";
import { useRouter } from "next/router";
import Link from "next/link";

export const Navbar: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  const router = useRouter();

  const setHeroRibbonTopOffset = () => {
    const element = document.getElementsByClassName("customNavClass")[0];

    const scrollY = window ? window.scrollY : 0;

    if (scrollY === 0 && element.classList.contains("shadow-2xl")) {
      element.classList.remove(
        "shadow-2xl",
        "bg-lightgrey",
        "after:border-none"
      );
    }

    if (scrollY !== 0 && !element.classList.contains("shadow-2xl")) {
      element.classList.add("shadow-2xl", "bg-lightgrey", "after:border-none");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", setHeroRibbonTopOffset, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", setHeroRibbonTopOffset);
    };
  }, []);

  const scrollIntoElement = (id?: string) => () => {
    if (setShowMenu) {
      setShowMenu(false);
    }
    smoothScroll(id);
  };

  return (
    <nav
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 py-2 after:w-[95%] transition-all duration-500 after:m-auto after:block after:border-b after:border-b-[#c8c8dc]/30 customNavClass"
      )}
    >
      <div className="container flex justify-between px-6 py-3 mx-auto">
        {router.route === "/privacy" ? (
          <Link href="/" passHref>
            <div className="flex flex-row items-center cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#D7AF75"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <polyline points="15 6 9 12 15 18" />
              </svg>
              <a className="my-1 font-medium text-md text-gold">
                Nazad na početnu stranicu
              </a>
            </div>
          </Link>
        ) : (
          <>
            <div className="z-50 flex w-8/12 md:w-4/12">
              <div className="flex lg:hidden">
                <button
                  type="button"
                  onClick={() => setShowMenu(!showMenu)}
                  className="mr-3 text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
                  aria-label="toggle menu"
                >
                  <div
                    className={`w-5 mb-[3px] border-b border-b-white transition-all ease-in-out duration-500 ${
                      showMenu ? "translate-y-[4px] delay-200 scale-0" : ""
                    }`}
                  />
                  <div
                    className={`w-5 mb-[1px] border-b border-b-white transition-all  ease-in-out duration-500 ${
                      showMenu ? "scale-0" : ""
                    }`}
                  />
                  <div
                    className={`w-5 border-b border-b-white transition-all ease-in-out duration-200 ${
                      showMenu
                        ? "scale-100 delay-[800ms]   -rotate-45"
                        : "scale-0"
                    }`}
                  />
                  <div
                    className={`w-5 border-b border-b-white -translate-y-[1px] transition-all  ease-in-out duration-200 ${
                      showMenu
                        ? "scale-100 delay-[800ms] rotate-45 "
                        : " scale-0"
                    }`}
                  />
                  <div
                    className={`w-5 border-b border-b-white transition-all ease-in-out duration-500 ${
                      showMenu ? "-translate-y-[4px] delay-200 scale-0" : ""
                    }`}
                  />
                </button>
              </div>
              <a
                className="w-full cursor-pointer lg:w-1/2"
                onClick={scrollIntoElement()}
              >
                <img className="" src="./logo.png" alt="Logo.png" />
              </a>
            </div>

            <div className="items-center hidden lg:flex">
              <div className="flex flex-col uppercase text-palegrey lg:flex-row lg:mx-6">
                <NavbarItems scrollIntoElement={scrollIntoElement} />
              </div>
            </div>

            <div
              className={`justify-start flex px-6 py-3  flex-col lg:hidden bg-lightgrey h-screen w-full fixed top-0 bottom-0 -left-full z-40 transition-all ease-in-out duration-500 ${
                showMenu ? "translate-x-full" : "-translate-x-full"
              }`}
            >
              {showMenu && (
                <div className="flex flex-col pt-24 ml-[32px] uppercase text-palegrey">
                  <NavbarItems scrollIntoElement={scrollIntoElement} />
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </nav>
  );
};
