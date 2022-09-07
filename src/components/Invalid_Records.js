import React from "react";
import DataTable from "./DataTable";
import "../components/Invalid_Records.css";
import { BsFillXCircleFill } from "react-icons/bs";
function Invalid_Records() {
  return (
    <div className="invalid_record__main">
      <div className="header__invalid">
        <BsFillXCircleFill
          size="20px"
          style={{ color: "#ef1620", paddingRight: "5px" }}
        ></BsFillXCircleFill>
        <p style={{ margin: "0px" }}>Invalid Records</p>
      </div>
      <DataTable></DataTable>
    </div>
  );
}

export default Invalid_Records;
