import React from "react";
import FAQ from "./DasboardContent/FAQ";
import Profile from "./DasboardContent/Profile";
import Legend from "./HomeContent/Legend";
import { useParams } from "react-router-dom";
import FieldChart from "./DasboardContent/FieldChart";
import PointChart from "./DasboardContent/PointChart";
import PlusChart from "./DasboardContent/PlusChart";

const Dashboard = () => {
  let params = useParams();

  console.log(params);

  return (
    <section className="dashboard">
      <Legend />
      <div className="mesh">
        <div className="row-a">
          <Profile params={params} />
          <FAQ params={params} />
        </div>
        <div className="row-b">
          <PointChart params={params} />
          <FieldChart params={params} />
          <PlusChart params={params} />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
