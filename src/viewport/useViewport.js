import React from "react";
import { ViewportContext } from "./index";

const useViewport = () => {
  const { width, height } = React.useContext(ViewportContext);
  const isLess = 435 > width;
  const isMobile = 700 > width;
  const isTablet = 1000 > width;

  return { width, height, isLess, isMobile, isTablet };
};

export default useViewport;
