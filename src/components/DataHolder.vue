<template>
  <sui-grid class="chart-grid" stackable>
    <sui-grid-row>
      <sui-button-group class="btn-container">
        <sui-button :active="isActive('barChart')" content="Bar" @click="currentGraph = 'barChart'"/>
        <sui-button :active="isActive('pieChart')" content="Pie" @click="currentGraph = 'pieChart'"/>
        <sui-button :active="isActive('lineChart')" content="Line" @click="currentGraph = 'lineChart'"/>
      </sui-button-group>
    </sui-grid-row>
    <sui-grid-row>
      <sui-grid-column>
        <sui-segment class="graph-container">
          <component :is="currentGraph"></component>
        </sui-segment>
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
    barChart: RandomBarChart,
    pieChart: RandomPieChart,
    lineChart: RandomLineChart
  },
  data:  () => {
    return {
      currentGraph: "barChart",
      testBool: false
    };
  },
  methods: {
    invokeChange: name => {
      console.log("switching to " + name);
      this.currentGraph = name;
      //this.$store.commit("switchGraph", name);
    },
    isActive: function(name) {
      var vm = this;

      const c = vm.currentGraph;

      return name === c;
    }
  }
};
</script>

<style scoped>
.graph-container {
  margin-left: -15px;
  width: 100%;
}

.chart-grid {
  margin: 30px;
  width: 100%;
}
</style>

