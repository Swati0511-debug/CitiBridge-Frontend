import React from "react";
import DataTable from "./DataTable";
import "../components/Valid_Records.css";
import { FaCheckCircle } from "react-icons/fa";
function Valid_Records() {
  return (
    <div className="valid_record__main">
      <div className="header__valid">
        <FaCheckCircle
          size="20px"
          style={{ color: "#43a047", paddingRight: "5px" }}
        ></FaCheckCircle>
        <p style={{ margin: "0px" }}>Valid Records</p>
      </div>
      <DataTable></DataTable>
      <button className="download__records grow">
        {" "}
        Download Valid Records
      </button>
    </div>
  );
}

export default Valid_Records;
