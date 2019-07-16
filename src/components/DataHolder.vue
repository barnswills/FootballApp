<template>
  <div>
    <div class="bar-chart">
      <h2>Test</h2>
      <RandomBarChart></RandomBarChart>
    </div>
  </div>
</template>

<script>
import RandomBarChart from "./RandomBarChart";

export default {
  name: "DataHolder",
  components: { RandomBarChart }
};
</script>

<style scoped>
.bar-chart {
  margin: 50px;
  width: 65%;
}
</style>

