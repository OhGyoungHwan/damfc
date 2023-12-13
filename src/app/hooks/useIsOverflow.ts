"use client";
import { useEffect, useState } from "react";

export const useIsOverflow = <T extends HTMLElement = HTMLElement>(
  ref: React.RefObject<T>,
  callback: (isOverflow: boolean) => void
) => {
  const [isOverflow, setIsOverflow] = useState<boolean>(false);

  useEffect(() => {
    const { current } = ref;

    const trigger = () => {
      const hasOverflow = current
        ? current.scrollWidth > current.clientWidth
        : false;

      setIsOverflow(hasOverflow);

      if (callback) callback(hasOverflow);
    };

    if (current) {
      trigger();
    }
  }, [callback, ref]);

  return isOverflow;
};
