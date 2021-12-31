import { useCallback, useEffect, useState } from "react";
import clsx from "clsx";

export const AboutPerson: React.FC = () => {
  const arr = [1, 2, 3, 4, 5];
  return (
    <div className="flex flex-col-reverse items-center justify-between text-center md:text-right md:flex-row">
      <div className="w-4/6 md:w-1/2">
        <img className="" src="/office.png" alt="Office.png" />
      </div>
      <div className="w-full text-white md:w-1/2">
        <h1 className="pb-5 text-2xl font-semibold">About the person</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
          beatae.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
          beatae.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
          beatae.
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
          beatae.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
          beatae.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
          beatae.
        </p>
      </div>
    </div>
  );
};
