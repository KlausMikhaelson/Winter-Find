import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const Barchart = () => {
  return (
    <>
      <Bar
        data={{
          labels: [
            "12am",
            "2am",
            "4am",
            "6am",
            "8am",
            "10am",
            "12pm",
            "2pm",
            "4pm",
            "6pm",
            "8pm",
            "10pm",
          ],
          datasets: [
            {
              label: "Today",
              data: [
                // user.activeUsersByTime[0] && user.activeUsersByTime[0].users,
                4,
                // user.activeUsersByTime[2].users?.0,
                10, 5, 6, 9, 2, 0, 15, 4, 2, 8, 3,
              ],

              backgroundColor: ["#000"],

              borderRadius: 5,
            },
          ],
        }}
      />
    </>
  );
};

export default Barchart;
