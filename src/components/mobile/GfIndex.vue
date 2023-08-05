<template>
  <div>
    <el-row class="hidden-sm-and-up">
      <Indexh5></Indexh5>
    </el-row>
    <el-row class="new-hidden-head">
      <Index></Index>
    </el-row>
  </div>

</template>

<script>
import Indexh5 from "@/components/mobile/items/IndexMobile.vue";
import Index from "@/components/mobile/items/IndexDesktop.vue";
export default {
  components: {
    Indexh5,
    Index,
  },
  created() {
    window.addEventListener("beforeunload", (e) => {
      window.scrollTo(0, 0);
    });
  },
};
</script>
<style scoped>
@media screen and (max-width: 767px) {
  .new-hidden-head {
    display: none !important;
  }
}
</style>