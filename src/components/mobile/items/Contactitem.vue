<template>
  <div class="contact-card-long" v-if="isLong">
    <slot name="pict"></slot>
    <div class="card-span-box" v-if="isLong">
      <slot name="info"></slot>
    </div>
    <div class="card-span-box-short" v-else>
      <slot name="info"></slot>
    </div>
  </div>
  <div class="contact-card" v-else>
    <slot name="pict"></slot>
    <div class="card-span-box" v-if="isLong">
      <slot name="info"></slot>
    </div>
    <div class="card-span-box-short" v-else>
      <slot name="info"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isLong: {
      type: Boolean,
      default: false,
    }
    // isLong: false,
  }
};
</script>

<style lang="less" scoped>
.contact-card-long{
  .mid-box;
  width: 32.67vw;
  height: auto;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 3vw;
}
.contact-card {
  .mid-box;
  width: 23.67vw;
  height: auto;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 3vw;
}
.card-pict {
  // width: 5.53vw;
  // height: auto;
}
.card-span-box {
  .flex-change-box;
  font-size: 1vw;
  line-height: 1.27vw;
  color: #000;
  text-align: left;
  margin-left: 1.23vw;
  width: 35.67vw;
}
.card-span-box-short {
  .flex-change-box;
  font-size: 1vw;
  line-height: 1.57vw;
  color: #000;
  text-align: left;
  margin-left: 1.23vw;
  width: 20.67vw;
  align-items: flex-start;
}
@media screen and (max-width: 767px) {
  .contact-card {
    .mid-box;
    width: 91.67vw;
    height: auto;
    margin-bottom: 3vw;
    padding-bottom: 5vw;
    //justify-content: flex-start;
  }
  .contact-card:nth-child(3) {
    border-bottom: none;
  }
  .card-pict {
    width: 11.39vw;
    height: auto;
  }
  .card-span-box {
    .mid-box;
    font-size: 3vw;
    line-height: 5.17vw;
    color: #000;
    text-align: left;
    margin-left: 1.23vw;
    width: 81.67vw;
    align-items: flex-start;
    margin-top: 3vw;
  }
  .card-span-box-short {
    .mid-box;
    font-size: 3vw;
    line-height: 5.17vw;
    color: #000;
    text-align: left;
    margin-left: 4vw;
    width: 81.67vw;
    align-items: flex-start;
    margin-top: 3vw;
  }
}
</style>