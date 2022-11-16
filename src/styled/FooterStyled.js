import styled from "styled-components";

export const FooterWrapper = styled.div`
  font-family: sans-serif;
  background-color: ${({ isLess }) =>
    isLess ? "rgb(248, 79, 57)" : "transparent"};
  margin-bottom: 0px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 4em;
  margin-bottom: 0px;
`;

export const FooterSVGWrapper = styled.div`
  position: absolute;
  left: 0%;
  bottom: 0%;
  right: 0%;
  z-index: -1;
  bottom: auto;
  margin-top: -60px;
  margin-bottom: -100px;
  display: block;
  height: ${({ isMobile }) => (isMobile ? "120vh" : "130vh")};
  overflow: hidden;

  svg:not(:root) {
    fill: none;
  }
`;

export const FooterInfoWrapper = styled.div`
  margin: auto;
  /* padding-top:${({ isMobile }) => (isMobile ? "50px" : "0px")}; */
  padding: 1.5em;
  align-items: center;
  display: flex;
  flex-direction: column;
  max-width: ${({ isMobile }) => (isMobile ? "auto" : "28em")};
  text-align: center;
  background-color: ${({ isLess }) => (isLess ? "rgb(248, 79, 57)" : "none")};

  .heading {
    margin-bottom: 27px;
    /* max-width: 80%; */
    font-size: 3.1em;
    font-weight: 800;
  }

  .apply {
    color: #fff;
  }

  .info {
    font-size: 1.25em;
    margin-bottom: 4px;
    font-weight: 600;
  }
`;

export const FooterMailWrapper = styled.div`
  padding: ${({ isLess }) => (isLess ? "10px" : "0px 25px")};
  padding-bottom: 20px;
  /* width: ${({ isLess, isMobile }) =>
    isLess ? "auto" : isMobile ? "90%" : "93%"}; */
  margin-top: 3em;
  background-color: rgb(248, 79, 57);

  .mailInput {
    background-color: ${({ isMobile }) =>
      isMobile ? "rgb(248,79,57);" : "#fff"};
    width: ${({ isTablet }) => (isTablet ? "auto" : "40em")};
    display: flex;
    justify-content: center !important;
    align-items: center;
    padding: 0px 2em;
    border-radius: 999px;
    flex-direction: ${({ isMobile }) => (isMobile ? "column" : "row")};
  }
 
  .submitBtn {
    will-change: transform;
    background-position: 50%;
    transform: ${({ isMobile }) => isMobile ? "rotate(0deg)" : "rotate(-45deg)"};
    border-radius: 100%;
    background-color: #6b66da;
    padding: 10px 10px;
    font-size: 2.5em;
    color: #fff;
    border: none;
    margin-right: -1em;
    /* flex: 1; */
    /* width: ${({ isMobile, isLess }) =>
      isLess ? "50px" : isMobile ? "15%" : "13%"};  */
      width: 70px;
    :hover {
      background-image: url("https://global-uploads.webflow.com/625593a881b8ebd169835ca5/62686ffec209d22a4cbac941_button-rainbow-bg.png");
      transform: rotate(0deg);
      cursor: pointer;
    }
  }

  .inputVal {
    outline: none;
    border: none;
    padding: ${({ isTablet }) => (isTablet ? "10px" : "0px")};
    width: 100%;
    margin-bottom: ${({ isMobile }) => (isMobile ? "20px" : "0px")};
    font-size: 2.5em;
    font-weight: 700;
    border-radius: ${({ isMobile }) => (isMobile ? "999px" : "0px")};
    /* text-align: center; */
  }

  .emailOutput {
    padding: 0.5em 1em;
    color: #fff;
  }
`;

export const FooterEnd = styled.div`
  color: #ae3728;
  font-size: 1.1em;
  font-weight: bold;
  margin-top: 13.9em;
  display: flex;
  flex-direction: ${({ isMobile }) => (isMobile ? "column" : "row")};
  justify-content: space-between;

  img {
    margin-right: 20px;
  }
  .contactLinks {
    display: flex;
    /* align-items: center; */
    flex-direction: ${({ isMobile }) => (isMobile ? "column" : "row")};
  }

  .contacts {
    display: flex;
    align-items: center;
  }
  .links {
    margin-right: 10px;
    :hover {
      text-decoration: underline #ae3728;
    }
  }

  .legal {
    display: flex;
    align-items: center;
  }

  a {
    text-decoration: none;
    color: #ae3728;
  }
`;
