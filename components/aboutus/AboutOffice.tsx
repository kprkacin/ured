import { useCallback, useEffect, useRef, useState } from "react";
import clsx from "clsx";

export const AboutOffice: React.FC = () => {
  const inputRef = useRef<(HTMLDivElement | null)[]>([null, null, null, null]);

  const setHeroRibbonTopOffset = () => {
    if (!inputRef.current || !inputRef.current.length) {
      return;
    }

    inputRef.current.map((ir, index) => {
      if (!ir) {
        return ir;
      }

      const element = document.getElementsByClassName("customNavClass")[0];
      const top = ir.getBoundingClientRect().top;

      console.log({
        firstEl: top - (element.clientHeight || 0) + ir.clientHeight,
        secondEl: top,
      });
      if (
        top - 25 - (element.clientHeight || 0) + ir.clientHeight >= 0 &&
        top + 25 <= window.innerHeight
      ) {
        if (ir.classList.contains("translate-x-96")) {
          ir.classList.remove("translate-x-96");
        }
      } else {
        if (!ir.classList.contains("translate-x-96")) {
          ir.classList.add("translate-x-96");
        }
      }
    });
    const positionY = window && window.scrollY;
  };

  useEffect(() => {
    setHeroRibbonTopOffset();

    window.addEventListener("scroll", setHeroRibbonTopOffset, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", setHeroRibbonTopOffset);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-between text-center md:text-left md:flex-row">
      <div className="w-full text-white md:w-1/2">
        <h1 className="pb-5 text-2xl font-semibold">O uredu</h1>
        <p>
          Odvjetnik Zoran Švaco i njegov tim pružaju Vam stručno pravno
          savjetovanje. Kao moderan ured svakodnevno i kontinuirano proširuju
          područja pravne pomoći i spektar pružanja pravnih usluga.
        </p>
        <br />

        <p>
          Posebna pažnja pridaje se fleksibilnom i dinamičnom pristupu svakom
          pravnom slučaju u cilju kvalitetnog i najprihvatljivijeg pravnog
          rješenja problema.
        </p>
      </div>
      <div className="flex flex-col overflow-hidden font-semibold text-center text-darkgrey">
        <div
          ref={(el) => (inputRef.current[0] = el)}
          className="px-12 py-3 mb-2 transition-all duration-700 ease-in-out rounded-sm translate-x-96 bg-gold"
        >
          Ambiciozni
        </div>
        <div
          ref={(el) => (inputRef.current[1] = el)}
          className="px-12 py-3 mb-2 transition-all duration-700 ease-in-out rounded-sm translate-x-96 bg-gold"
        >
          Fokusirani
        </div>
        <div
          ref={(el) => (inputRef.current[2] = el)}
          className="px-12 py-3 mb-2 transition-all duration-700 ease-in-out rounded-sm translate-x-96 bg-gold"
        >
          Principijelni
        </div>
        <div
          ref={(el) => (inputRef.current[3] = el)}
          className="px-12 py-3 mb-2 transition-all duration-700 ease-in-out rounded-sm translate-x-96 bg-gold"
        >
          Stručni
        </div>
      </div>
    </div>
  );
};
