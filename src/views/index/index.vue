<template>
  <div class="grid">
    <com-header></com-header>
    <com-aside></com-aside>
    <com-main></com-main>
  </div>
</template>

<script>
import ComHeader from "../../components/Header";
import ComAside from "../../components/Aside";
import ComMain from "../../components/Main";
export default {
  name: "Index",
  components: {
    ComHeader,
    ComAside,
    ComMain
  }
}
</script>

<style>
.grid{
  display: grid;
  grid-template-columns: auto minmax(0,1fr);
  grid-template-rows: minmax(-webkit-min-content,-webkit-max-content) 1fr minmax(-webkit-min-content,-webkit-max-content);
  grid-template-rows: minmax(min-content,max-content) 1fr minmax(min-content,max-content);
}

</style>