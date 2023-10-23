<template>
  <div id="gf-Main">
    <div class="main">

      <div class="banner-box" @click="clickTrack('bannerClick1')">
        <div class="download-pict" @click.stop="download_apk()">
          <img src="../../../../static/mobile/Download.png" alt="" class="pict">
        </div>
      </div>

      <div class="center-box">
        <div class="muti-bg">
          <div class="muti-title-pict">
            <img src="../../../../static/mobile/muti_title.png" alt="" class="pict">
          </div>
          <div class="muti-card-box">
            <div class="muti-card" v-for="mutiInfo in mutiInfoS" :key="mutiInfo.title1">
              <div class="muti-pict">
                <img :src="mutiInfo.pict" alt="" class="pict">
              </div>
              <span class="muti-title">{{ mutiInfo.title1 }}</span>
            </div>
          </div>
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
        <div class="five-bg">
          <div class="five-title-pict"> 
            <img src="../../../../static/mobile/step_title.png" alt="" class="pict">
          </div>

          <div class="five-card-box">
            <div class="five-card" v-for="fiveInfo in fiveInfoS" :key="fiveInfo.title">
              <div class="five-card-pict">
                <img :src="fiveInfo.pict" alt="" class="pict">
              </div>
              <div class="five-color-span-box">
                <span class="five-card-text">{{ fiveInfo.title }}</span>
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
          pict: "../../../../static/mobile/PayTM.png",
          title1: "PayTM",
        },
        {
          pict: "../../../../static/mobile/PhonePe.png",
          title1: "PhonePe",
        },
        {
          pict: "../../../../static/mobile/UPI.png",
          title1: "UPI",
        },
        {
          pict: "../../../../static/mobile/CardPayments.png",
          title1: "Card Payments",
        },
        {
          pict: "../../../../static/mobile/NetBanking.png",
          title1: "Net Banking",
        },
      ],
      fiveInfoS: [
        {
          title: '1:Click the button to download the game.',
          pict: "../../../../static/mobile/img_01.png",
        },
        {
          title: '2:Tap "OK" to keep the APK.',
          pict: "../../../../static/mobile/img_02.png",
        },
        {
          title: '3:Switch on the "SETTINGS".',
          pict: "../../../../static/mobile/img_03.png",
        },
        {
          title: "4:Allow the app to be installed on your device.",
          pict: "../../../../static/mobile/img_04.png",
        },
        {
          title: "5:Install the game and embark on the journey!",
          pict: "../../../../static/mobile/img_05.png",
        },
      ],
      bankInfoS: [
        {
          pict: "../../../../static/mobile/ic_01.png",
          title: "QUICK",
          title2: "WITHDRAWAL",
        },
        {
          pict: "../../../../static/mobile/ic_04.png",
          title: "BREATH-TAKING",
          title2: "GAMEPLAY",
        },
        {
          pict: "../../../../static/mobile/ic_03.png",
          title: "OVERWHELMING",
          title2: "VICTORY",
        },
        {
          pict: "../../../../static/mobile/ic_02.png",
          title: "SAFE",
          title2: "ENVIRONMENT",
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
    padding-top: 16.67vw;
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
  height: 111.11vw;
  background-image: url("../../../../static/mobile/banner.png");
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
  width: 58.33vw;
	height: 16.94vw;  
  margin-right: 22.17vw;
  margin-bottom: 29vw;
}
.center-box {
  .mid-box;
  width: 100%;
  box-sizing: border-box;
}
.muti-bg {
  width: 100%;
  height: 39.58vw;
  .flex-change-box;
  background-image: url("../../../../static/mobile/bg_01.png");
  background-size: cover;
  justify-content: flex-start;
}
.muti-title-head {
  font-size: 4.17vw;
  font-weight: bold;
  color: #fff;
  text-align: center;
}
.muti-card-box {
  width: 95vw;
  .flex-between;
  margin-top: 3.86vw;
}
.muti-card {
  .flex-change-box;
  justify-content: flex-start;
  width: 18.06vw;
  height: 14.39vw;
}
.muti-pict{
  width: 18.06vw;
	height: auto;
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
  padding-bottom: 5vw;
  background-image: url("../../../../static/mobile/bg_02.png");
  background-size: cover;
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
  font-size: 3.19vw;
  color: #ffffff;
  font-weight: bold;
}
.five-card-pict {
  width: 95vw;
  height: auto;
  margin-top: 5vw;
  margin-bottom: 3vw;
}
.channel-bg {
  width: 100vw;
  height: 36.94vw;
  .flex-change-box;
  box-sizing: border-box;
  background-color: #81000c;
}
.channel-title {
  font-size: 3.33vw;
  font-weight: bold;
  margin-top: 3.09vw;
  color: #a238c1;
}
.bank-card-box {
  width: 95.5vw;
  .flex-around;
}
.bank-card {
  .flex-change-box;
  justify-content: flex-start;
}
.bank-pict {
  width: 21.11vw;
	height: 20.97vw;
  margin-bottom: 2.08vw;
  
}
.bank-title {
  font-size: 2.7vw;
  font-weight: bold;
  line-height: 4vw;
  color: #ffc600;
}
.muti-title-pict{
  width: 85.97vw;
	height: 3.33vw;
  margin-top: 4.44vw;
}
.muti-title{
  font-size: 3.06vw;
  line-height: 3.16vw;
	color: #ffffff;
  text-align: center;
}
.five-title-pict{
  width: 70.28vw;
	height: 4.58vw;
  margin-top: 4.17vw;
}
.five-color-span-box{
  width: 78.19vw;
	height: 6.25vw;
	background-color: #6e0000;
	border-radius: 1.11vw;
  .mid-box;
}
</style>