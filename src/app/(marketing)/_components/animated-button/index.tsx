"use client"

import React from "react";
import { animate } from "motion";
import { ArrowDown } from "lucide-react";

interface ButtonProps {
  text: string;
  className?: string;
  id?: string;
}

const AnimatedCTA = ({ text, className, id }: ButtonProps) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const target = document.getElementById("work");

    if (target) {
      const offset = window.innerHeight * 0.1;
      const targetTop =
        target.getBoundingClientRect().top + window.scrollY - offset;

      animate(window.scrollY, targetTop, {
        duration: 1.2,
        ease: [0.45, 0, 0.55, 1],
        onUpdate: (value) => {
          window.scrollTo(0, value);
        },
      });
    }
  };

  return (
    <a
      href="#work"
      onClick={handleClick}
      id={id}
      className={`${className ?? ""} cta-wrapper`}
    >
      <div className="cta-button group md:px-4 md:py-6 px-4 py-6">
        <div className="bg-circle" />
        <p className="text">{text}</p>

        <div className="arrow-wrapper">
          <ArrowDown />
        </div>
      </div>
    </a>
  );
};

export default AnimatedCTA;