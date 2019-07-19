<template>
  <div id="app">
    <SearchBar></SearchBar>
    <div class="data-holder">
      <DataHolder></DataHolder>
    </div>
  </div>
</template>

<script>
import DataHolder from "./components/DataHolder";
import SearchBar from "./components/SearchBar";

export default {
  name: "App",
  components: {
    DataHolder,
    SearchBar
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
  margin-top: 0px;
  background-color: white;
}
.data-holder {
  margin: auto;
  width: 55%;
  padding: 10px;
}
</style>
