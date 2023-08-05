<template>
  <div>
    <el-row class="hidden-sm-and-up">
      <Headm></Headm>
    </el-row>
    <el-row class="new-hidden-head">
      <Headpc></Headpc>
    </el-row>
  </div>
</template>

<script>
import Headpc from "@/components/mobile/items/Headpc.vue";
import Headm from "@/components/mobile/items/Headm.vue";

export default {
  components: {
    Headpc,
    Headm,
  },
};
</script>