<template>
  <div>
    <div class="bar-chart">
      <RandomBarChart></RandomBarChart>
    </div>
    <div class="pie-chart">
      <RandomPieChart></RandomPieChart>
    </div>
  </div>
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
  margin: 50px;
  width: 65%;
}
.pie-chart {
  margin: 50px;
  width: 65%;
}
</style>

