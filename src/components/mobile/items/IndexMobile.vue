<template>
  <div id="gf-Main">
    <div class="main">

      <div class="banner-box" @click="clickTrack('bannerClick1')">
        <div class="download-pict" @click.stop="download_apk()">
          <img src="https://dapv7y4era0s5.cloudfront.net/teenmillion/mobile/android_app_btn.png" alt="" class="pict">
        </div>
      </div>

      <div class="center-box">
        <div class="channel-bg">
          <div class="bank-card-box">
            <div class="bank-card" v-for="bankInfo in bankInfoS" :key="bankInfo.title">
              <div class="bank-pict">
                <img :src="bankInfo.pict" alt="" class="pict">
              </div>
              <span class="bank-title">{{ bankInfo.title }}</span>
              <span class="bank-title bank-title-margin">{{ bankInfo.title2 }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="center-box">
        <div class="muti-bg">
          <span class="muti-title-head">MULTIPLE WITHDRAWAL METHODS</span>
          <div class="muti-card-box">
            <div class="muti-card" v-for="mutiInfo in mutiInfoS" :key="mutiInfo.title1">
              <img :src="mutiInfo.pict" alt="" class="pict">
            </div>
          </div>
        </div>
      </div>

      <div class="center-box">
        <div class="five-bg">
          <span class="five-title white-color">FIVE-STEP INSTALLATION METHOD</span>

          <div class="five-card-box">
            <div class="step-1-card">
              <div class="step-1-title">
                <span class="step-title-blue">STEP 1</span> <span class="step-title-mini step-title-mini-1">Tap the "download" button.</span>
              </div>
              <div class="step-1-pict" @click="clickTrack('stepPict1')">
                <img src="https://dapv7y4era0s5.cloudfront.net/teenmillion/mobile/step_1.png" alt="" class="pict">
              </div>
              <div class="arrow-pict arrow-step-1">
                <img src="https://dapv7y4era0s5.cloudfront.net/teenmillion/mobile/ic_blue_arrow.png" alt="" class="pict">
              </div>
            </div>
            <div class="step-2-card">

              <img src="https://dapv7y4era0s5.cloudfront.net/teenmillion/mobile/step_2.png" alt="" class="step-2-pict">
              <!-- <div class="step-2-pict">
              </div> -->
              <div class="step-right">
                <div class="step-2-title">
                  <span class="step-title-blue-right">STEP 2</span>
                  <span class="step-title-mini-right step-title-mini-2">Click "OK" button to continue.</span>
                </div>

                <div class="arrow-pict-reverse arrow-pict-margin-2">
                  <img src="https://dapv7y4era0s5.cloudfront.net/teenmillion/mobile/ic_blue_arrow.png" alt="" class="pict">
                </div>
              </div>
            </div>

            <div class="step-3-card step-2-card-reverse">

              <img src="https://dapv7y4era0s5.cloudfront.net/teenmillion/mobile/step_3.png" alt="" class="step-3-pict">
              <div class="step-left">
                <div class="step-3-title">
                  <span class="step-title-blue-right">STEP 3</span>
                  <span class="step-title-mini-right step-title-mini-3">Turn on "SETTINGS"
                    to set your device</span>
                </div>

                <div class="arrow-pict arrow-pict-margin-3">
                  <img src="https://dapv7y4era0s5.cloudfront.net/teenmillion/mobile/ic_blue_arrow.png" alt="" class="pict">
                </div>
              </div>
            </div>

            <div class="step-3-card">
              <img src="https://dapv7y4era0s5.cloudfront.net/teenmillion/mobile/step_4.png" alt="" class="step-4-pict">
              <div class="step-right step-height-4">
                <div class="step-2-title">
                  <span class="step-title-blue-right">STEP 4</span>
                  <span class="step-title-mini-right step-title-mini-2">Allow your device to
                    install the app.</span>
                </div>

                <div class="arrow-pict-reverse arrow-pict-margin-2">
                  <img src="https://dapv7y4era0s5.cloudfront.net/teenmillion/mobile/ic_blue_arrow.png" alt="" class="pict">
                </div>
              </div>
            </div>

            <div class="step-3-card step-2-card-reverse">

              <img src="https://dapv7y4era0s5.cloudfront.net/teenmillion/mobile/step_5.png" alt="" class="step-5-pict">
              <div class="step-left step-height-5">
                <div class="step-3-title">
                  <span class="step-title-blue-right">STEP 5</span>
                  <span class="step-title-mini-right step-title-mini-3">Confirm installation to
                    start the game.</span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { download, loadPage, chnup } from "../../../utils/tools";

export default {
  data() {
    return {
      mutiInfoS: [
        {
          pict: "https://dapv7y4era0s5.cloudfront.net/teenmillion/mobile/ic_5.png",
          title1: "paytm",
        },
        {
          pict: "https://dapv7y4era0s5.cloudfront.net/teenmillion/mobile/ic_6.png",
          title1: "icic",
        },
        {
          pict: "https://dapv7y4era0s5.cloudfront.net/teenmillion/mobile/ic_7.png",
          title1: "upi",
        },
        {
          pict: "https://dapv7y4era0s5.cloudfront.net/teenmillion/mobile/ic_8.png",
          title1: "card",
        },
        {
          pict: "https://dapv7y4era0s5.cloudfront.net/teenmillion/mobile/ic_9.png",
          title1: "netbank",
        },
      ],
      fiveInfoS: [
        {
          title: '1.Click the "Download" button.',
          pict: "https://dapv7y4era0s5.cloudfront.net/teenmillion/mobile/img_03.png",
        },
        {
          title: '2.Click "OK" to keep the APK.',
          pict: "https://dapv7y4era0s5.cloudfront.net/teenmillion/mobile/img_04.png",
        },
        {
          title: "3.Turn on the settings of your device.",
          pict: "https://dapv7y4era0s5.cloudfront.net/teenmillion/mobile/img_05.png",
        },
        {
          title: "4.Allow your device to install the app.",
          pict: "https://dapv7y4era0s5.cloudfront.net/teenmillion/mobile/img_06.png",
        },
        {
          title: "5.Install and have a great time.",
          pict: "https://dapv7y4era0s5.cloudfront.net/teenmillion/mobile/img_07.png",
        },
      ],
      bankInfoS: [
        {
          pict: "https://dapv7y4era0s5.cloudfront.net/teenmillion/mobile/ic_1.png",
          title: "VARIOUS",
          title2: "GAME MODES",
        },
        {
          pict: "https://dapv7y4era0s5.cloudfront.net/teenmillion/mobile/ic_4.png",
          title: "QUICK",
          title2: "WITHDRAWAL",
        },
        {
          pict: "https://dapv7y4era0s5.cloudfront.net/teenmillion/mobile/ic_3.png",
          title: "SAFE GAMING",
          title2: "SYSTEM",
        },
        {
          pict: "https://dapv7y4era0s5.cloudfront.net/teenmillion/mobile/ic_2.png",
          title: "SMOOTH",
          title2: "MATCHING",
        },
      ],
    };
  },
  methods: {
    download_apk: function (event) {
      // window._latest_apk = "https://mastertp.go.link/?adj_t=12swbuq0&adj_campaign=%7B%7Bcampaign.name%7D%7D%20%28%7B%7Bcampaign.id%7D%7D%29&adj_adgroup=%7B%7Badset.name%7D%7D%20%28%7B%7Badset.id%7D%7D%29&adj_creative=%7B%7Bad.name%7D%7D%20%28%7B%7Bad.id%7D%7D%29&adj_redirect=https%3A%2F%2Fmasterteenpattiindia.com%2Fstatic%2Fpkg%2FMasterTeenpatti.apk";
      // window.location.href = window._latest_apk;
      chnup("click");
      download();
    },
    download_gp: function () {
      chnup("click_v3");
      window.location.href = "https://teempattirich.go.link/?adj_t=12o5qq65";
    },
    clickTrack: function (msg) {
      if (msg == "stepPict2" || msg == "stepPict3" || msg == "stepPict4") {
        return;
      }
      chnup(msg);
    },
  },
  created() {
    loadPage();
  },
  mounted() {
    // this.$refs.five.horizontalScrollPolicy="off";
  },
};
</script>
<style scoped>
#gf-Main {
  background: #ffffff;
  height: auto;
}
</style>
<style lang="less" scoped>
@media screen and (max-width: 767px) {
  #gf-Main {
    // padding-top: 11.81vw;
  }
}
.head-title {
  .bold-font;
  font-size: 4.6vw;
  .text-center;
}
.italic-style {
  font-style: italic;
}
.green-color {
  color: #2a5c29;
}
.black-color {
  color: #000;
}
.red-color {
  color: #e10101;
}
.grey-color {
  color: #6b6a80;
}
.banner-box {
  width: 100%;
  height: 68.61vw;
  background-image: url("https://dapv7y4era0s5.cloudfront.net/teenmillion/mobile/banner.png");
  background-size: cover;
  .flex-change-box;
  justify-content: flex-end;
  align-items: flex-end;
}
.logo-pict {
  width: 27.92vw;
  height: 15.42vw;
  margin-top: 3vw;
}
.download-pict {
  width: 66.25vw;
  height: 17.92vw;
  margin-right: 6.17vw;
  margin-bottom: 3.39vw;
}
.center-box {
  .mid-box;
  width: 100%;
  box-sizing: border-box;
}
.muti-bg {
  width: 100%;
  height: 38.75vw;
  .flex-change-box;
  background-color: #2177e0;
}
.muti-title-head {
  font-size: 4.17vw;
  font-weight: bold;
  color: #fff;
  text-align: center;
}
.muti-card-box {
  width: 90.7vw;
  .flex-between;
  margin-top: 2.44vw;
}
.muti-card {
  .mid-box;
  width: 16.39vw;
  height: 16.39vw;
}
.game-show-bg {
  width: 100vw;
  height: 117.78vw;
  background-image: linear-gradient(0deg, #035d01 0%, #20a21d 100%);
  .flex-change-box;
  justify-content: space-around;
  padding: 4vw 0;
  box-sizing: border-box;
}
.game-show-pict {
  width: 91.39vw;
  height: 47.5vw;
}
.five-bg {
  width: 100vw;
  .flex-change-box;
  justify-content: flex-start;
  height: auto;
  padding-bottom: 10vw;
  background-image: linear-gradient(
      0deg,
      #b07800 0%,
      #595369 0%,
      #022dd1 0%,
      #0126ab 0%,
      #001e84 0%,
      #0070de 100%
    ),
    linear-gradient(#004cd7, #004cd7);
  background-blend-mode: normal, normal;
}
.five-title {
  font-size: 4.17vw;
  margin-top: 6.39vw;
  color: #fff;
  font-weight: bold;
}
.five-card-box {
  width: 86.53vw;
  .flex-change-box;
  justify-content: flex-start;
  box-sizing: border-box;
}
.five-card {
  .flex-change-box;
  justify-content: space-between;
  background-size: cover;
}
.five-card-title {
  font-size: 2.96vw;
  color: #a238c1;
  font-weight: bold;
  margin-top: 1.31vw;
  justify-content: space-between;
  .mid-box;
}
.five-card-text {
  font-size: 3.61vw;
  color: #ffffff;
  margin-top: 2.78vw;
}
.five-card-pict {
  width: 86.25vw;
  height: 78.47vw;
  margin-top: 5vw;
}
.channel-bg {
  width: 100vw;
  height: 35.56vw;
  .flex-change-box;
  box-sizing: border-box;
  background-image: url("https://dapv7y4era0s5.cloudfront.net/teenmillion/mobile/bg_1.png");
  background-size: cover;
}
.channel-title {
  font-size: 3.33vw;
  font-weight: bold;
  margin-top: 3.09vw;
  color: #a238c1;
}
.bank-card-box {
  width: 96.5vw;
  .flex-around;
}
.bank-card {
  .flex-change-box;
  justify-content: flex-start;
}
.bank-pict {
  width: 17.78vw;
  height: 17.92vw;
  margin-bottom: 2.08vw;
}
.bank-title {
  font-size: 2.5vw;
  font-weight: bold;
  line-height: 4 vw;
  color: #fff;
}

.gp-bg {
  .mid-box;
  width: 44.86vw;
  height: 14.31vw;
  position: absolute;
  top: 55vw;
  left: 5vw;
}
.pay-color {
  color: #a238c1;
}
.step-1-card {
  .flex-change-box;
  justify-content: flex-start;
  margin-top: 4.44vw;
   width: 92.5vw;
}
.step-1-title {
  .flex-start;
  margin-bottom: 3.33vw;
}
.step-title-blue {
  font-size: 4.17vw;
  font-weight: bold;
  line-height: 6.01vw;
  color: #09e7fb;
}
.step-title-mini {
  font-size: 3.33vw;
  line-height: 5.5vw;
  color: #ffffff;
}
.step-title-mini-1 {
  margin-left: 2.22vw;
}
.step-1-pict {
  width: 76.81vw;
  height: 36.53vw;
}
.arrow-pict {
  width: 15vw;
  height: 15.56vw;
}
.arrow-step-1 {
  position: relative;
  right: 38vw;
  top: -4vw;
}
.step-2-card {
  .mid-box;
  width: 92.5vw;
}
.step-3-card {
  .mid-box;
  margin-top: 4.17vw;
   width: 92.5vw; 
}
.step-2-pict {
  width: 55.69vw;
  height: 41.67vw;
}
.step-right {
  .flex-change-box;
  justify-content: flex-start;
  height: 43.67vw;
}
.step-left {
  .flex-change-box;
  justify-content: flex-start;
  height: 41.67vw;
}
.step-2-title {
  .flex-change-box;
  align-items: flex-start;
}
.step-3-title {
  .flex-change-box;
  align-items: flex-end;
}
.step-title-mini-2 {
  // margin-top: 2.22vw;
}
.step-title-mini-3 {
  text-align: right;
}
.step-title-blue-right {
  font-size: 4.17vw;
  font-weight: bold;
  color: #09e7fb;
}
.step-title-mini-right {
  font-size: 3.33vw;
  color: #ffffff;
}
.arrow-pict-reverse {
  width: 15vw;
  height: 15.56vw;
  transform: rotateY(180deg);
}
.arrow-pict-margin-2 {
  position: relative;
  right: 5vw;
  top: 12vw;
}
.step-2-card-reverse {
  flex-direction: row-reverse;
}
.step-3-pict {
  width: 54.58vw;
  height: 39.86vw;
  padding-left: 2.08vw;
}
.arrow-pict-margin-3 {
  position: relative;
  top: 5vw;
  right: 5vw;
}
.step-4-pict {
  width: 57.78vw;
  height: 39.86vw;
}
.step-height-4 {
  height: 41.56vw;
}
.step-5-pict{
  width: 54.58vw;
	height: 41.67vw;
}
.step-height-5 {
  height: 43.67vw;
  padding-right: 2vw;
}
</style>