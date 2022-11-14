import styled from "styled-components";

export const NavCompleteWrapper = styled.div``;
export const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.3em;
  font-family: sans-serif;

  .navStart {
    display: flex;
  }

  .superlistLogo {
    margin-top: 5px;
  }

  .menu {
    background-color: #0000000f;
    border-radius: 999px;
    font-size: 1.25em;
    font-weight: 800;
    border: none;
    margin-left: 1.6em;
    padding: 0.6em 1em;
    outline: none;
    &:hover {
      background-color: rgba(0, 0, 0, 0.16);
    }
  }
  .menu:hover {
    cursor: pointer;
  }

  .menuBtn {
    margin: -0.2em 0.5em;
  }

  .pvtBetaBtn {
    background-color: #f84f39;
    border-radius: 999px;
    font-weight: 700;
    font-size: 1.25em;
    padding: 0.8em 1em;
    a {
      color: #fff;
      text-decoration: none !important;
    }
  }
`;

export const MenuWrapper = styled.div`
  padding: 20px;
  position: absolute;
  font-size: 1.25em;
  font-weight: 900;
  background-color: #ffffff;
  box-shadow: 0 0 44px 0 rgb(0 0 0 / 3%);
  border-radius: 20px;
  margin-top: 0.75em; 
  .allOpt {
    padding: 8px 20px;
    color: #000;
    :hover {
      color: #f84f39 !important;
    }
  }
  a {
    text-decoration: none;
  }

  .btnSignUp {
    margin: 4px 0.82em;
    background-color: #f84f39;
    color: #ffffff;
    padding: 0.6em 1.2em;
    border-radius: 999px;
  }
`;
export const StartWrapper = styled.div`
  display: flex;
  width: ${({ isLess, isMobile }) =>
    isLess ? "90%" : isMobile ? "90%" : "auto"};
  justify-content: space-between !important;
  align-items: center;

  img {
    width: ${({ isLess }) => (isLess ? "90%" : "auto")};
  }
`;
