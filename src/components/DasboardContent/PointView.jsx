import React from "react";
import Chart from "react-apexcharts";

const PointView = ({ stats }) => {
  // console.log(stats);

  // Data
  const dates = stats.map((data) => {
    var newdate = new Date(data.gameDate).getTime();
    const a = newdate;
    return a;
  });
  const points = stats.map((data) => {
    var newpoint = Math.round(data.points * 100) / 100;
    const a = newpoint;
    return a;
  });

  const pointsPer = stats.map((data) => {
    var newpoint = Math.round(data.pointsPer36MP * 100) / 100;
    const a = newpoint;
    return a;
  });

  // console.log(dates);

  const series = [
    {
      name: "Points",
      type: "column",
      data: points,
    },
    {
      name: "Points Per",
      type: "line",
      data: pointsPer,
    },
  ];

  const options = {
    xaxis: {
      tickAmount: 8,
      type: "datetime",
    },
    yaxis: [
      {
        title: {
          text: "Points",
        },
      },
    ],
    labels: dates,

    title: {
      text: "Points Stats",
      align: "left",
      offsetY: 15,
      style: { color: "white", fontSize: "1rem" },
    },
    theme: {
      mode: "dark",
    },
    markers: {
      colors: ["#F44336", "#E91E63", "#9C27B0"],
    },
    colors: ["#ffc107", "#FFFFFF"],
    stroke: {
      width: 2,
      // dashArray: 2,
    },
  };
  return (
    <div>
      <Chart options={options} type="line" series={series} width="100%" />
    </div>
  );
};

export default PointView;
