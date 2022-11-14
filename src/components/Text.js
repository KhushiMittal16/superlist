import React from "react";
import { TextWrapper } from "../styled/TextStyled";
import Preamble from "./PrivacyPolicy";
import useViewport from "../viewport/useViewport";
const Text = () => {
  const { isLess, isMobile } = useViewport();
  return (
    <TextWrapper isMobile={isMobile} isLess={isLess}>
      <div className="mainHead">Privacy Policy</div>
      <Preamble />
    </TextWrapper>
  );
};

export default Text;
