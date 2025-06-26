<template>
  <div class="main">
    <div class="bg-img-all">
      <div class="download-button-sty" @click="download_apk"></div>
    </div>
  </div>
</template>

<script>
import { download, chnup, loadPage } from "../../../utils/tools";

export default {
  data() {
    return {};
  },
  methods: {
    download_apk: function (event) {
      chnup("click_v2");
    },
  },
  created() {
    // loadPage();
  },
};
</script>

<style lang="less" scoped>
.main {
  background: #2a70f7;
  height: 100vh;
  width: 100vw;
}
.bg-img-all {
  display: flex;
  width: 100vw;
  height: 177.78vw;
  background-image: url("../../../../static/mobile/bg.png");
  background-size: cover;
}

.download-button-sty {
  display: flex;
  margin-top: 19.58vw;
  margin-left: 8.06vw;
  width: 85.83vw;
  height: 17.67vw;
  background-image: url("../../../../static/mobile/btn_download.png");
  background-size: cover;
  animation-name: scaleDraw;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-duration: 1s;
}

@keyframes scaleDraw {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(1.1);
  }
  50% {
    transform: scale(1.1);
  }
  75% {
    transform: scale(1);
  }
}
</style>
