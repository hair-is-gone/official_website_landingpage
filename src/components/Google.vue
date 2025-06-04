<template>
  <div class="main">
    <div class="bg-img-all">
      <div class="download-button-sty" @click="download_apk"></div>
      <!-- <div class="finger"></div> -->
    </div>
    <div class="tele-banner" style="display: flex; align-items: center">
      <div class="tele-image-container-top">
        <div class="tele-image-container"></div>
      </div>
      <div class="text-container">
        <div class="tele-context-text">
          Join Telegram to Get More Bonus Info
        </div>
      </div>
      <div class="text-button-container" @click.stop="tgOpenBottom"></div>
    </div>

    <div class="tg_box">
      <div
        class="tg_icon tg_box-Container_img"
        @click.stop="tgOpenTop('tgch_click_view_top')"
      ></div>
      <div class="tg_icon facebook_img" @click.stop="goFaceBook"></div>
      <div class="tg_icon whatsapp_img" @click.stop="goWhatsapp"></div>
    </div>

    <div class="tg_reward_box" @click.stop="closeTgRewardBox" id="tgReward">
      <div
        class="tg_reward_container"
        @click.stop="tgOpenTop('tgch_click_view_laybackscene')"
      >
        <div class="tg_reward_top">
          <img
            src="../../static/mobileb/ic_reward.png"
            alt=""
            class="reward_logo"
          />
          <div>We sincerely look forward to your subscribe.</div>
        </div>
        <div class="bg_happy">
          <img src="../../static/mobileb/ICON.png" alt="" class="happy_icon" />
          <div class="happy_datas">
            <div class="title">Happy Ace Casino</div>
            <ul>
              <li>Official Channel for Happy Ace Casino</li>
              <li>Get Freecash Gift Code</li>
              <li>Trusted by 6cr+ players.</li>
            </ul>
          </div>
        </div>
        <div class="join_box">
          <img src="../../static/mobileb/ic_join.png" alt="" class="ic_join" />
          <div>
            Join our official telegram channel for the latest Gift Code
            giveaways, updates, and exclusive promotions.
          </div>
        </div>
        <div class="join_btn">
          <img
            src="../../static/mobileb/btn_join.png"
            alt=""
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { download, chnup, loadPage } from "../utils/tools";

export default {
  data() {
    return {};
  },
  methods: {
    download_apk: function (event) {
      chnup("click");
      download();
      this.showTgReward();
    },
    tgOpenTop(track) {
      chnup(track);
      window.open("https://t.me/+-O7J81YvCptjZTg9");
    },
    goFaceBook() {
      chnup("fbch_click_view");
      window.open("https://www.facebook.com/happyacerummypage");
    },
    goWhatsapp() {
      chnup("wach_click_view");
      window.open("https://whatsapp.com/channel/0029VaiGFuAG3R3ZhMZOQ001");
    },
    tgOpenBottom() {
      chnup("tgch_click_view_bottom");
      window.open("https://t.me/+-O7J81YvCptjZTg9");
    },
    clickTrack: function (msg) {
      if (msg == "stepPict1" || msg == "bannerClick1") {
        chnup(msg);
        return;
      }
    },
    showTgReward() {
      setTimeout(() => {
        var element = document.getElementById("tgReward");
        element.classList.remove("tg_reward_box_hidden");
        element.classList.add("tg_reward_box_show");
      }, 6000);
    },
    closeTgRewardBox() {
      var element = document.getElementById("tgReward");
      element.classList.remove("tg_reward_box_show");
      element.classList.add("tg_reward_box_hidden");
    },
  },
  created() {
    loadPage();
  },
};
</script>

<style lang="less" scoped>
.main {
  background: #fff;
  height: 100vh;
  width: 100vw;
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

.bg-img-all {
  display: flex;
  width: 100vw;
  height: 177.78vw;
  background-image: url("../../static/mobileb/bg.png");
  background-size: cover;
}

.download-button-sty {
  display: flex;
  margin-left: 12.36vw;
  margin-top: 116.11vw;
  width: 78.33vw;
  height: 21.39vw;
  background-image: url("../../static/mobileb/download.png");
  background-size: cover;
  animation-name: scaleDraw;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-duration: 1s;
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

.finger {
  position: absolute;
  top: 89.64vw;
  left: 0.05vw;
  width: 18.95vw;
  height: 21.56vw;
  z-index: 11;
  animation-name: fingerScaleDraw;
  animation-iteration-count: infinite;
  animation-duration: 1s;
  background-image: url("../../static/mobileb/ic_01.png");
  background-size: cover;
}
@keyframes fingerScaleDraw {
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(20px, 10px);
  }
  100% {
    transform: translate(0, 0);
  }
}

.tele-banner {
  background-color: #fff;
  width: 100vw;
  height: 8.88vw;
  background-image: url("../../static/mobileb/bg_tele.png");
  background-size: cover;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}
.tele-image-container-top {
  display: flex;
  width: 8.88vw;
  height: 8.88vw;
  margin-left: 1.5vw;
  align-items: center;
  justify-content: center; /* 中心对齐 */
}
.tele-image-container {
  display: flex;
  width: 5.9vw;
  height: 5.9vw;
  background-image: url("../../static/mobileb/ic_tele.png");
  background-size: cover;
}

.tele-context-text {
  display: flex;
  width: 60.28vw;
  height: 8.88vw;
  font-family: Arial-BoldMT;
  font-size: 2.8vw;
  font-weight: normal;
  font-stretch: normal;
  line-height: 8.88vw;
  letter-spacing: 0vw;
  margin-left: 1.5vw;
  color: #ffffff;
}

.text-button-container {
  display: flex;
  width: 24.31vw;
  height: 5.56vw;
  margin-left: 0vw;
  background-image: url("../../static/mobileb/btn_tele.png");
  background-size: cover;
}

.tg_box {
  width: 11.94vw;
  height: 36.81vw;
  background-image: url("../../static/mobileb/ic_telegram_bg.png");
  background-size: cover;
  position: fixed;
  top: 54.69vw;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1.3vw;
}

.tg_icon {
  width: 10.83vw;
  height: 10.83vw;
}
.tg_box-Container_img {
  background-image: url("../../static/mobileb/ic_telegram.png");
  background-size: cover;
}
.facebook_img {
  background-image: url("../../static/mobileb/ic_facebook.png");
  background-size: cover;
}
.whatsapp_img {
  background-image: url("../../static/mobileb/ic_whatsapp.png");
  background-size: cover;
}
</style>
