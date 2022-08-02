import React from "react";
import { statistics } from "../../data/stats";
import PointView from "./PointView";

const PointChart = ({ params }) => {
  const stat = statistics.filter((stat) => {
    return stat.personId.includes(params.id);
  });

  return (
    <div className="faqs-section">
      <div className="title">
        <h2>Season Points</h2>
      </div>
      <PointView stats={stat} />
    </div>
  );
};

export default PointChart;
