
<script>
import { Pie } from "vue-chartjs";

export default {
  extends: Pie,
  data: () => ({
    chartdata: {
      labels: [
        "Purple", "Pink", "Magenta"
      ],
      datasets: [
        {
          label: "Data One",
          backgroundColor: ["Purple", "Pink", "Magenta"],
          data: [10, 20, 34]
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
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
