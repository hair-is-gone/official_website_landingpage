<template>
  <div id="gf-Main">
    <div class="main">
      
      <div class="banner-box" @click="clickTrack('bannerClick1')">
        <div class="download-pict" @click.stop="download_apk()">
          <img src="https://dapv7y4era0s5.cloudfront.net/ludobuster/banner_android.png" alt="" class="pict">
        </div>
      </div>

      <div class="center-box">
        <div class="muti-bg">
          <span class="muti-title-head">THE MULTIPLE WITHDRAW METHODS YOU CAN CHOOSE</span>
          <div class="muti-card-box"> 
            <div class="muti-card" v-for="mutiInfo in mutiInfoS" :key="mutiInfo.title1">
              <img :src="mutiInfo.pict" alt="" class="pict">
            </div>
          </div>
        </div>
      </div>

      <div class="center-box">
        <div class="game-show-bg">
          <div class="game-show-pict">
            <img src="https://dapv7y4era0s5.cloudfront.net/ludobuster/img_01.png" alt="" class="pict">
          </div>
          <div class="game-show-pict">
            <img src="https://dapv7y4era0s5.cloudfront.net/ludobuster/img_02_new.png" alt="" class="pict">
          </div>
        </div>
      </div>

      <div class="center-box">
        <div class="channel-bg">
          <div class="bank-card-box">
            <div class="bank-card" v-for="bankInfo in bankInfoS" :key="bankInfo.title"  >
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
          <span class="five-title white-color">Steps to Download the Game</span>

          <div class="five-card-box">
            <div class="five-card" v-for="fiveInfo in fiveInfoS" :key="fiveInfo.title">
              <div class="five-card-pict">
                <img :src="fiveInfo.pict" alt="" class="pict">
              </div>
              <span class="five-card-text">{{ fiveInfo.title }}</span>
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
          pict: "https://dapv7y4era0s5.cloudfront.net/ludobuster/paytm.png",
          title1: "paytm",
        },
        {
          pict: "https://dapv7y4era0s5.cloudfront.net/ludobuster/icic.png",
          title1: "icic",
        },
        {
          pict: "https://dapv7y4era0s5.cloudfront.net/ludobuster/upi.png",
          title1: "upi",
        },
        {
          pict: "https://dapv7y4era0s5.cloudfront.net/ludobuster/cardpayments.png",
          title1: "card",
        },
        {
          pict: "https://dapv7y4era0s5.cloudfront.net/ludobuster/netbanking.png",
          title1: "netbank",
        },
      ],
      fiveInfoS: [
        {
          title: '1.Click the "Download" button.',
          pict: "https://dapv7y4era0s5.cloudfront.net/ludobuster/img_03.png",
        },
        {
          title: '2.Click "OK" to keep the APK.',
          pict: "https://dapv7y4era0s5.cloudfront.net/ludobuster/img_04.png",
        },
        {
          title: '3.Turn on the settings of your device.',
          pict: "https://dapv7y4era0s5.cloudfront.net/ludobuster/img_05.png",
        },
        {
          title: '4.Allow your device to install the app.',
          pict: "https://dapv7y4era0s5.cloudfront.net/ludobuster/img_06.png",
        },
        {
          title: '5.Install and have a great time.',
          pict: "https://dapv7y4era0s5.cloudfront.net/ludobuster/img_07.png",
        },
      ],
      bankInfoS: [
        {
          pict: "https://dapv7y4era0s5.cloudfront.net/ludobuster/ic_01.png",
          title: "VARIETY",
          title2: "OF OPTIONS",
        },
        {
          pict: "https://dapv7y4era0s5.cloudfront.net/ludobuster/ic_02.png",
          title: "PLAY TO",
          title2: "GET REWARDS",
        },
        {
          pict: "https://dapv7y4era0s5.cloudfront.net/ludobuster/ic_03.png",
          title: "SECURE AND",
          title2: "FAIR SPACE",
        },
        {
          pict: "https://dapv7y4era0s5.cloudfront.net/ludobuster/ic_04.png",
          title: "EFFICIENT",
          title2: "WITHDRAWAL SYSTEM",
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
  height: 62.5vw;
  background-image: url("https://dapv7y4era0s5.cloudfront.net/ludobuster/banner_new.png");
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
  width: 33.19vw;
	height: 10.56vw;
  margin-right: 16.17vw;
  margin-bottom: 1.39vw;
}
.center-box{
  .mid-box;
  width: 100%;
  box-sizing: border-box;
}
.muti-bg{
  width: 100%;
  height: 38.19vw;
  .flex-change-box;
}
.muti-title-head{
  font-size: 4.17vw;
	// font-weight: bold;
	color: #333333;
  text-align: center;
  font-family: "ac";
}
.muti-card-box{
  width: 95.28vw;
  .flex-between;
  margin-top: 2.44vw;
}
.muti-card{
  .mid-box;
  width: 16.81vw;
	height: 19.86vw;
}
.game-show-bg{
  width: 100vw;
	height: 117.78vw;
	background-image: linear-gradient(0deg, 
		#035d01 0%, 
		#20a21d 100%);
  .flex-change-box;
  justify-content: space-around;
  padding: 4vw 0;
  box-sizing: border-box;
}
.game-show-pict{
  width: 91.39vw;
	height: 47.5vw;
}
.five-bg{
  width: 100vw;
  .flex-change-box;
  justify-content: flex-start;
  margin-top: 2.2vw;
  height: auto;
  background-image: url("https://dapv7y4era0s5.cloudfront.net/ludobuster/bg_02.png");
  background-size: cover;
  padding-bottom: 3vw;
}
.five-title{
  font-size: 4.17vw;
  margin-top: 6.39vw;
  color: #fff;
  font-family: "ac";
}
.five-card-box{
  width: 86.53vw;
  .flex-change-box;
  justify-content: flex-start;
  box-sizing: border-box;
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
  font-size: 3.61vw;
  color: #ffffff;
  margin-top: 2.78vw;
}
.five-card-pict{
  width: 86.25vw;
	height: 78.47vw;
  margin-top: 5vw;
}
.channel-bg{
  width: 86.53vw;
  height: 37.5vw;
  .flex-change-box;
  box-sizing: border-box;
}
.channel-title{
  font-size: 3.33vw;
  font-weight: bold;
  margin-top: 3.09vw;
  color: #a238c1;
}
.bank-card-box{
  width: 96.5vw;
  .flex-around;
  margin-top: 4.58vw;
  position: relative;
  left: 2.5vw;
}
.bank-card{
  .flex-change-box;
  justify-content: flex-start;
  position: relative;
  left: 1vw;
}
.bank-card:last-child{
  position: relative;
  left: -1.5vw;
}
.bank-pict{
  width: 20.69vw;
  height: auto;
}
.bank-title{
  font-size: 2.5vw;
  line-height: 5vw;
  color: #333333;
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