import styled from "styled-components";

export const TableWrapper = styled.div``;
export const TableContentWrapper = styled.div`
  margin-top: 5em;
  overflow: auto;
    display: grid;
    grid-auto-columns: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    grid-template-columns: 0.25fr 0.5fr 0.5fr 0.75fr 0.25fr 0.5fr;

  .tableHeading {
    padding: 0px 0px 20px 20px;
    border-bottom: 1px solid tomato;
    border-left: 1px solid tomato;
    color: #000;
    font-size: 1em;
    font-weight: 700;
  }

  .tableText {
    padding: 20px 20px;
    border-left: 1px solid tomato;
    border-bottom: 1px solid tomato;
    color: #000;
  }
`;
