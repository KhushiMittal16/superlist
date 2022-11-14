import React from "react";
import { PrivacyPolicies } from "../data/PrivacyPolicyData";
import { PrivacyPolicyWrapper } from "../styled/AllCompStyled";

const Preamble = () => {
  return (
    <PrivacyPolicyWrapper>
      {PrivacyPolicies.map((allData, i) => (
        <div className="content" key={i}>
          <div className="blankHeadDiv"></div>
          <div className="heads">{allData.heading}</div>
          <div className="subHead">{allData.subHeading}</div>
          <div className="smallHead">{allData.smallHead}</div>
          <div className="blankDiv"></div>
          <div className="text">{allData.textData}</div>
          <div className="blank"></div>
          <div className="text">{allData.textData1}</div>
          <div className="blank"></div>
          <div className="text">{allData.textData2}</div>
          <div className="blank"></div>
          <div className="text">{allData.textData3}</div>
          <div className="blank"></div>
          <div className="text">{allData.textData4}</div>
          <ul className="listData">
            {allData?.dataArr?.map((listVal, ind) => (
              <li key={ind} className="listItems">{listVal}</li>
            ))}
          </ul>
          {/* <div className="blankDiv"></div> */}
          <div className="text">{allData.textData5}</div>
        </div>
      ))}
    </PrivacyPolicyWrapper>
  );
};

export default Preamble;
