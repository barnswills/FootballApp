<template>
  <sui-grid class="chart-grid">
    <sui-grid-row>
      <sui-button-group>
        <sui-button content="Bar" @click="invokeChange('bar')"/>
        <sui-button content="Pie" @click="invokeChange('pie')"/>
        <sui-button content="Line" @click="invokeChange('line')"/>
      </sui-button-group>
    </sui-grid-row>

    <!-- <sui-grid-row>
      <sui-grid-column :width="8">
        <sui-card class="bar">
          <RandomBarChart></RandomBarChart>
        </sui-card>
      </sui-grid-column>
      <sui-grid-column :width="8">
        <sui-card class="pie">
          <RandomPieChart></RandomPieChart>
        </sui-card>
      </sui-grid-column>
    </sui-grid-row>-->
    <sui-grid-row>
      <sui-grid-column>
        <sui-card class="this.currentGraph">
          <!-- <h3>Revenue</h3> -->
          <component :is="currentGraph"></component>
        </sui-card>
      </sui-grid-column>
    </sui-grid-row>
  </sui-grid>
</template>

<script>
import RandomBarChart from "./RandomBarChart";
import RandomPieChart from "./RandomPieChart";
import RandomLineChart from "./RandomLineChart";

export default {
  name: "DataHolder",
  components: {
    bar: RandomBarChart,
    pie: RandomPieChart,
    line: RandomLineChart
  },
  data: () => {
    return {
      currentGraph: "bar"
    };
  },
  methods: {
    invokeChange: name => {
      console.log("switching to " + name);
      this.$store.commit("switchGraph", name);
    }
  }
};
</script>

<style scoped>
.bar {
  margin: 5px;
  width: 100%;
  padding: 20px;
  background-color: red;
}
.pie {
  margin: 5px;
  width: 100%;
  padding: 20px;
  background-color: blue;
}
.line {
  margin: 5px;
  width: 100%;
  padding: 20px;
  background-color: green;
}
.chart-grid {
  margin: 30px;
  width: 100%;
}
</style>

