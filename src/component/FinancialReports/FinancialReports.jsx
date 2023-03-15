import React from "react";
import Arrow from "../Arrow/arrow";
import "./FinancialReports.css";
import FinTab from "./FinTab";

function FinancialReports() {
  return (
    <div>
      <Arrow />
      <div className="financial-header">
        <p>گزارشات مالی</p>
      </div>
      <div className="orange-box">
        <div className="inside-obox">
          <p>ارزش کل دارایی ها</p>
          <p>95,812,808</p>
        </div>
        <div className="boxs-left">
          <div className="deposit">
            <p>واریز</p>
          </div>
          <div className="removal">
            <p>برداشت</p>
          </div>
        </div>
      </div>
      <FinTab />
    </div>
  );
}

export default FinancialReports;
