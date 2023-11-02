<template>
  <div id="gf-Main">
    <div class="main">

      <div class="banner-box" @click="clickTrack('bannerClick1')">
        <div class="download-pict" @click.stop="download_apk()">
          <img src="https://dapv7y4era0s5.cloudfront.net/candycrush/banner_androidapp.png" alt="" class="pict">
        </div>
      </div>


      <div class="center-box">
        <div class="channel-bg">
          <div class="bank-card-box">
            <div class="bank-card" v-for="bankInfo in bankInfoS" :key="bankInfo.title">
              <!-- <div class="bank-pict">
                <img :src="bankInfo.pict" alt="" class="pict">
              </div> -->
              <span class="bank-title  bank-title-margin">{{ bankInfo.title }}</span>
              <span class="bank-title">{{ bankInfo.title2 }}</span>
            </div>
          </div>

        </div>
      </div>

      <div class="center-box" style="display:none">
        <div class="muti-bg">
          <!-- <div class="muti-title-bg">
            <span class="head-title">OFFER VARIOUS TOP-UP METHODS</span>
          </div> -->
          <div class="muti-card-box">
            <div class="muti-card" v-for="mutiInfo in mutiInfoS" :key="mutiInfo.title1">
              <div class="muti-pict">
                <img :src="mutiInfo.pict" alt="" class="pict">
              </div>
              <!-- <span class="muti-title">{{ mutiInfo.title1 }}</span> -->
            </div>
          </div>
        </div>
      </div>

      

      

      <div class="center-box" >
        <div class="five-bg">
          <div class="five-card-box">
            <div class="five-card" v-for="fiveInfo in fiveInfoS" :key="fiveInfo.title">
              <div :class="fiveInfo.pictStyle" @click="clickTrack(fiveInfo.track)">
                <img :src="fiveInfo.pict" alt="" class="pict">
              </div>
              <!-- <span class="five-card-text">{{ fiveInfo.title }}</span> -->
              <!-- <div class="five-color-span-box">
              </div> -->
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
        
      ],
      fiveInfoS: [
        {
          pictStyle: "five-pict-1",
          title: 'Step 1: Tap the "download" button.',
          pict: "https://dapv7y4era0s5.cloudfront.net/candycrush/img_01.png",
          track: "stepPict1"
        },
        {
          pictStyle: "five-pict-2",
          title: 'Step 2: Tap "OK" to download the APK.',
          pict: "https://dapv7y4era0s5.cloudfront.net/candycrush/img_02.png",
          track: "stepPict2"
        },
        {
          pictStyle: "five-pict-2",
          title: 'Step 3: Turn on "SETTINGS" to start your setting.',
          pict: "https://dapv7y4era0s5.cloudfront.net/candycrush/img_03.png",
          track: "stepPict3"
        },
        // {
        //   title: "Step 4: Allow your device to start installation process.",
        //   pict: "https://dapv7y4era0s5.cloudfront.net/candycrush/img_04.png",
        //   track: "stepPict4"
        // },
        // {
        //   title: "Step 5: Confirm installation to play the game.",
        //   pict: "https://dapv7y4era0s5.cloudfront.net/candycrush/img_06.png",
        //   track: "stepPict5"
        // },
      ],
      bankInfoS: [
        {
          pict: "https://dapv7y4era0s5.cloudfront.net/candycrush/ic_1.png",
          title: "VARIOUS",
          title2: "GAME OPTIONS",
        },
        {
          pict: "https://dapv7y4era0s5.cloudfront.net/candycrush/ic_2.png",
          title: "NEW MATCHING",
          title2: "METHOD",
        },
        {
          pict: "https://dapv7y4era0s5.cloudfront.net/candycrush/ic_3.png",
          title: "METHOD",
          title2: "GAME SYSTEM",
        },
        {
          pict: "https://dapv7y4era0s5.cloudfront.net/candycrush/ic_4.png",
          title: "BOUNTIFUL",
          title2: "REWARDS TO GET",
        },
      ],
    };
  },
  methods: {
    download_apk: function (event) {
      // window._latest_apk = "https://mastertp.go.link/?adj_t=12swbuq0&adj_campaign=%7B%7Bcampaign.name%7D%7D%20%28%7B%7Bcampaign.id%7D%7D%29&adj_adgroup=%7B%7Badset.name%7D%7D%20%28%7B%7Badset.id%7D%7D%29&adj_creative=%7B%7Bad.name%7D%7D%20%28%7B%7Bad.id%7D%7D%29&adj_redirect=https%3A%2F%2Fmasterteenpattiindia.com%2Fstatic%2Fpkg%2FMasterTeenpatti.apk";
      // window.location.href = window._latest_apk;
      chnup("click_v2");
      // download();
    },
    clickTrack: function (msg) {
      if (msg == "stepPict1" || msg == "bannerClick1") {
        chnup(msg);
        return;
      }
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
    padding-top: 15.56vw;
    background-color: #881de1;
  }
}
.head-title {
  .bold-font;
  font-size: 3.61vw;
  .text-center;
  color: #fff;
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
  background-image: url("https://dapv7y4era0s5.cloudfront.net/candycrush/banner.png");
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
  width: 44.58vw;
	height: 14.72vw;
  margin-right: 25.11vw;
  margin-bottom: 3.69vw;
}
.center-box {
  .mid-box;
  width: 100%;
  box-sizing: border-box;
}
.muti-bg {
  width: 100%;
  height: 37.5vw;
  .flex-change-box;
  background-color: #380068;
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
  width: 16.03vw;
	height: auto;
  margin-bottom: 1vw;
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
  height: 193.92vw;
  background-size: cover;
  background-image: url("https://dapv7y4era0s5.cloudfront.net/candycrush/bg.png");
}
.five-title {
  font-size: 4.17vw;
  margin-top: 6.39vw;
  color: #fff;
  font-weight: bold;
}
.five-card-box {
  width: 89.3vw;
  .flex-change-box;
  justify-content: flex-start;
  box-sizing: border-box;
  margin-top: 3vw;
  // margin-bottom: -5vw;
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
  position: relative;
  top: -7.33vw;
}
.five-pict-1{
  width: 94.78vw;
	height: 62.42vw;
}
.five-pict-2{
  width: 94.78vw;
	height: 54.58vw;
  margin-top: 5.97vw;
}
.channel-bg {
  width: 100vw;
  height: 26.86vw;
  .flex-change-box;
  box-sizing: border-box;
  justify-content: space-between;
  border-bottom: 2.08vw solid #d4aaff;
}
.channel-split-pict{
  width: 96.25vw;
  height: auto;
}
.channel-title {
  font-size: 3.33vw;
  font-weight: bold;
  margin-top: 3.09vw;
  color: #a238c1;
}
.bank-card-box {
  width: 98.5vw;
  .flex-around;
  position: relative;
  top: 2vw;
}
.bank-card {
  .flex-change-box;
  justify-content: flex-end;
  width: 22.86vw;
	height: 20.8vw;
  padding-bottom: 0.52vw;
  box-sizing: border-box;
}
.bank-card:nth-child(1){
  background-image: url("https://dapv7y4era0s5.cloudfront.net/candycrush/ic_01.png");
  background-size: cover;
}
.bank-card:nth-child(2){
  background-image: url("https://dapv7y4era0s5.cloudfront.net/candycrush/ic_02.png");
  background-size: cover;
}
.bank-card:nth-child(3){
  background-image: url("https://dapv7y4era0s5.cloudfront.net/candycrush/ic_03.png");
  background-size: cover;
}
.bank-card:nth-child(4){
  background-image: url("https://dapv7y4era0s5.cloudfront.net/candycrush/ic_04.png");
  background-size: cover;
}
.bank-pict {
  width: 22.78vw;
	height: 26.25vw;
  margin-bottom: 2.08vw;
}
.bank-title {
  font-size: 2.3vw;
  line-height: 3vw;
  color: #fff;
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
.muti-title-bg{
  background-color: #b064ff;
  width: 100%;
  .mid-box;
  height: 7.36vw;
}
</style>