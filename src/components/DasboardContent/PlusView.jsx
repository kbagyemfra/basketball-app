import React from "react";
import Chart from "react-apexcharts";

const PlusView = ({ stats }) => {
  // console.log(stats);

  // Data
  const dates = stats.map((data) => {
    var newdate = new Date(data.gameDate).getTime();
    const a = newdate;
    return a;
  });

  const pm = stats.map((data) => {
    var newpoint = Math.round(data.plusMinus * 100) / 100;
    const a = newpoint;
    return a;
  });

  const pmPer = stats.map((data) => {
    var newpoint = Math.round(data.plusMinusPer36MP * 100) / 100;
    const a = newpoint;
    return a;
  });

  //   console.log(dates);

  console.log(pmPer);

  const series = [
    {
      name: "Plus Minus Per",
      data: pmPer,
    },
    {
      name: "Plus Minus",
      data: pm,
    },
  ];

  const opt = {
    chart: {
      height: 350,
      type: "line",
    },
    stroke: {
      width: [0, 3],
    },
    title: {
      text: "Minus-Plus",
    },
    labels: dates,
    xaxis: {
      type: "datetime",
    },
    yaxis: [
      {
        title: {
          text: "Plus/Minus",
        },
      },
    ],
    theme: {
      mode: "dark",
    },
    markers: {
      colors: ["#F44336", "#E91E63", "#9C27B0"],
    },
  };

  return (
    <div>
      <Chart options={opt} type="line" series={series} width="100%" />
    </div>
  );
};

export default PlusView;
