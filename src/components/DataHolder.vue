<template>
  <sui-grid class="chart-grid">
    <sui-grid-row>
      <sui-grid-column :width="8">
        <sui-card class="bar-chart">
          <RandomBarChart></RandomBarChart>
        </sui-card>
      </sui-grid-column>

      <sui-grid-column :width="8">
        <sui-card class="pie-chart">
          <RandomPieChart></RandomPieChart>
        </sui-card>
      </sui-grid-column>
    </sui-grid-row>
  </sui-grid>
</template>

<script>
import RandomBarChart from "./RandomBarChart";
import RandomPieChart from "./RandomPieChart";

export default {
  name: "DataHolder",
  components: { RandomBarChart, RandomPieChart }
};
</script>

<style scoped>
.bar-chart {
  margin: 5px;
  width: 100%;
  padding: 20px;
}
.pie-chart {
  margin: 5px;
  width: 100%;
  padding: 20px;
}
.chart-grid {
  margin: 30px;
}
</style>

