import React from "react";
import Chart from "react-apexcharts";

const FieldView = ({ stats }) => {
  // console.log(stats);

  // Data
  const dates = stats.map((data) => {
    var newdate = new Date(data.gameDate).getTime();
    const a = newdate;
    return a;
  });

  const fieldGoal = stats.map((data) => {
    var newpoint = Math.round(data.fieldGoalsAttempted * 100) / 100;
    const a = newpoint;
    return a;
  });

  const fieldGoalPer = stats.map((data) => {
    var newpoint = Math.round(data.fieldGoalsAttemptedPer36MP * 100) / 100;
    const a = newpoint;
    return a;
  });

  //   console.log(dates);

  console.log(dates);

  const series = [
    {
      name: "Field Goal Per",
      type: "column",
      data: fieldGoalPer,
    },
    {
      name: "Field Goal",
      type: "line",
      data: fieldGoal,
    },
  ];

  const opt = {
    chart: {
      height: 350,
      type: "line",
    },
    stroke: {
      width: [1, 2],
    },
    title: {
      text: "Field Goal Stats",
    },

    labels: dates,
    xaxis: {
      //   tickAmount: 9,
      type: "datetime",
    },
    yaxis: [
      {
        title: {
          text: "Field Goals",
        },
      },
    ],
    theme: {
      mode: "dark",
    },
    markers: {
      colors: ["#F44336", "#E91E63", "#9C27B0"],
    },
    colors: ["#F44336", "#FFFFFF"],
  };

  return (
    <div>
      <Chart options={opt} type="line" series={series} width="100%" />
    </div>
  );
};

export default FieldView;

//  series: [{
//           name: 'Website Blog',
//           type: 'column',
//           data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
//         }, {
//           name: 'Social Media',
//           type: 'line',
//           data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
//         }],
//           chart: {
//           height: 350,
//           type: 'line',
//         },
//         stroke: {
//           width: [0, 4]
//         },
//         title: {
//           text: 'Traffic Sources'
//         },
//         dataLabels: {
//           enabled: true,
//           enabledOnSeries: [1]
//         },
//         labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],
//         xaxis: {
//           type: 'datetime'
//         },
//         yaxis: [{
//           title: {
//             text: 'Website Blog',
//           },

//         }, {
//           opposite: true,
//           title: {
//             text: 'Social Media'
//           }
//         }]
