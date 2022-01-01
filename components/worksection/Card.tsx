import React, {
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import clsx from "clsx";

export const Card: React.FC<CardProps> = (props) => {
  const { children, title } = props;
  const ref = useRef<HTMLDivElement | null>(null);

  const setHeroRibbonTopOffset = () => {
    if (!ref.current) {
      return;
    }

    const visibleClasses = ["visible", "opacity-1"];
    const invisibleClasses = ["invisible", "opacity-0", "translate-y-[10vh]"];
    const element = document.getElementsByClassName("customNavClass")[0];

    const top = ref.current.getBoundingClientRect().top;
    if (
      top + ref.current.clientHeight - element.clientHeight >= 0 &&
      top <= (window ? window.innerHeight : 0)
    ) {
      if (!ref.current.classList.contains("opacity-1")) {
        ref.current.classList.add(...visibleClasses);
        ref.current.classList.remove(...invisibleClasses);
      }
    } else {
      if (!ref.current.classList.contains("opacity-0")) {
        ref.current.classList.add(...invisibleClasses);
        ref.current.classList.remove(...visibleClasses);
      }
    }
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
    <div
      ref={ref}
      className=" w-full flex flex-grow transition-all duration-[1500ms] ease-in-out opacity-0 "
    >
      <div className="flex flex-col items-center justify-between w-full py-8 transition-all duration-300 bg-white border-b border-r overflow-clip px-auto group hover:bg-gold hover:text-white border-lightgrey">
        <h1
          style={{ wordBreak: "break-word" }}
          className="mx-2 text-xl font-medium text-center break-words "
        >
          {title}
        </h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="80"
          height="80"
          viewBox="0 0 24 24"
          className=" transition-all duration-300 my-4 stroke-[#D7AF75] group-hover:stroke-white"
          strokeWidth="1.5"
          stroke=""
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {children}
        </svg>
      </div>
    </div>
  );
};

export interface CardProps {
  children: ReactNode;
  title: string;
}
