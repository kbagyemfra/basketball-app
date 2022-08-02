import React from "react";
import { statistics } from "../../data/stats";
import FieldView from "./FieldView";

const FieldChart = ({ params }) => {
  const stat = statistics.filter((stat) => {
    return stat.personId.includes(params.id);
  });

  return (
    <>
      <div className="faqs-section">
        <div className="title">
          <h2>Season Field Goal</h2>
        </div>
        <FieldView stats={stat} />
      </div>
    </>
  );
};

export default FieldChart;
