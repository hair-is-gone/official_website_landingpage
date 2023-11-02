<template>
  <div id="h5-footer">
    <div class="mid-box footer-info">
      <div class="link-total-box">
        <div class="link-box-bg">
          <span class="footer-head-title">QUICK LINKS</span>
          <div class="link-box">
            <div @click="gotoPage('linkClick3')" class="link-style">Refunds/Cancellations</div>
            <div @click="gotoPage('linkClick2')" class="link-style">Terms & Conditions</div>
            <div @click="gotoPage('linkClick4')" class="link-style">Privacy Policy</div>
            <div @click="gotoPage('linkClick1')" class="link-style">Contact Us</div>
          </div>
        </div>
        <div class="security-items">
          <span class="footer-head-title">SECURITY & GAME INTEGRITY</span>
          <div class="security-box">
            <div class="security-items-1" @click="gotoPage('sslClick2')">
              <img src="https://dapv7y4era0s5.cloudfront.net/candycrush/secured.png" alt="security-pict" class="pict" />
            </div>
            <div class="security-items-1" @click="gotoPage('sslClick1')">
              <img src="https://dapv7y4era0s5.cloudfront.net/candycrush/ssl.png" alt="security-pict" class="pict" />
            </div>
            <div class="security-items-1" @click="gotoPage('sslClick5')">
              <img src="https://dapv7y4era0s5.cloudfront.net/candycrush/fraud.png" alt="security-pict" class="pict" />
            </div>
            <div class="security-items-1" @click="gotoPage('sslClick4')">
              <img src="https://dapv7y4era0s5.cloudfront.net/candycrush/18.png" alt="security-pict" class="pict" />
            </div>
            <div class="security-items-1" @click="gotoPage('sslClick3')">
              <img src="https://dapv7y4era0s5.cloudfront.net/candycrush/know.png" alt="security-pict" class="pict" />
            </div>
          </div>
        </div>
      </div>

      <div class="copy-right">
        <span style="color: #fff; font-size: 2.78vw">@2023 Candy Crush</span>
      </div>
    </div>
    <div class="last-banner">
      <img src="https://dapv7y4era0s5.cloudfront.net/candycrush/bottom_androidapp.png" alt="download-pict" class="download-pict" @click="download_apk()">
      <img src="https://dapv7y4era0s5.cloudfront.net/candycrush/bottom_arrow.png" alt="" class="arrow-pict">
    </div>
  </div>
</template>

<script>
import { chnup } from "../../../utils/tools";

export default {
  methods: {
    gotoPage: function (msg) {
      // chnup(msg)
      // this.$router.push(msg);
    },
    download_apk: function () {
      chnup("click_v3");
      // download();
    },
  },
};
</script>

<style lang="less" scoped>
#h5-footer {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-size: cover;
  box-sizing: border-box;
  padding-bottom: 31.94vw;
  background-color: #6622ab;
}

.h5-footer-url-box {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.menu-items {
  width: 90%;
  height: 16.51vw;
  margin-left: 9.27vw;
  font-size: 3.25vw;
  line-height: 6.25vw;
  letter-spacing: 0vw;
  color: #ffffff;
  margin-top: 1.44vw;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: flex-start;
  margin-top: 1.92vw;
}

.menu-items span {
  margin-right: 10.41vw;
}

.security-title {
  font-size: 3.61vw;
  font-weight: bold;
  color: #ffffff;
  width: 100%;
  text-align: center;
}

.security-box-items {
  width: 51.94vw;
  // height: 17vw;
  .flex-between;
  box-sizing: border-box;
  flex-wrap: wrap;
}

.security-items {
  width: 58.28vw;
  .flex-change-box;
  justify-content: flex-start;
  box-sizing: border-box;
  padding-top: 2vw;
  position: relative;
  left: 1.5vw;
}

.security-items-1 {
  width: 13.19vw;
	height: 12.64vw;
  margin-right: 1.67vw;
  margin-bottom: 1.39vw;
}
.security-items-2 {
  width: 21.94vw;
  height: 9.31vw;
}
.security-items-3 {
  width: 14.86vw;
  height: 11.39vw;
}
.security-items-4 {
  width: 15.97vw;
  height: 7.5vw;
}
.security-items-5 {
  width: 11.25vw;
  height: 11.25vw;
}

.pict-box {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 15.4vw;
}

.copy-right {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3.04vw;
  letter-spacing: 0vw;
  background-color: #4a098d;
  height: 6.53vw;
  position: relative;
}

.mid-box {
  display: flex;
  align-items: center;
  justify-content: center;
}

.quick-title {
  font-size: 5.56vw;
  font-weight: bold;
  line-height: 7.21vw;
  letter-spacing: 0vw;
  color: #ffffff;
}

.three-title-box {
  width: 100%;
  font-size: 3.47vw;
  line-height: 5.84vw;
  letter-spacing: 0vw;
  color: #fff;
  flex-direction: column;
  align-items: flex-start;
}

.link-style {
  color: #fff;
  font-size: 3.06vw;
  line-height: 5.7vw;
  .mid-box;
}

.link-style:hover {
  cursor: pointer;
  color: #FFFF00;
}

.security-box {
  width: 45.94vw;
  .mid-box;
  box-sizing: border-box;
  flex-wrap: wrap;
  margin-top: 1.36vw;
}

.footer-title-quick {
  font-size: 3vw;
  font-weight: bold;
  line-height: 3.89vw;
  color: #ffffff;
  text-align: left;
}

.footer-info {
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  justify-content: flex-start;
}

.m-footer-container {
  display: flex;
  width: 96.53vw;
  height: 28.19vw;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.footer-logo {
  width: 18.75vw;
  height: 8.47vw;
  position: relative;
  left: 10vw;
}

.two-title {
  flex-direction: column;
  align-items: flex-start;
}

.footer-last-bg {
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  border-bottom: solid 0.1vw #666;
}

.footer-head-title {
  font-size: 3.59vw;
  color: #ffffff;
  font-weight: bold;
}

.white-hr-line {
  width: 100%;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
}

.logo-box {
  .mid-box;
  width: 100%;
  margin-top: 2.36vw;
  margin-bottom: 2.4vw;
}

.logo-pict {
  width: 34.72vw;
  height: 12.22vw;
  margin-top: 1.67vw;
  margin-bottom: 1.11vw;
}

.link-why-box {
  .flex-between;
  width: 88vw;
  align-items: flex-start;
  margin-top: 6.11vw;
}

.why-box {
  .flex-change-start;
}

.footer-title-why {
  font-size: 3vw;
  font-weight: bold;
  line-height: 3.89vw;
  color: #7eaefd;
  text-align: left;
}

.why-content {
  width: 48.19vw;
  font-size: 2.5vw;
  line-height: 4.17vw;
  color: #ffffff;
}

.footer-quick {
  .flex-change-start;
}

.last-banner {
  .mid-box;
  width: 100%;
  height: 31.94vw;
  background-size: cover;
  box-sizing: border-box;
  position: fixed;
  z-index: 301;
  bottom: 0;
  background-image: url("https://dapv7y4era0s5.cloudfront.net/candycrush/bottom_bg.png");
  background-size: cover;
}

.download-pict {
  width: 54.17vw;
  height: auto;
  position: relative;
  left: 20vw;
  top: 0vw;
}
.arrow-pict {
  width: 17.22vw;
	height: 12.78vw;
  position: relative;
  top: -8.5vw;
  left: 10vw;
  animation: flash 1s ease-in-out 0s infinite;
}
@keyframes flash {
  0%,
  50% {
    opacity: 0;
  }
  51%,
  100% {
    opacity: 1;
  }
}
.gp-pict {
  width: 35.42vw;
  height: 10vw;
  margin-left: 2vw;
}

.footer-link-box {
  .mid-box;
  justify-content: space-between;
  width: 63.06vw;
}
.link-box {
  .flex-change-box;
  align-items: flex-start;
  margin-top: 3vw;
}
.footer-right {
  .flex-change-box;
  justify-content: flex-start;
  margin-left: -8vw;
  margin-top: 2.5vw;
}
.margin-1 {
  position: relative;
  right: 3vw;
}
.margin-2 {
  position: relative;
  right: 3vw;
}
.link-box-bg {
  width: 38.42vw;
	height: 36.81vw;
	background-color: #8639d5;
	border-radius: 1.39vw;
  .flex-change-box;
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 3vw 2vw;
  margin-top: 3.36vw;
  margin-bottom: 3.36vw;
}
.security-box-bg {
  .flex-change-box;
  justify-content: flex-start;
  box-sizing: border-box;
  padding-top: 5.25vw;
}
.link-total-box{
  .mid-box;
  justify-content: space-between;
  width: 95vw;
}
</style>
