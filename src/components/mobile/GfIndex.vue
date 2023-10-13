<template>
  <div>
    <Indexh5></Indexh5>
  </div>

</template>

<script>
import Indexh5 from "@/components/mobile/items/IndexMobile.vue";
export default {
  components: {
    Indexh5,
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