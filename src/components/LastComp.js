import React, { useState } from "react";
import {
  FooterWrapper,
  FooterSVGWrapper,
  FooterInfoWrapper,
  FooterMailWrapper,
  FooterEnd,
} from "../styled/FooterStyled";
import { AiOutlineArrowRight } from "react-icons/ai";
import validator from "validator";
import { Link } from "react-router-dom";
import logo from "../assets/supersetLogo.svg";
import useViewport from "../viewport/useViewport";

const LastComp = () => {
  const [email, setEmail] = useState("");
  const [value, setValue] = useState("");
  const { isMobile, isTablet, isLess } = useViewport();
  const validEmail = () => {
    if (validator.isEmail(email)) {
      setValue("Thanks!!! Email is sent on your email address");
      //   return <navi to="/"></navi>;
    } else setValue("Email must include @");
  };
  return (
    <FooterWrapper isLess={isLess}>
      <FooterSVGWrapper isMobile={isMobile} isTablet={isTablet}>
        <svg
          width="100%"
          viewBox="0 0 1577 4307"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="#f84f39">
            <animate
              attributeName="d"
              dur="30s"
              repeatCount="indefinite"
              values="M0 356.759V2126H1577V218.07C1514.33 161.85 1445.22 112.053 1369.5 72.4841C993.38 -124.064 412.605 117.161 0 356.759Z;
M0 300.446V2126H1577V504.101C1360.04 335.784 1108.8 171.677 918.5 72.2294C571.912 -108.886 269.554 81.8469 0 300.446Z;
M0 283.735V2056H1577V317.047C1369.34 129.452 1125.7 -19.1374 918.5 2.22934C525.4 42.7656 247.64 143.295 0 283.735Z;
M0 356.759V2126H1577V218.07C1514.33 161.85 1445.22 112.053 1369.5 72.4841C993.38 -124.064 412.605 117.161 0 356.759Z"
            ></animate>
          </path>
        </svg>
      </FooterSVGWrapper>
      <FooterInfoWrapper
        isMobile={isMobile}
        isTablet={isTablet}
        isLess={isLess}
      >
        <div className="heading">
          <span className="apply">Apply </span>
          <span className="toJoin">to join our Private Beta</span>
        </div>
        <div className="info">Available soon on all major devices</div>
      </FooterInfoWrapper>
      <FooterMailWrapper
        isMobile={isMobile}
        isTablet={isTablet}
        isLess={isLess}
      > 
        <div className="mailInput">
          <input
            className="inputVal"
            type="email"
            placeholder="Your email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />{" "}
          <button className="submitBtn" onClick={validEmail}>
            <AiOutlineArrowRight />
          </button>
        </div>
        <div className="emailOutput">{value}</div>
        <FooterEnd isMobile={isMobile} isTablet={isTablet}>
          <div className="contactLinks">
            <div className="logo">
              <Link to="/">
                <img src={logo} alt="superlist" />
              </Link>
            </div>
            <div className="contacts">
              <Link to="/">
                <div className="links">Twitter</div>
              </Link>
              <Link to="/">
                <div className="links">GitHub</div>
              </Link>
              <Link to="/">
                <div className="links">Open Source</div>
              </Link>
            </div>
          </div>
          <div className="legal">
            <Link to="/">
              <div className="links">Legal</div>
            </Link>
            <Link to="/">
              <div className="links">Privacy</div>
            </Link>
            <Link to="/">
              <div className="links">Contact us</div>
            </Link>
          </div>
        </FooterEnd>
      </FooterMailWrapper>
    </FooterWrapper>
  );
};

export default LastComp;
