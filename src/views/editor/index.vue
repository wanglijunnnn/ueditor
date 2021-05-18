<template>
  <div class="grid">
    <edit-aside></edit-aside>
  </div>
</template>

<script>
import EditAside from "../../components/layout/AsideEdit.vue";
export default {
  name: "uEditor",
  components: {EditAside}
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