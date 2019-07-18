<script>
import { Line } from "vue-chartjs";

import { numbers } from "../utils/randomUtils";

// global constants
const YEARS = 11;
const mNumbers = numbers(YEARS);
const mLabelData = [
  "2009",
  "2010",
  "2011",
  "2012",
  "2013",
  "2014",
  "2015",
  "2016",
  "2017",
  "2018",
  "2019"
];

export default {
  extends: Line,
  data: () => ({
    chartdata: {
      labels: mLabelData,
      datasets: [
        {
          backgroundColor: "#f87979",
          data: mNumbers
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            }
          }
        ]
      }
    }
  }),

  mounted() {
    this.renderChart(this.chartdata, this.options);
  }
};
</script>

<style scoped></style>