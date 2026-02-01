import { useEffect, useState } from "react";

const useScreenSizeChecker = (threshold) => {
  const [onSmallScreen, setOnSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      const screenSize = window.innerWidth;

      if (screenSize <= threshold) {
        setOnSmallScreen(true);
      } else {
        setOnSmallScreen(false);
      }
    };

    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);
  }, [threshold]);

  return onSmallScreen;
};
export default useScreenSizeChecker;
