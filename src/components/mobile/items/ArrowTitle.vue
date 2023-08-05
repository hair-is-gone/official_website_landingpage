<template>
  <div class="arrow-box" v-if="isBlack">
    <div class="arrow-pict" >
    </div>
    <div class="arrow-title">
      <slot ></slot>
    </div>
    <div class="arrow-pict" >
    </div>
  </div>

  <div class="arrow-box" v-else>
    <div class="arrow-pict-white">
    </div>
    <div class="arrow-title">
      <slot ></slot>
    </div>
    <div class="arrow-pict-white">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isBlack: {
      type: Boolean,
      default: true,
    }
  }
};
</script>

<style lang="less" scoped>
.arrow-box {
  .mid-box;
  width: 66.51vw;
}
.arrow-pict {
  width: 10vw;
  border-bottom: solid 0.05vw #fff;
}
.arrow-pict-white {
  width: 10vw;
  border-bottom: solid 0.05vw #108204;
}
.arrow-title {
  padding: 0 2vw;
  text-align: center;
}
.arrow-title-white {
  width: 20vw;
  text-align: center;
}
</style>