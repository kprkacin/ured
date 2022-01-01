import { useCallback, useEffect, useState } from "react";
import clsx from "clsx";
import { Card } from "./Card";
import { SectionHeader } from "../SectionHeader";

export const WhatWeDo: React.FC = () => {
  const arr = [1, 2, 3, 4, 5, 6];
  return (
    <div className="grid grid-cols-3 mx-auto justify-items-center lg:grid-cols-6">
      <SectionHeader
        className="mb-6 col-span-full"
        title="Čime se bavimo"
        id="work"
        rightHeader
      />

      {arr.map((a) => {
        return (
          <Card key={a} title="HELLO">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
          </Card>
        );
      })}
      <h1 className="text-2xl font-semibold text-white p-14 col-span-full">
        Cime se bavimo
      </h1>
      {arr.map((a) => {
        return (
          <Card key={a} title="HELLO">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
          </Card>
        );
      })}
    </div>
  );
};
