"use client";
import { useState, FC } from "react";
import Page1 from "./page1";
import Page2 from "./page2";
import Page3 from "./page3";
import Page4 from "./page4";
import Page5 from "./page5";
import Page6 from "./page6";
import Page7 from "./page7";
import Page8 from "./page8";
import Page9 from "./page9";
import Page10 from "./page10";
import Page11 from "./page11";
import Page12 from "./page12";
import Page13 from "./page13";
import Page14 from "./page14";
import Page15 from "./page15";
import Page16 from "./page16";
import Image from "next/image";

const pages: { [key: number]: FC } = {
  1: Page1,
  2: Page2,
  3: Page3,
  4: Page4,
  5: Page5,
  6: Page6,
  7: Page7,
  8: Page8,
  9: Page9,
  10: Page10,
  11: Page11,
  12: Page12,
  13: Page13,
  14: Page14,
  15: Page15,
  16: Page16,
};

export default function GuiaProcesso() {
  const [page, setPage] = useState(16);
  const PageComponent = pages[page];

  return (
    <div className="flex flex-col items-center justify-center  min-w-[33%] h-full relative font-tertiary overflow-hidden">
      {page !== 1 && (
        <button
          className="z-10 absolute top-0 right-center cursor-pointer"
          onClick={() => setPage(page - 1)}
        >
          <Image
            src="/assets/site/guia/upArrow.svg"
            alt="Logo"
            width={50}
            height={50}
            className="w-10 h-10"
            priority
          />
        </button>
      )}
      <PageComponent />
      {page !== 16 && (
        <button
          className="z-10 absolute bottom-0 right-center cursor-pointer"
          onClick={() => setPage(page + 1)}
        >
          <Image
            src={
              page === 5 || page === 12 || page === 15
                ? "/assets/site/guia/downArrowWhite.svg"
                : "/assets/site/guia/downArrow.svg"
            }
            alt="Logo"
            width={50}
            height={50}
            className="w-10 h-10"
          />
        </button>
      )}
    </div>
  );
}
