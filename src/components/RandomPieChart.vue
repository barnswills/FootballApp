
<script>
import { Pie } from "vue-chartjs";
import { numbers, colors } from "../utils/randomUtils";

// global constants
const mColors = colors(6);
const mNumbers = numbers(6);

export default {
  extends: Pie,
  data: () => ({
    chartdata: {
      labels: mColors,
      datasets: [
        {
          label: "Data One",
          backgroundColor: mColors,
          data: mNumbers
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  }),

  mounted() {
    this.renderChart(this.chartdata, this.options);
  }
};
</script>
