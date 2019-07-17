
<script>
import { Bar } from "vue-chartjs";
import { numbers, colors } from "../utils/randomUtils";

export default {
  extends: Bar,
  data: () => ({
    chartdata: {
      labels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ],
      datasets: [
        {
          label: null,
          backgroundColor: colors(12),
          data: numbers(12)
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            }
          }
        ]
      }
    },

    methods: {
      nums: () => {
        const x = [10, 20, 34, 55];

        return x;
      }
    }
  }),

  mounted() {
    this.renderChart(this.chartdata, this.options);
  }
};
</script>
