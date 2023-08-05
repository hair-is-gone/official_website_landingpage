<template>
  <div class="page-info">
    <div class="mobile-title-box">
      <span>Home </span>
      <div class="splite-pict">
        <img src="../../../../static/mobile/ic_page.png" alt="" class="pict">
      </div>
      <span class="head-color">
        <slot name="title-first"></slot>
      </span>
    </div>
    <div class="page-box">
      <span class="page-title">
        <slot name="title"></slot>
        <!-- <div class="title-bottom-line"></div> -->
      </span>
      <hr class="page-hr-line" />
      <div class="content-box">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.page-info {
  width: 100%;
  background-color: #f7f7f7;
  .flex-change-box;
  justify-content: flex-start;
  padding-top: 10.42vw;
  min-height: 80vh;
}
.page-box {
  width: 90vw;
  border-radius: 1.5vw;
  margin-top: 3vw;
  .flex-change-box;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: #fff;
  margin-bottom: 4vw;
}
.page-hr-line {
  width: 100%;
  height: 0.1px;
  background-color: #fff;
}
.head-color {
  color: #ae5237;
}
.mobile-title-box {
  display: none;
}
.splite-pict {
  width: 2.22vw;
	height: 2.08vw;
  margin-left: 5vw;
  margin-right: 3vw;
  .head-color;
}
.page-title {
  .mid-box;
  text-align: center;
  font-size: 2.17vw;
  letter-spacing: 0vw;
  width: 100%;
  height: 8.39vw;
  //.bold-font;
  margin: 0;
  .head-color;
}
.content-box {
  width: 90vw;
  height: auto;
  margin-bottom: 4vw;
  color: #000;
  background-color: #fff;
  box-sizing: border-box;
  padding: 2vw 1vw;
  p {
    font-size: 1.55vw;
  }
  span {
    font-size: 1.55vw;
  }
  ol,li {
    font-size: 1.55vw !important;
  }
}
.title-bottom-line{
  display: none;
}
@media screen and (max-width: 767px) {
  .page-info {
    width: 100%;
    background-color: #fff;
    .flex-change-box;
    padding-top: 15vw;
    min-height: 80vh;
    justify-content: flex-start;
  }
  .page-box {
    width: 100%;
    border-radius: 1.5vw;
    .flex-change-box;
    // align-items: flex-start;
    justify-content: flex-start;
    margin-top: 0vw;
  }
  .page-hr-line {
    display: none;
  }
  .head-color {
    color: #ae5237;
  }
  .mobile-title-box {
    display: flex;
    align-items: baseline;
    justify-content: flex-start;
    width: 100%;
    box-sizing: border-box;
    padding-top: 2vw;
    padding-left: 4vw;
    height: 10.25vw;
    font-size: 4vw;
    color: #020a2b;
    // font-weight: bold;
    background-color: #f7f7f7;
  }
  .splite-pict {
    width: 2.22vw;
	  height: 2.08vw;
    margin-left: 5vw;
    margin-right: 3vw;
    // .head-color;
    font-weight: normal;
  }
  .page-title {
    .flex-change-box;
    font-size: 5.17vw;
    letter-spacing: 0vw;
    color: #ae5237;
    width: 92%;
    height: 11.39vw;
    // .bold-font;
    margin: 0;
    padding: 0vw 2vw;
    align-items: flex-start;
  }
  .title-bottom-line{
    display: inherit;
    width: 92vw;
    border-bottom: solid 0.42vw #d6dbde;
  }
  .content-box {
    width: 96vw;
    height: auto;
    margin-bottom: 4vw;
    color: #000;
    // background-color: #f3f3f3;
    box-sizing: border-box;
    padding: 2vw 2vw;
    p {
      font-size: 3.55vw;
    }
    span {
      font-size: 3.55vw;
    }
    ol,li {
      font-size: 3.55vw;
    }
  }
}
</style>
