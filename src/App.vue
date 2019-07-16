<template>
  <div id="app">
    <TablePosition/>
  </div>
</template>

<script>
import axios from "axios";
import TablePosition from "./components/TablePosition";

export default {
  name: "App",
  components: {
    TablePosition
  },
  mounted() {
    console.log("App has mounted");
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
