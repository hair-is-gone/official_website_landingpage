<template>
  <div class="head-box">
    <!-- <div class="h5-logo-box" @click="goToIndex()">
      <img src="https://dapv7y4era0s5.cloudfront.net/candycrush/top_icon.png" alt="logo" class="pict">
    </div>
    <div class="title-box">
      <img src="https://dapv7y4era0s5.cloudfront.net/candycrush/CandyCrush.png" alt="logo" class="pict">
    </div>
    <div class="download-pict" @click="downloadApk()">
      <img src="https://dapv7y4era0s5.cloudfront.net/candycrush/top_download.png" alt="logo" class="pict">
    </div> -->
  </div>
</template>

<script>
import { download, loadPage, chnup } from "../../../utils/tools"

export default {
  data() {
    return {
      currentIndex: 0,
      current: 0,
    };
  },
  created() {},
  methods: {
    changeTitle: function (msg) {
      this.currentIndex = msg;
      let routerMap = {
        0: "/about",
        1: "legality",
        2: "/terms",
        3: "/privacy",
        4: "/refunds",
        6: "/contact",
      }
      this.$router.push(routerMap[msg])
    },
    goToIndex: function () {
      // chnup("headClick1")
      localStorage.setItem("current", 0);
      this.current = 0;
      this.$router.push("/");
    },
    downloadApk: function(){
      chnup("click_v2")
      // download();
    }
  },
};
</script>

<style lang="less" scoped>
.head-box {
  height: 15.56vw;
  width: 100%;
  position: fixed;
  z-index: 300;
	background-color: #6622ab;
  .mid-box;
  box-sizing: border-box;
  justify-content: flex-start;
  display: none;
}
.h5-logo-box {
  width: 11.39vw;
	height: 11.39vw;
  margin-left: 2.64vw;
}
.h5-logo-box-pict {
  width: 100%;
  height: auto;
}
.button-box {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 5.14vw;
  margin-top: 0.5vw;
}
.el-dropdown {
  color: #fff;
}
.link-pict {
  width: 6.94vw;
	height: 7.08vw;
}
.el-dropdown-menu {
  padding: 10px 0;
  margin: 15px 0;
  background-color: #fff;
  border: 1px solid #fff;
  border-radius: 4px;
  -webkit-box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
  top: 25px !important;
  width: 59vw;
  font-size: 4vw;
  line-height: 14vw;
  letter-spacing: 0vw;
  color: black;
  text-align: center;
}
.el-dropdown-menu__item {
  color: black;
}
.lin-box-pict {
  width: 9.72vw;
  height: 6.67vw;
}
.download-pict{
  width: 32.92vw;
	height: 9.17vw;
  margin-left: auto;
  margin-right: 3vw;
}
.title-box{
  width: 31.25vw;
	height: 3.75vw;
  position: relative;
  left: 2.36vw;
}
.title-pict{
  width: 36.94vw;
	height: 5vw;
}
.title-span{
  font-size: 5vw;
	color: #ffe746;
  position: relative;
  top: 0.5vw;
  font-family: "bd";
}
</style>