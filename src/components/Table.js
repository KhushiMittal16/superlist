import React from "react";
import { TableWrapper, TableContentWrapper } from "../styled/TableStyled";

const Table = () => {
  return (
    <TableWrapper>
      <TableContentWrapper>
        <div className="tableHeading">Cookie</div>
        <div className="tableHeading">Provider</div>
        <div className="tableHeading">Description</div>
        <div className="tableHeading">Lifespan</div>
        <div className="tableHeading">Type</div>
        <div className="tableText">_ga</div>
        <div className="tableText">Google Analytics</div>
        <div className="tableText">Serves to distinguish between users</div>
        <div className="tableText">2 years</div>
        <div className="tableText">3rd party</div>
        <div className="tableText">_gid</div>
        <div className="tableText">Google Analytics</div>
        <div className="tableText">Serves to distinguish between users</div>
        <div className="tableText">2 years</div>
        <div className="tableText">3rd party</div>
        <div className="tableText">_gat</div>
        <div className="tableText">Google Analytics</div>
        <div className="tableText">Serves to throttle the request rate</div>
        <div className="tableText">24 hours</div>
        <div className="tableText">3rd party</div>
      </TableContentWrapper>
    </TableWrapper>
  );
};

export default Table;
