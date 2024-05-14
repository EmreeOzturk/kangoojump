import { useEffect, useState } from "react";

const useMediaQuery = (minWidth: number) => {
  const [state, setState] = useState({
    windowWidth: 0,
    isDesiredWidth: false,
  });

  useEffect(() => {
    const resizeHandler = () => {
      const currentWindowWidth = window.innerWidth;
      const isDesiredWidth = currentWindowWidth < minWidth;
      setState({ windowWidth: currentWindowWidth, isDesiredWidth });
    };
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [state.windowWidth]);
  useEffect(() => {
    const resizeHandler = () => {
      const currentWindowWidth = window.innerWidth;
      const isDesiredWidth = currentWindowWidth < minWidth;
      setState({ windowWidth: currentWindowWidth, isDesiredWidth });
    };
    window.addEventListener("scroll", resizeHandler);
    return () => {
      window.removeEventListener("scroll", resizeHandler);
    };
  }, []);

  return state.isDesiredWidth;
};

export default useMediaQuery;
