import React from "react";
import { statistics } from "../../data/stats";
import PlusView from "./PlusView";

const PlusChart = ({ params }) => {
  const stat = statistics.filter((stat) => {
    return stat.personId.includes(params.id);
  });

  return (
    <>
      <div className="faqs-section">
        <div className="title">
          <h2>Season PlusMinus</h2>
        </div>
        <PlusView stats={stat} />
      </div>
    </>
  );
};

export default PlusChart;
