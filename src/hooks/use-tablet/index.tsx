import { useEffect, useState } from "react";

const TabletBreakpoint = 1024;

export function useIsTablet() {
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const mediaQuery = window.matchMedia(
      `(max-width: ${TabletBreakpoint - 1}px)`,
    );

    const handleChange = (event: MediaQueryListEvent) => {
      setIsTablet(event.matches);
    };

    setIsTablet(mediaQuery.matches);

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }

    mediaQuery.addListener(handleChange);
    return () => mediaQuery.removeListener(handleChange);
  }, []);

  return isTablet;
}

export default useIsTablet;
