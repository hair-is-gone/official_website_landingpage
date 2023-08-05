<template>
  <div>
    <el-row class="hidden-sm-and-up">
      <Footerm></Footerm>
    </el-row>
    <el-row class="new-hidden-head">
      <Footerpc></Footerpc>
    </el-row>

  </div>

</template>

<script>
import Footerpc from "@/components/mobile/items/Footerpc.vue";
import Footerm from "@/components/mobile/items/Footerm.vue";
export default {
  components: {
    Footerpc,
    Footerm,
  },
};
</script>
