<template>
  <div id="gf-Main">
    <div class="main">
      
      <div class="banner-box" @click="clickTrack('bannerClick1')">
        <!-- <div class="logo-pict" @click="clickTrack('headClick1')">
          <img src="../../../../static/mobile/logo.png" alt="" class="pict">
        </div> -->
        <div class="download-pict" @click="download_apk()">
          <img src="../../../../static/mobile/btn_ad.png" alt="" class="pict">
        </div>
        <!-- <div class="gp-bg" @click="download_gp()">
            <img src="../../../../static/mobile/btn_gp.png" alt="" class="pict">
        </div> -->
      </div>

      <div class="center-box">
        <div class="muti-bg">
          <div class="muti-card" v-for="mutiInfo in mutiInfoS" :key="mutiInfo.title1"  v-bind:style="{ backgroundColor: mutiInfo.bgColor }" >
            <div class="muti-card-pict">
              <img :src="mutiInfo.pict" alt="" class="pict">
            </div>
            <span class="muti-title-1">{{ mutiInfo.title1 }}</span>
          </div>
        </div>
      </div>


      <div class="center-box">
        <div class="five-bg">
          <div class="five-bg-title"></div>
          <span class="five-title white-color">HOW TO ACCESS THE LUDO GAME?</span>

          <div class="five-card-box">
            <div class="five-card" v-for="fiveInfo in fiveInfoS" :key="fiveInfo.title" @click="clickTrack(fiveInfo.track)"  v-bind:style="{height: fiveInfo.pictH, width: fiveInfo.pictW, backgroundImage: fiveInfo.pict, marginBottom: fiveInfo.marginBottom}">
              <div class="five-card-title">
                <span >{{ fiveInfo.title }}</span>
              </div>
              <div class="five-card-text">
                <span>{{fiveInfo.text}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="center-box">
        <div class="channel-bg">
          <span class="channel-title pay-color">THE PAYMENT CHANNELS YOU CAN CHOOS</span>
          <div class="bank-card-box">
            <div class="bank-card" v-for="bankInfo in bankInfoS" :key="bankInfo.name" v-bind:style="{marginRight: bankInfo.marginRight, marginBottom: bankInfo.marginBottom}" >
              <div class="bank-pict">
                <img :src="bankInfo.pict" alt="" class="pict">
              </div>
              <span class="bank-title">{{ bankInfo.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { download, loadPage, chnup } from "../../../utils/tools"

export default {
  data() {
    return {
      mutiInfoS: [
        {
          pict: "../../../../static/img/ic_01.png",
          title1: "THRILLING LUDO VARIANTS & MODE",
          title2: "",
          track: "mIcon1",
          bgColor: "#ff49db",
        },
        {
          pict: "../../../../static/img/ic_02.png",
          title1: "PLAY LUDO ANYTIME & ANYWHERE",
          title2: "",
          track: "mIcon2",
          bgColor: "#4978ff",
        },
        {
          pict: "../../../../static/img/ic_03.png",
          title1: "100% FAIR PLAY EXPERIENCE",
          title2: "",
          track: "mIcon3",
          bgColor: "#08b449",
        },
        {
          pict: "../../../../static/img/ic_04.png",
          title1: "PLAY BIG TO WIN HUGE BONUS",
          title2: "",
          track: "mIcon4",
          bgColor: "#eb9704",
        },
      ],
      fiveInfoS: [
        {
          title: 'Step 1',
          pict: "url('../../../../static/mobile/steps1.png')",
          num: "../../../../static/mobile/ic_1.png",
          track: "stepPict1",
          text: "1. Click the \"Download\" button.",
          pictW: 42.92 + "vw",
          pictH: 35.14 + "vw",
          marginBottom: 1.94 + "vw",
        },
        {
          title: 'Step 2',
          pict: "url('../../../../static/mobile/steps2.png')",
          num: "../../../../static/mobile/ic_2.png",
          track: "stepPict2",
          text: "2.	Click \"OK\" to keep the APK.",
          pictW: 42.92 + "vw",
          pictH: 35.14 + "vw",
          marginBottom: 1.94 + "vw",
        },
        {
          title: 'Step 3',
          pict: "url('../../../../static/mobile/steps3.png')",
          num: "../../../../static/mobile/ic_3.png",
          track: "stepPict3",
          text: "3. Turn on the Settings of your device.",
          pictW: 42.92 + "vw",
          pictH: 35.14 + "vw",
          marginBottom: 1.94 + "vw",
        },
        {
          title: "Step 4",
          pict: "url('../../../../static/mobile/steps4.png')",
          num: "../../../../static/mobile/ic_4.png",
          track: "stepPict4",
          text: "4. Allow your device to install the app.",
          pictW: 42.92 + "vw",
          pictH: 35.14 + "vw",
          marginBottom: 1.94 + "vw",
        },
        {
          title: "Step 5",
          pict: "url('../../../../static/mobile/steps5.png')",
          num: "../../../../static/mobile/ic_5.png",
          track: "stepPict5",
          text: "5. Start installing, then enjoy the game.",
          pictW: 86.53 + "vw",
          pictH: 27.22 + "vw",
          marginBottom: 0 + "vw",
        },
      ],
      bankInfoS: [
        {
          pict: "../../../../static/mobile/ic_paytm.png",
          name: "PayTM",
          track: "bankPict1",
          marginRight: -1 + "vw",
          marginBottom: 1 + "vw",
        },
        {
          pict: "../../../../static/mobile/ic_bhim.png",
          name: "Google Pay",
          track: "bankPict2",
          marginRight: -1 + "vw",
          marginBottom: 1 + "vw",
        },
        {
          pict: "../../../../static/mobile/ic_upi.png",
          name: "UPI",
          track: "bankPict3",
          marginBottom: 1 + "vw",
        },
        {
          pict: "../../../../static/mobile/ic_cardpay.png",
          name: "Card Payments",
          track: "bankPict4",
          marginRight: 4 + "vw",
          marginBottom: 0 + "vw",
        },
        {
          pict: "../../../../static/mobile/ic_netbank.png",
          name: "Net Banking",
          track: "bankPict5",
          marginRight: 0 + "vw",
          marginBottom: 0 + "vw",
        },
      ]
    };
  },
  methods: {
    download_apk: function (event) {
      // window._latest_apk = "https://mastertp.go.link/?adj_t=12swbuq0&adj_campaign=%7B%7Bcampaign.name%7D%7D%20%28%7B%7Bcampaign.id%7D%7D%29&adj_adgroup=%7B%7Badset.name%7D%7D%20%28%7B%7Badset.id%7D%7D%29&adj_creative=%7B%7Bad.name%7D%7D%20%28%7B%7Bad.id%7D%7D%29&adj_redirect=https%3A%2F%2Fmasterteenpattiindia.com%2Fstatic%2Fpkg%2FMasterTeenpatti.apk";
      // window.location.href = window._latest_apk;
      download()
    },
    download_gp: function(){
      chnup("click_v3")
      window.location.href = "https://teempattirich.go.link/?adj_t=12o5qq65";
    },
    clickTrack: function(msg){
        if(msg == "stepPict2" || msg=="stepPict3" || msg=="stepPict4"){
          return
        }
        chnup(msg)
    }
  },
  created() {
    // loadPage();
  },
  mounted(){
    // this.$refs.five.horizontalScrollPolicy="off";
  }
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
    padding-top: 11.3vw;
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
.black-color{
  color: #000;
}
.red-color{
  color: #e10101;
}
.grey-color{
  color: #6b6a80;
}
.banner-box {
  width: 100%;
  height: 59.17vw;
  background-image: url("../../../../static/mobile/banner1.png");
  background-size: cover;
  .flex-change-box;
  justify-content: flex-end;
  align-items: flex-end;
}
.logo-pict{
  width: 27.92vw;
	height: 15.42vw;
  margin-top: 3vw;
}
.download-pict{
  width: 37.5vw;
	height: 12.5vw;
  margin-right: 9.17vw;
  margin-bottom: 1.53vw;
}
.center-box{
  .mid-box;
  width: 100%;
  box-sizing: border-box;
}
.muti-bg{
  width: 90vw;
  height: 53.2vw;
  .flex-between;
  flex-direction: column;
  margin-top: 2.78vw;
}
.muti-card{
  .flex-change-box;
  width: 75.36vw;
	height: 12.92vw;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
}
.muti-card-pict{
  width: 12.92vw;
	height: 12.22vw;
  margin-top: 1vw;
  margin-left: 6.5vw;
  margin-right: 2.2vw;
}
.muti-title-1{
  font-weight: bold;
  font-size: 2.60vw;
  font-stretch: normal;
  line-height: 5.56vw;
  letter-spacing: 0vw;
  color: #ffffff;
}
.five-bg{
  width: 100vw;
  .flex-change-box;
  justify-content: flex-start;
  margin-top: 3.89vw;
}
.five-bg-title{
  width: 89.72vw;
  .mid-box;
  height: 1.39vw;
  background-color: #a238c1;
}
.five-title{
  font-size: 4.17vw;
  font-weight: bold;
  margin-top: 2.27vw;
  color: #a238c1;
}
.five-card-box{
  width: 86.53vw;
  .flex-start;
  flex-flow: row;
  justify-content: space-between;
  flex-wrap: wrap;
  box-sizing: border-box;
  margin-top: 3.7vw;
}
.five-card{
  .flex-change-box;
  justify-content: space-between;
  background-size: cover;
}
.five-card-title{
  font-size: 2.96vw;
	color: #a238c1;
  font-weight: bold;
  margin-top: 1.31vw;
  justify-content: space-between;
  .mid-box;
}
.five-card-text{
  .mid-box;
  font-size: 2.3vw;
  font-family: Roboto-Bold;
  font-weight: normal;
  font-stretch: normal;
  margin-bottom: 1.41vw;
  align-self: center;
  color: #ffffff;
}
.five-num{
  width: 4.44vw;
	height: 4.44vw;
  margin-right: 2vw;
}
.five-card-pict{
  width: 59.44vw;
	height: 42.64vw;
  margin-top: 3vw;
}
.channel-bg{
  width: 86.53vw;
  height: 62.64vw;
  .flex-change-box;
  justify-content: flex-start;
  margin-top: 4.03vw;
  margin-bottom: 8.19vw;
  box-sizing: border-box;
  background-color: #ffedff;
}
.channel-title{
  font-size: 3.33vw;
  font-weight: bold;
  margin-top: 3.09vw;
  color: #a238c1;
}
.bank-card-box{
  width: 64vw;
  .mid-box;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 3.44vw;
}
.bank-card{
  width: 22.08vw;
  .flex-change-box;
  justify-content: center;
  margin-right: -1vw;
}
.bank-pict{
  width: 22.08vw;
  height: auto;
}
.bank-title{
  font-size: 2.20vw;
  color: #858585;
  margin-top: -2.0vw;
  font-weight: bold;
}

.gp-bg{
  .mid-box;
  width: 44.86vw;
	height: 14.31vw;
  position: absolute;
  top: 55vw;
  left: 5vw;
}
.pay-color{
  color: #a238c1;
}
</style>