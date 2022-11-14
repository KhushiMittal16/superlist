import styled from "styled-components";

export const TextWrapper = styled.div`
  /* text-align: left; */
  padding: 0px 1.5em;
  font-family: sans-serif;
  margin: 7em auto 5em;
  flex-direction: column;
  /* margin: ${({ isMobile }) => (isMobile ? "auto" : "7em auto 5em")}; */
  /* max-width: ${({ isMobile }) => (isMobile ? "90%" : "41em")}; */
  max-width: 40em;
  overflow: hidden;
  /* width:100%; */
  display: flex;
  justify-content: center;
  font-family: sans-serif;
  
  .mainHead {
    font-size: ${({ isMobile }) => (isMobile ? "3.5em" : "5em")};
    font-weight: 700;
    margin-bottom: 1.4rem;
  }
`;