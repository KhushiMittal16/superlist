import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/supersetLogo.svg";
import {
  NavWrapper,
  MenuWrapper,
  NavCompleteWrapper,
  StartWrapper,
} from "../styled/NavbarStyled";
import { AiOutlineDown } from "react-icons/ai";
import useViewport from "../viewport/useViewport";

const Navbar = () => {
  const { isLess, isMobile, isTablet } = useViewport();
  const [menu, setMenu] = useState(false);
  const changeMenu = () => {
    setMenu(!menu);
  };
  return (
    <NavCompleteWrapper isLess={isLess} isMobile={isMobile} isTablet={isTablet}>
      <NavWrapper isLess={isLess} isMobile={isMobile} isTablet={isTablet}>
        <StartWrapper isLess={isLess} isMobile={isMobile}>
          <div className="superlistLogo">
            <Link to="/">
              <img src={logo} alt="superlist" />
            </Link>
          </div>
          <div className="wholeMenu">
            <button className="menu universalBetween" onClick={changeMenu}>
              <div className="menuBtn">Menu</div>
              <AiOutlineDown />
            </button>
            {menu ? (
              <MenuWrapper>
                <div className="options">
                  <Link to="/">
                    <div className="allOpt">Home</div>
                  </Link>
                  <Link to="/">
                    <div className="allOpt">Careers</div>
                  </Link>
                  <Link to="/">
                    <div className="allOpt">Manifesto</div>
                  </Link>
                  <Link to="/">
                    <div className="allOpt">Email us</div>
                  </Link>
                </div>

                {isTablet ? (
                  <Link to="/">
                    <div className="btnSignUp">Sign up</div>
                  </Link>
                ) : (
                  ""
                )}
              </MenuWrapper>
            ) : (
              ""
            )}
          </div>
        </StartWrapper>
        {isMobile ? (
          ""
        ) : (
          <div className="pvtBetaBtn">
            <Link to="/">Private Beta Sign Up</Link>
          </div>
        )}
      </NavWrapper>
    </NavCompleteWrapper>
  );
};

export default Navbar;
