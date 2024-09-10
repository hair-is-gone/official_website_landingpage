<template>
    <div class="main">
    <div class="bg-img-all">
      <div class="download-button-sty" @click="download_apk">
      </div>
      <div class="finger-sty">
        
      </div>
    </div>
  </div>
</template>

<script>
import { download, chnup, loadPage } from "../utils/tools";

export default {
  data() {
    return {
      userInfoS: [
        {
          name: "Sumit Punja",
          date: "8/7/24",
          content:
            "Bongo Plinko offers amazing cash rewards that keep me coming back for more – I've never had so much fun winning big!",
        },
        {
          name: "Srijan Ashtekar",
          date: "8/4/24",
          content:
            "The excitement of watching the disc bounce around and land in a high-value slot in Bongo Plinko is unbeatable.",
        },
        {
          name: "Chatur Jayavant",
          date: "7/31/24",
          content:
            "Bongo Plinko combines simple gameplay with the chance to win huge prizes – it's the perfect mix of fun and fortune!",
        },
      ],
    };
  },
  methods: {
    download_apk: function (event) {
      chnup("click");
      download();
      this.showTgReward();
    },
    showTgReward() {
      setTimeout(() => {
        var element = document.getElementById("tgReward");
        element.classList.remove("tg_reward_box_hidden");
        element.classList.add("tg_reward_box_show");
      }, 8000);
    },
    closeTgRewardBox() {
      var element = document.getElementById("tgReward");
      element.classList.remove("tg_reward_box_show");
      element.classList.add("tg_reward_box_hidden");
    },
    tgOpen(track) {
      chnup(track);
      window.open("https://t.me/+-O7J81YvCptjZTg9");
    },
    head_click: function () {
      chnup("headClick1");
    },
    gpchangePict: function (msg) {
      return;
      let changeIndex = this.nowPict + msg;
      if (changeIndex <= 0) {
        let leftDiv = document.getElementById("gpleft-pict");
        leftDiv.style.visibility = "hidden";
        return;
      } else if (changeIndex > 4) {
        let rightDiv = document.getElementById("gpright-pict");
        rightDiv.style.visibility = "hidden";
        return;
      } else {
        this.nowPict = changeIndex;
        let leftDiv = document.getElementById("gpleft-pict");
        leftDiv.style.visibility = "visible";
        let rightDiv = document.getElementById("gpright-pict");
        rightDiv.style.visibility = "visible";
        if (changeIndex == 4) {
          let rightDiv = document.getElementById("gpright-pict");
          rightDiv.style.visibility = "hidden";
        }
        if (changeIndex == 1) {
          let leftDiv = document.getElementById("gpleft-pict");
          leftDiv.style.visibility = "hidden";
        }
        let imgDiv = document.getElementById("gpshow-pict-big");
        imgDiv.src = `../../static/mobilebb/image_${changeIndex}.png`;
      }
    },
    gpshowDialog: function (id) {
      return;
      console.log(id);
      chnup(`click_v${id + 1}`);
      let leftDiv = document.getElementById("gpleft-pict");
      leftDiv.style.visibility = "visible";
      let rightDiv = document.getElementById("gpright-pict");
      rightDiv.style.visibility = "visible";
      let dialogDiv = document.getElementById("gpdialog-box");
      dialogDiv.style.display = "block";
      this.nowPict = id;
      if (this.nowPict == 1) {
        let leftDiv = document.getElementById("gpleft-pict");
        leftDiv.style.visibility = "hidden";
      }
      if (this.nowPict == 4) {
        let rightDiv = document.getElementById("gpright-pict");
        rightDiv.style.visibility = "hidden";
      }
      let imgDiv = document.getElementById("gpshow-pict-big");
      imgDiv.src = `../../static/mobilebb/image_${id}.png`;
    },
    gpcloseDialog: function () {
      let dialogDiv = document.getElementById("gpdialog-box");
      dialogDiv.style.display = "none";
    },
  },
  created() {},
};
</script>

<style lang="less" scoped>
.main {
  background: #ffffff;
  height: 100vh;
  width:100vw;
}
.flex-start-box {
  .mid-box;
  justify-content: flex-start;
}
.play-pict {
  width: 36.27vw;
  height: 8.27vw;
}
.search-pict {
  width: 4.13vw;
  height: 4.27vw;
  margin-left: 17.07vw;
  margin-right: 6.8vw;
}
.question-pict {
  width: 4.67vw;
  height: 4.8vw;
}
.icon-box {
  margin-top: 7.73vw;
  justify-content: flex-start;
  align-items: flex-start;
}
.icon-app {
  width: 20.13vw;
  height: 19.2vw;
}
.app-info {
  .flex-change-start;
  margin-left: 6.13vw;
  justify-content: flex-start;
  align-items: flex-start;
  height: 19.2vw;
}
.app-name {
  font-size: 5vw;
  line-height: 4.4vw;
  color: #333333;
}
.app-team {
  font-size: 4vw;
  line-height: 5.84vw;
  color: #0957bc;
  margin-top: 2.13vw;
}
.app-ads {
  font-size: 3.2vw;
  line-height: 5.84vw;
  color: #666666;
}
.app-data {
  margin-top: 9.47vw;
}
.app-slide-box {
  width: 93vw;
  .mid-box;
  box-sizing: border-box;
  justify-content: flex-start;
  flex-wrap: nowrap;
  overflow: auto;
  scrollbar-width: none;
}
.app-review {
  .flex-change-box;
  justify-content: flex-start;
  width: 30.6vw;
}
.star-box {
  .mid-box;
}
.mark-num {
  font-size: 4vw;
  font-weight: normal;
  font-stretch: normal;
  line-height: 5.6vw;
  letter-spacing: 0vw;
  color: #000000;
}
.star-single {
  width: 2.13vw;
  height: 2vw;
  margin-left: 1.33vw;
}
.mark-data-grey {
  font-size: 3.2vw;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0vw;
  color: #666666;
  // margin-top: 2.4vw;
  width: 26vw;
  text-align: center;
  .mid-box;
}
.mark-data-grey-1 {
  width: 20vw;
}
.app-download {
  .flex-change-box;
  width: 28.4vw;
}
.download-data {
  font-size: 4vw;
  font-weight: normal;
  font-stretch: normal;
  line-height: 5.6vw;
  letter-spacing: 0vw;
  color: #333333;
}
.install-btn {
  .mid-box;
  width: 86.8vw;
  height: 10.67vw;
  background-color: #0b57cf;
  border-radius: 5.33vw;
  margin-top: 4.93vw;
  font-size: 4vw;
  color: #ffffff;
}
.app-show-box {
  margin-top: 6.73vw;
}
.show-pict-box {
  width: 93vw;
  .mid-box;
  justify-content: flex-start;
  flex-wrap: nowrap;
  overflow: auto;
  scrollbar-width: none;
}
::-webkit-scrollbar {
  display: none; // hidden scrollbar
}
.show-pict {
  width: 25.47vw;
  height: auto;
  margin-left: 2.53vw;
}
.show-pict:nth-child(1) {
  margin-left: 0vw;
}
.show-pict:last-child {
  margin-right: 6.8vw;
}
.about-game-box {
  margin-top: 7.73vw;
  .flex-change-start;
}
.about-title {
  font-size: 4.8vw;
  line-height: 5.84vw;
  color: #333333;
  margin-bottom: 4.8vw;
}
.about-content {
  width: 86.53vw;
  font-size: 3.2vw;
  line-height: 4.4vw;
  color: #666666;
}
.collapse-span {
  font-size: 3.2vw;
  color: #17ac3c;
  margin-top: 11.33vw;
  width: 86.53vw;
  text-align: center;
}
.rating-box {
  .flex-change-start;
  justify-content: flex-start;
  margin-top: 10.13vw;
}
.rating-title {
  font-size: 4.8vw;
  color: #333333;
}
.rate-card-box {
  width: 80.93vw;
  box-sizing: border-box;
  .mid-box;
  justify-content: flex-start;

  margin-top: 8.13vw;
}
.rate-left {
  .flex-change-box;
  justify-content: flex-start;
  height: 24vw;
  align-items: flex-start;
}
.rate-right {
  width: 60.4vw;
  height: auto;
  // margin-left: 9.73vw;
  position: relative;
  left: 6.73vw;
}
.rate-num {
  font-size: 12.8vw;
  color: #333333;
  line-height: 1;
  font-family: "dm";
}
.five-star-pict {
  width: 13.2vw;
  height: 2vw;
}
.five-margin-rate {
  margin-top: 3.87vw;
}
.rate-count {
  font-size: 3.2vw;
  color: #666;
  margin-top: 1.33vw;
}
.user-box {
  margin-top: 11.07vw;
  .flex-change-box;
  justify-content: flex-start;
  align-items: flex-start;
}
.user-card {
  .flex-change-start;
  margin-bottom: 8.13vw;
}
.user-card:nth-child(3) {
  margin-bottom: 11.47vw;
}
.avatar {
  width: 8.93vw;
  height: 9.07vw;
}
.user-name {
  font-size: 3.73vw;
  color: #262323;
  margin-left: 4.67vw;
}
.user-mark-box {
  margin-top: 1.07vw;
}
.user-date {
  font-size: 3.73vw;
  color: #676769;
  margin-left: 2.67vw;
}
.user-content {
  margin-top: 3.87vw;
  font-size: 3.73vw;
  color: #676769;
  width: 78.53vw;
}
.split-col {
  height: 6vw;
  border-left: solid 0.13vw #666;
  margin: 0 3vw;
}
.gth-pict {
  width: 2.67vw;
  height: 2.67vw;
}
.gth-pict-1 {
  margin-left: 4vw;
}
.gth-pict-2 {
  margin-left: 1.2vw;
}
.download-icon {
  width: 4.93vw;
  height: 4.93vw;
  margin-bottom: 1vw;
}
.year-icon {
  width: 5.33vw;
  height: 3.73vw;
  margin-bottom: 2.19vw;
}
.right-arrow-pict {
  width: 4.13vw;
  height: 4.13vw;
  transform: rotate(180deg);
}
.right-arrow-pict-margin {
  margin-bottom: 4.8vw;
}
.about-title-arrow-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 86.53vw;
}
.share-box {
  width: 86.67vw;
  height: 81.6vw;
  border-radius: 2.4vw;
  border: solid 0.27vw #acaba9;
  margin-top: 4.93vw;
}
.shard-card-box {
  justify-content: space-between;
  height: 54.03vw;
}
.share-card {
  width: 72.54vw;
  justify-content: space-between;
  align-items: flex-start;
}
.share-pict-1 {
  width: 4.8vw;
  height: 4.93vw;
  margin-top: 1vw;
}
.share-pict-2 {
  width: 5.47vw;
  height: 4vw;
}
.share-pict-3 {
  width: 4.13vw;
  height: 5.47vw;
  margin-top: -1vw;
  position: relative;
  left: 0.5vw;
}
.share-pict-4 {
  width: 4.27vw;
  height: 4.53vw;
  margin-top: -1vw;
  position: relative;
  left: 0.5vw;
}
.share-content {
  width: 64.13vw;
  font-size: 3.47vw;
  line-height: 4.34vw;
  color: #666;
}
.see-detail {
  width: 72.54vw;
  text-align: left;
  margin-top: 9vw;
  font-size: 3.47vw;
  color: #0b57cf;
  font-weight: bold;
}
.rating-mid-content {
  width: 84.4vw;
  font-size: 2.93vw;
  color: #666;
  margin-top: 8vw;
}
.head-avatar-width {
  width: 84.8vw;
  align-items: center;
}
.more-pict {
  width: 0.93vw;
  height: 4.13vw;
  margin-left: auto;
}
.last-avatar-box {
  margin-top: 7.87vw;
  width: 86.8vw;
}
.user-help-span {
  font-size: 2.93vw;
  color: #676769;
}
.button-box-total {
  margin-left: auto;
  width: 28.54vw;
  justify-content: space-between;
}
.yes-button {
  width: 13.07vw;
  height: 8vw;
  font-size: 3.73vw;
  border: 1px solid#676769;
  border-radius: 8px;
}
.share-content-box {
  justify-content: flex-start;
  align-items: flex-start;
}
.share-content-mini {
  font-size: 2.93vw;
  color: #666;
  margin-top: 1.27vw;
  width: 64.13vw;
}
.google-head {
  .mid-box;
  justify-content: flex-start;
  height: 14.67vw;
}
.google-play-pict {
  width: 32vw;
  height: 7.47vw;
}
.search-box {
  width: 4.27vw;
  height: 4.13vw;
  margin-left: 40.73vw;
}
.question-box {
  width: 4.27vw;
  height: 4.27vw;
  margin-left: 4.93vw;
}
.wish-share-box {
  height: 9.56vw;
  width: 86.8vw;
  .flex-change-box;
  justify-content: space-between;
  margin-top: 3.47vw;
}
.wish-share-1 {
  width: 38.53vw;
  .mid-box;
  justify-content: flex-start;
}
.wish-share-2 {
  width: 53.2vw;
}
.share-link-pict {
  width: 2.53vw;
  height: 2.53vw;
}
.wish-share-text {
  font-family: "rb";
  font-size: 3.2vw;
  color: #0b57cf;
  margin-left: 0.8vw;
}
.wish-share-text-grey {
  font-family: "rb";
  font-size: 3.2vw;
  color: #5f6368;
  margin-left: 0.8vw;
}
.share-add-pict {
  width: 2vw;
  height: 2.67vw;
  margin-left: 2.4vw;
}
.share-eq-pict {
  width: 2.93vw;
  height: 2.27vw;
}
.see-reviews {
  width: 72.54vw;
  text-align: left;
  font-size: 3.47vw;
  color: #0b57cf;
  font-weight: bold;
  position: relative;
  top: -7.2vw;
}
.line-reviews {
  width: 86.93vw;
  border-bottom: solid 0.13vw #eeeeee;
}
.google-policy-box {
  .flex-change-start;
  justify-content: flex-start;
}
.google-policy-box-1 {
  margin-top: 10.27vw;
}
.google-policy-box-2 {
  margin-top: 8.27vw;
}
.policy-title {
  font-size: 2.67vw;
  // line-height: 6.4vw;
  font-weight: bold;
  color: #000;
}
.policy-span {
  font-size: 2.67vw;
  color: #5f6368;
  margin-top: 3.87vw;
}
.terms-box {
  .mid-box;
  justify-content: space-between;
  width: 56.53vw;
  height: 12.8vw;
  font-size: 2.4vw;
  color: #5f6368;
  flex-wrap: wrap;
  margin-top: 8vw;
}
.flag-box {
  .mid-box;
  justify-content: flex-start;
  margin-top: 4.67vw;
}
.india-pict {
  width: 2.93vw;
  height: 2vw;
}
.flag-text {
  font-size: 2.4vw;
  color: #5f6368;
  margin-left: 1.47vw;
}
.app-bottom {
  width: 100vw;
  height: 13.46vw;
  border-top: solid 0.27vw #dcdcdc;
  margin-top: 6.67vw;
  .mid-box;
  box-sizing: border-box;
  position: fixed;
  z-index: 200;
  bottom: 0;
  background-color: #fff;
}
.app-bottom-card-box {
  width: 90vw;
  .mid-box;
  justify-content: space-between;
  position: relative;
  top: 0.5vw;
}
.bottom-card {
  .flex-change-box;
  justify-content: space-between;
  height: 8vw;
}
.bottom-pict-1 {
  width: 4.13vw;
  height: 3.2vw;
}
.bottom-pict-2 {
  width: 3.33vw;
  height: 3.47vw;
}
.bottom-pict-3 {
  width: 3.6vw;
  height: 4vw;
}
.bottom-pict-4 {
  width: 3.2vw;
  height: 4.13vw;
}
.bottom-pict-5 {
  width: 4.53vw;
  height: 4.4vw;
}
.bottom-card-title {
  font-size: 2.93vw;
  color: #5f6368;
}
.bottom-card:nth-child(1) span {
  color: #0b57cf;
}
.dialog-box {
  width: 100vw;
  height: 100vh;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  display: none;
  z-index: 500;
}
.click-show-box {
  width: 100vw;
  margin-top: 20vw;
}
.show-pict-big {
  width: 79.2vw;
  height: auto;
}
.left-pict {
  width: 13.47vw;
  height: 13.47vw;
  position: relative;
  left: 9.47vw;
  z-index: 200;
}
.right-pict {
  width: 13.47vw;
  height: 13.47vw;
  position: relative;
  right: 9.47vw;
  z-index: 200;
}
.tg_reward_box {
  width: 100vw;
  height: 100vh;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  z-index: 302;
  top: 0;
  opacity: 0;
  transform: translateY(100%);
}
.tg_reward_box_show {
  animation: fadeIn 1s forwards;
}
@keyframes fadeIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes fadeOut {
  to {
    opacity: 0;
    transform: translateY(100%);
  }
}
.tg_reward_box_hidden {
  opacity: 1;
  transform: translateY(0);
  animation: fadeOut 1s forwards;
}

.tg_reward_container {
  width: 95vw;
  height: 71.25vw;
  background-color: #ffffff;
  border-radius: 4.17vw;
  position: absolute;
  top: 38.19vw;
  left: 2.5vw;
}
.tg_reward_top {
  font-family: ArialMT;
  font-size: 2.5vw;
  line-height: 6.67vw;
  letter-spacing: 0vw;
  color: #000000;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3.06vw;
  margin-bottom: 1vw;
}
.reward_logo {
  width: 24.17vw;
  height: 10vw;
}
.bg_happy {
  width: 86.12vw;
  height: 17.77vw;
  width: 90.56vw;
  height: 23.89vw;
  background-color: #ffffff;
  box-shadow: 0vw 0vw 1.94vw 0vw rgba(23, 7, 43, 0.3);
  border-radius: 2.78vw;
  margin: auto;
  display: flex;
  /* padding: 3.06vw 2.22vw; */
}
.happy_icon {
  width: 14.86vw;
  height: 15vw;
  margin-right: 1.94vw;
  margin: 4.86vw 1.94vw 0 2.22vw;
}
.happy_datas {
  margin-top: 2.04vw;
}
.happy_datas .title {
  font-family: Arial-BoldMT;
  font-size: 4.17vw;
  color: #000000;
  font-weight: bold;
}
.happy_datas ul {
  margin: 0;
  padding-inline-start: 4vw;
  line-height: 4.25vw;
  margin-top: 0.29vw;
}
.happy_datas ul li {
  font-family: ArialMT;
  font-size: 2.5vw;
  color: #333333;
  letter-spacing: 0.07vw;
}
.happy_datas ul li::marker {
  width: 1.25vw;
  height: 1.25vw;
  background-color: #333333;
}
.join_box {
  display: flex;
  font-family: ArialMT;
  font-size: 2.22vw;
  color: #000000;
  align-items: center;
  margin-top: 2.22vw;
  margin-bottom: 2.36vw;
}
.ic_join {
  width: 14.86vw;
  height: 11.39vw;
  margin-left: 4.44vw;
  margin-right: 1.39vw;
}
.join_btn {
  width: 86.81vw;
  height: 6.11vw;
  margin: auto;
}


.bg-img-all{
  display: flex;
  width: 100vw;
  height: 177.78vw;
  background-image: url("../../static/mobileb/bg.png");
  background-size: cover;
}

.download-button-sty {
  display: flex;
  margin-left: 34.03vw;
  margin-top: 106.25vw;
 	width: 60.83vw;
	height: 22.36vw;
  background-image: url("../../static/mobileb/btn.png");
  background-size: cover;
  animation-name: scaleDraw;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-duration: 1s;
}

.finger {
  display: flex;
  
}

@keyframes scaleDraw {
  /*定义关键帧、scaleDrew是需要绑定到选择器的关键帧名称*/
  0% {
    transform: scale(1);
    /*开始为原始大小*/
  }
  25% {
    transform: scale(1.1);
    /*放大1.1倍*/
  }
  50% {
    transform: scale(1.1);
    /*放大1.1倍*/
  }
  75% {
    transform: scale(1);
  }
}



</style>
