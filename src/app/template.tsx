"use client";

import { animatePageIn } from "@/utils/animation";
import React, { useEffect } from "react";

interface ITemplateProps {
  children: React.ReactNode;
}

const template = ({ children }: ITemplateProps) => {
  useEffect(() => {
    animatePageIn();
    console.log("layout");

    if (localStorage.getItem("visitors")) {
      let visitors = (Number(localStorage.getItem("visitors")) + 1).toString();
      localStorage.setItem("visitors", visitors);
    } else {
      localStorage.setItem("visitors", "0");
    }
  }, []);

  return (
    <div>
      <div
        id="banner-1"
        className="min-h-screen bg-neutral-950 fixed top-0 left-0 w-1/4"
      />
      <div
        id="banner-2"
        className="min-h-screen bg-neutral-950 fixed top-0 left-1/4 w-1/4"
      />
      <div
        id="banner-3"
        className="min-h-screen bg-neutral-950 fixed top-0 left-2/4 w-1/4"
      />
      <div
        id="banner-4"
        className="min-h-screen bg-neutral-950 fixed top-0 left-3/4 w-1/4"
      />
      {children}
    </div>
  );
};

export default template;
