<template>
  <sui-grid>
    <sui-grid-row>
      <sui-grid-column :width="8">
        <div class="bar-chart">
          <RandomBarChart></RandomBarChart>
        </div>
      </sui-grid-column>

      <sui-grid-column :width="8">
        <div class="pie-chart">
          <RandomPieChart></RandomPieChart>
        </div>
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
  margin: 10px;
  width: 100%;
}
.pie-chart {
  margin: 10px;
  width: 100%;
}
</style>

