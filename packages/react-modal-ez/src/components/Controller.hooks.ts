import { RefObject, useEffect, useState } from "react";

export const useDimmedClick = (
  ref: RefObject<HTMLDivElement>,
  callback: () => void,
  enalbe: boolean = true
) => {
  useEffect(() => {
    if (!ref.current) return;

    const handleClick = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node) && enalbe) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [ref, callback]);
};

export const useEscDown = (callback: () => void, enable: boolean) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && enable) {
        callback();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [callback, enable]);
};

export const useScrollLock = (enable: boolean) => {
  const [prevOverflowY, setPrevOverflowY] = useState("");

  useEffect(() => {
    const preventDefault = (e: TouchEvent) => e.preventDefault();

    const body = document.querySelector("body");
    if (body && enable) {
      setPrevOverflowY(window.getComputedStyle(body).overflowY);
      body.style.overflowY = "hidden";

      document.addEventListener("touchmove", preventDefault, {
        passive: false,
      });
    }

    return () => {
      if (body) {
        body.style.overflowY = prevOverflowY;
        document.removeEventListener("touchmove", preventDefault);
      }
    };
  }, [enable]);
};
