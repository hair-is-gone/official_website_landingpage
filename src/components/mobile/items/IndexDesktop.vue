<template>
  <div id="gf-Main">
    <div class="main">

      <div class="banner-box" @click="clickTrack('bannerClick1')">
        <!-- <div class="logo-pict" @click="clickTrack('headClick1')">
          <img src="../../../../static/img/logo.png" alt="" class="pict">
        </div> -->
        <div class="two-btn">
          <!-- <div class="gp-bg" @click="download_gp()">
            <img src="../../../../static/img/btn_gp.png" alt="" class="pict">
          </div> -->
          <div class="download-pict" @click="download_apk()">
            <img src="../../../../static/img/btn_ad.png" alt="" class="pict">
          </div>
        </div>
      </div>

      <div class="center-box">
        <div class="muti-bg">
          <div class="muti-container">
            <div class="muti-card" v-for="mutiInfo in mutiInfoS" :key="mutiInfo.title1" v-bind:style="{ backgroundColor: mutiInfo.bgColor }" >
              <div class="muti-card-pict">
                <img :src="mutiInfo.pict" alt="" class="pict">
              </div>
              <div class="muti-info">
                <span class="muti-title-1 muti-title-1-margin">{{ mutiInfo.title1 }}</span>
                <span class="muti-title-1">{{ mutiInfo.title2 }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class="center-box">
        <div class="five-bg">
          <div class="five-bg-title"></div>
          <span class="five-title">HOW TO ACCESS THE LUDO GAME?</span>
          <!-- <div class="five-title-pict">
            <img src="../../../../static/img/ic_hr.png" alt="" class="pict">
          </div> -->
          <div class="five-card-box">
            <div class="five-card" v-for="fiveInfo in fiveInfoS" :key="fiveInfo.title" @click="clickTrack(fiveInfo.track)" v-bind:style="{height: fiveInfo.pictH, width: fiveInfo.pictW, backgroundImage: fiveInfo.pict, marginBottom: fiveInfo.marginBottom}">
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

      <!-- <div class="center-box">
        <div class="gp-bg" @click="download_gp()">
          <img src="../../../../static/img/btn_gp.png" alt="" class="pict">
        </div>
      </div> -->

      <div class="center-box">
        <div class="channel-bg">
          <span class="channel-title pay-color">THE PAYMENT CHANNELS YOU CAN CHOOSE</span>
          <div class="bank-card-box">
            <div class="bank-card" v-for="bankInfo in bankInfoS" :key="bankInfo.name" >
              <div class="bank-pict">
                <img :src="bankInfo.pict" alt="" class="pict">
              </div>
              <div class="bank-title">{{ bankInfo.name }}</div>
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
          title1: "THRILLING LUDO",
          title2: "VARIANTS & MODE",
          track: "mIcon1",
          bgColor: "#ff49db",
        },
        {
          pict: "../../../../static/img/ic_02.png",
          title1: "PLAY LUDO",
          title2: "ANYTIME & ANYWHERE",
          track: "mIcon2",
          bgColor: "#4978ff",
        },
        {
          pict: "../../../../static/img/ic_03.png",
          title1: "100% FAIR",
          title2: "PLAY EXPERIENCE",
          track: "mIcon3",
          bgColor: "#08b449",
        },
        {
          pict: "../../../../static/img/ic_04.png",
          title1: "PLAY BIG TO WIN",
          title2: "HUGE BONUS",
          track: "mIcon4",
          bgColor: "#eb9704",
        },
      ],
      fiveInfoS: [
        {
          title: 'Step 1',
          pict: "url('../../../../static/img/steps1.png')",
          num: "../../../../static/img/ic_1.png",
          track: "stepPict1",
          text: "1. Click the \"Download\" button.",
          pictW: 32.24 + "vw",
          pictH: 16.09 + "vw",
          marginBottom: 2.45 + "vw",
        },
        {
          title: 'Step 2',
          pict: "url('../../../../static/img/steps2.png')",
          num: "../../../../static/img/ic_2.png",
          track: "stepPict2",
          text: "2.	Click \"OK\" to keep the APK.",
          pictW: 32.24 + "vw",
          pictH: 16.09 + "vw",
          marginBottom: 2.45 + "vw",
        },
        {
          title: 'Step 3',
          pict: "url('../../../../static/img/steps3.png')",
          num: "../../../../static/img/ic_3.png",
          track: "stepPict3",
          text: "3. Turn on the Settings of your device.",
          pictW: 21.51 + "vw",
          pictH: 24.53 + "vw",
          marginBottom: "0vw",
        },
        {
          title: "Step 4",
          pict: "url('../../../../static/img/steps4.png')",
          num: "../../../../static/img/ic_4.png",
          track: "stepPict4",
          text: "4. Allow your device to install the app.",
          pictW: 21.51 + "vw",
          pictH: 24.53 + "vw",
          marginBottom: "0vw",
        },
        {
          title: "Step 5",
          pict: "url('../../../../static/img/steps5.png')",
          num: "../../../../static/img/ic_5.png",
          track: "stepPict5",
          text: "5. Start installing, then enjoy the game.",
          pictW: 21.51 + "vw",
          pictH: 24.53 + "vw",
          marginBottom: "0vw",
        },
      ],
      bankInfoS: [
        {
          pict: "../../../../static/img/ic_paytm.png",
          name: "PayTM",
          track: "bankPict1",
        },
        {
          pict: "../../../../static/img/ic_bhim.png",
          name: "Google Pay",
          track: "bankPict2",
        },
        {
          pict: "../../../../static/img/ic_upi.png",
          name: "UPI",
          track: "bankPict3",
        },
        {
          pict: "../../../../static/img/ic_cardpay.png",
          name: "Card Payments",
          track: "bankPict4",
        },
        {
          pict: "../../../../static/img/ic_netbank.png",
          name: "Net Banking",
          track: "bankPict5",
        },
      ]
    };
  },
  methods: {
    download_apk: function (event) {
      // window._latest_apk = "https://mastertp.go.link/?adj_t=12swbuq0&adj_campaign=%7B%7Bcampaign.name%7D%7D%20%28%7B%7Bcampaign.id%7D%7D%29&adj_adgroup=%7B%7Badset.name%7D%7D%20%28%7B%7Badset.id%7D%7D%29&adj_creative=%7B%7Bad.name%7D%7D%20%28%7B%7Bad.id%7D%7D%29&adj_redirect=https%3A%2F%2Fmasterteenpattiindia.com%2Fstatic%2Fpkg%2FMasterTeenpatti.apk";
      // window.location.href = window._latest_apk;
      chnup("click")
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
    // showTips() {
    //   this.$alert(
    //     "Players from Restricted states like Karnataka, Meghalaya, Andhra Pradesh, Assam, Odisha, Sikkim, Nagaland,Tamil Nadu, Arunachal Pradesh, and Telangana, all users residing or logging in from the mentioned states will not access to play Rummy online for Cash.", {
    //     confirmButtonText: "confirm",
    //   }
    //   );
    // },
  },
  created() { 
    loadPage();
  },
  computed: {},
};
</script>

<style lang="less" scoped>
#gf-Main {
  //padding-top: 7.55vw;
  background: #ffffff;
  height: auto;
}
.banner-box {
  width: 100%;
  height: 40.99vw;
  background-image: url("../../../../static/img/banner.png");
  background-size: cover;
  .flex-change-box;
  justify-content: flex-start;
}
.logo-pict{
  width: 17.6vw;
	height: 9.69vw;
  margin-top: 1.15vw;
}
.download-pict{
  width: 24.53vw;
	height: 8.18vw;
}
.center-box{
  .mid-box;
  width: 100%;
  box-sizing: border-box;
}
.muti-bg{
  .mid-width;
  height: 23.23vw;
  .flex-between;
  margin-top: 1.88vw;
  box-sizing: border-box;
  background: #ffedff;
  justify-content: center;
}
.muti-container{
  .flex-between;
  box-sizing: border-box;
  margin-left: 2.29vw;
  margin-right: 2.29vw;
  width: 100%;
  height: 100%;
}
.muti-card{
  .mid-box;
  width: 15.42vw;
	height: 16.72vw;
  flex-direction: column;
  justify-content: flex-start;
}
.muti-card-pict{
  width: 13.96vw;
	height: 13.18vw;
  margin-top: -1.51vw;
}
.muti-info{
  .flex-change-start;
  align-items: center;
}
.muti-title-1{
  text-align: center;
  color: #ffffff;
  font-family: Roboto-Bold;
  font-size: 1.34vw;
  font-weight: normal;
  font-stretch: normal;
  line-height: 2.08vw;
  letter-spacing: -0.04vw;
}
.muti-title-1-margin{
  margin-top: 0vw;
}
.five-bg{
  .mid-width;
  .flex-change-box;
  justify-content: flex-start;
  margin-top: 2.34vw;
  box-sizing: border-box;
}
.five-bg-title{
  .mid-width;
  .mid-box;
  height: 1.04vw;
  background-color: #a238c1;
}
.five-title{
  font-size: 2.41vw;
  line-height: 2.25vw;
  color: #a238c1;
  margin-top: 1vw;
  margin-bottom: 1.26vw;
  font-weight: bold;
}
.five-title-pict{
  width: 51.11vw;
	height: 4.58vw;
  margin-top: 1.94vw;
}
.five-card-box{
  .mid-width;
  .mid-box;
  box-sizing: border-box;
  justify-content: space-between;
  padding-left: 2.14vw;
  padding-right: 2.14vw;
  flex-wrap: wrap;
}
.five-card{
  .flex-change-box;
  justify-content: space-between;
  background-size: cover;
}
.five-card-title{
  .mid-box;
  font-size: 1.88vw;
	color: #a238c1;
  margin-top: 1.0vw;
  font-weight: bold;
}
.five-card-text{
  .mid-box;
  height: 2.5vw;
  font-size: 1.1vw;
  font-family: Roboto-Bold;
  font-weight: normal;
  font-stretch: normal;
  align-self: center;
  color: #ffffff;
}
.channel-bg{
  .mid-width;
  .flex-change-box;
  justify-content: flex-start;
  margin-top: 1.98vw;
  margin-bottom: 1.98vw;
  height: 23.02vw;
  box-sizing: border-box;
  background-color: #ffedff;
}
.channel-title{
  font-size: 2.41vw;
  font-weight: bold;
  margin-top: 1.59vw;
}
.bank-card-box{
  .mid-box;
  width: 67vw;
  justify-content: space-between;
  margin-top: 2.49vw;
}
.bank-card{
  width: 11.41vw;
  .flex-change-box;
}
.bank-pict{
  width: 11.41vw;
	height: 11.41vw;
}
.bank-title{
  font-size: 1.35vw;
  margin-top: 0vw;
  color: #858585;
  font-weight: bold;
  letter-spacing: -0.04vw;
}
.gp-bg{
 width: 17.45vw;
	height: 4.9vw;
}
.pay-color{
  color: #a238c1;
}
.two-btn{
  .flex-between;
  width: 24.53vw;
  align-self: flex-end;
  position: relative;
  top: 31.77vw;
  right: 20.52vw;
}
</style>
