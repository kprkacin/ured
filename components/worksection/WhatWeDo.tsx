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
      />
      <Card title="Zemljišno-knjižno pravo (nekretnine)">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M8 9l5 5v7h-5v-4m0 4h-5v-7l5 -5m1 1v-6a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v17h-8" />
        <line x1="13" y1="7" x2="13" y2="7.01" />
        <line x1="17" y1="7" x2="17" y2="7.01" />
        <line x1="17" y1="11" x2="17" y2="11.01" />
        <line x1="17" y1="15" x2="17" y2="15.01" />
      </Card>
      <Card title="Ugovorno pravo">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M6 4h11a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-11a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1m3 0v18" />
        <line x1="13" y1="8" x2="15" y2="8" />
        <line x1="13" y1="12" x2="15" y2="12" />
      </Card>
      <Card title="Izvanugovorni odnosi">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M6 4h11a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-11a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1m3 0v18" />
        <line x1="13" y1="8" x2="15" y2="8" />
        <line x1="13" y1="12" x2="15" y2="12" />
      </Card>
      <Card title="Obiteljsko pravo">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <circle cx="7" cy="5" r="2" />
        <path d="M5 22v-5l-1 -1v-4a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4l-1 1v5" />
        <circle cx="17" cy="5" r="2" />
        <path d="M15 22v-4h-2l2 -6a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1l2 6h-2v4" />
      </Card>
      <Card title="Naknade šteta">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M11 21l1 -5l-1 -4l-3 -4h4l3 -3" />
        <path d="M6 16l-1 -4l3 -4" />
        <circle cx="6" cy="5" r="1" />
        <path d="M13.5 12h2.5l4 2" />
      </Card>
      <Card title="Obvezno pravo">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M6 4h11a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-11a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1m3 0v18" />
        <line x1="13" y1="8" x2="15" y2="8" />
        <line x1="13" y1="12" x2="15" y2="12" />{" "}
      </Card>
      <h1 className="text-2xl font-semibold text-white p-14 col-span-full">
        Cime se bavimo
      </h1>
      <Card title="Ovršno pravo">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M8 9l5 5v7h-5v-4m0 4h-5v-7l5 -5m1 1v-6a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v17h-8" />
        <line x1="13" y1="7" x2="13" y2="7.01" />
        <line x1="17" y1="7" x2="17" y2="7.01" />
        <line x1="17" y1="11" x2="17" y2="11.01" />
        <line x1="17" y1="15" x2="17" y2="15.01" />
      </Card>
      <Card title="Prekršajno pravo">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <circle cx="12" cy="12" r="9" />
        <line x1="5.7" y1="5.7" x2="18.3" y2="18.3" />
      </Card>
      <Card title="Radno pravo">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M13 10l7.383 7.418c.823 .82 .823 2.148 0 2.967a2.11 2.11 0 0 1 -2.976 0l-7.407 -7.385" />
        <path d="M6.293 15.293l-2.586 -2.586a1 1 0 0 1 0 -1.414l7.586 -7.586a1 1 0 0 1 1.414 0l2.586 2.586a1 1 0 0 1 0 1.414l-7.586 7.586a1 1 0 0 1 -1.414 0z" />
      </Card>
      <Card title="Stvarno pravo">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M6 4h11a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-11a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1m3 0v18" />
        <line x1="13" y1="8" x2="15" y2="8" />
        <line x1="13" y1="12" x2="15" y2="12" />{" "}
      </Card>
      <Card title="Upravno pravo">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M6 4h11a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-11a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1m3 0v18" />
        <line x1="13" y1="8" x2="15" y2="8" />
        <line x1="13" y1="12" x2="15" y2="12" />{" "}
      </Card>
      <Card title="Kazneno pravo">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <circle cx="12" cy="12" r="9" />
        <line x1="5.7" y1="5.7" x2="18.3" y2="18.3" />
      </Card>
    </div>
  );
};
