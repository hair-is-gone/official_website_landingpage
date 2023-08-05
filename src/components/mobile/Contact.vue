<template>
  <div>
    <el-row class="hidden-sm-and-up">
      <Contacth5></Contacth5>
    </el-row>
    <el-row class="new-hidden-head">
      <Contactpc></Contactpc>
    </el-row>
  </div>
</template>

<script>
import Contacth5 from "@/components/mobile/items/Contactm.vue";
import Contactpc from "@/components/mobile/items/Contactpc.vue";

export default {
  components: {
    Contacth5,
    Contactpc,
  },
  created() {
    window.addEventListener("beforeunload", (e) => {
      window.scrollTo(0, 0);
    });
  },
};
</script>
<style lang="less" scoped>
</style>

