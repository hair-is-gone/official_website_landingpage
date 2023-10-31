<template>
  <div class="main">
    <div class="flex-start-box icon-box">
      <div class="icon-app">
        <img src="https://dapv7y4era0s5.cloudfront.net/ludoclubcash/mobile/192.png" alt="" class="pict">
      </div>
      <div class="app-info">
        <span class="app-name">Ludo Club Cash</span>
        <span class="app-team">Cash Ludo Studio</span>
        <span class="app-ads">In-App Purchases</span>
      </div>
    </div>
    <div class="flex-start-box app-data">
      <div class="app-slide-box">
        <div class="app-review">
          <div class="star-box">
            <span class="mark-num">4.9</span>
            <img src="https://dapv7y4era0s5.cloudfront.net/ludoclubcash/mobile/ic_star.png" alt="" class="star-single">
          </div>
          <span class="mark-data-grey">5k reviews
            <img src="https://dapv7y4era0s5.cloudfront.net/ludoclubcash/mobile/ic_gth.png" alt="" class="gth-pict">
          </span>
        </div>
        <div class="split-col"></div>
        <div class="app-download">
          <img src="https://dapv7y4era0s5.cloudfront.net/ludoclubcash/mobile/ic_xz.png" alt="" class="download-icon">
          <span class="mark-data-grey">3 MB</span>
        </div>
        <div class="split-col"></div>
        <div class="app-download">
          <img src="https://dapv7y4era0s5.cloudfront.net/ludoclubcash/mobile/ic_16.png" alt="" class="year-icon">
          <span class="mark-data-grey">Rated for 16+
            <img src="https://dapv7y4era0s5.cloudfront.net/ludoclubcash/mobile/ic_gth.png" alt="" class="gth-pict">
          </span>
        </div>
        <div class="split-col"></div>
        <div class="app-download">
          <span class="download-data">100K+</span>
          <span class="mark-data-grey">Downloads</span>
        </div>
      </div>
    </div>
    <div class="install-btn" @click.stop="download_apk()">
      Install
    </div>

    <div class="flex-start-box app-show-box">
      <div class="show-pict-box">
        <img src="https://dapv7y4era0s5.cloudfront.net/ludoclubcash/mobile/Image_1.png" alt="" class="show-pict">
        <img src="https://dapv7y4era0s5.cloudfront.net/ludoclubcash/mobile/Image_2.png" alt="" class="show-pict">
        <img src="https://dapv7y4era0s5.cloudfront.net/ludoclubcash/mobile/Image_3.png" alt="" class="show-pict">
        <img src="https://dapv7y4era0s5.cloudfront.net/ludoclubcash/mobile/Image_4.png" alt="" class="show-pict">
      </div>
    </div>

    <div class="flex-start-box about-game-box">
      <div class="about-title-arrow-box">
        <span class="about-title">About this game</span>
        <img src="https://dapv7y4era0s5.cloudfront.net/ludoclubcash/mobile/ic_left.png" alt="" class="right-arrow-pict right-arrow-pict-margin">
      </div>
      <span class="about-content">
        Are you ready to embark on a thrilling journey into the world of Ludo Club Cash? Look no further than Ludo Club Cash, where traditional gameplay meets modern excitement! Ludo Club Cash takes this beloved classic
        board game and gives it a fresh and exciting twist, making it an irresistible choice for you. Ludo Club Cash promises endless hour of fun, laughter, and unforgettable moments. It is also an exciting way to test
        your skills, strategy, and even win cash rewards!!
        <br>
        <br>
        Key features: <br>
        1.	The winner takes home the cash, making every move on the board a potential moneymaker.<br>
        2.	After securing your victory, you can easily withdraw your winnings.<br>
        3.	Sharpen your skills and strategies against intelligent opponents.<br>
        4.	Ludo Club Cash combines elements of strategy and luck.<br>
        5.	Immerse yourself in the vibrant world of Ludo Club Cash with stunning visuals.<br>
      </span>
      <!-- <span class="collapse-span">Collapse</span> -->
    </div>

    <div class="flex-change-box share-box">
      <div class="flex-change-box shard-card-box">
        <div class="mid-box share-card" v-for="shareInfo in shareInfoS" :key="shareInfo.pictStyle">
          <img :src="shareInfo.pict" alt="" :class="shareInfo.pictStyle">
          <div class="flex-change-box share-content-box">
            <span class="share-content">
              {{ shareInfo.content }}
            </span>
            <span class="share-content-mini">{{ shareInfo.content2 }}</span>
          </div>
        </div>
      </div>
      <span class="see-detail">See details</span>
    </div>

    <div class="flex-start-box rating-box">
      <div class="about-title-arrow-box">
        <span class="rating-title">Ratings and reviews</span>
        <img src="https://dapv7y4era0s5.cloudfront.net/ludoclubcash/mobile/ic_left.png" alt="" class="right-arrow-pict">
      </div>
      <span class="rating-mid-content">
        Ratings and reviews are verified and are from people who use the same type of device that you use
      </span>
      <div class="rate-card-box">
        <div class="rate-left">
          <span class="rate-num">4.9</span>
          <img src="https://dapv7y4era0s5.cloudfront.net/ludoclubcash/mobile/ic_pinfen.png" alt="" class="five-star-pict five-margin-rate">
          <span class="rate-count">5,469</span>
        </div>
        <div class="rate-right">
          <img src="https://dapv7y4era0s5.cloudfront.net/ludoclubcash/mobile/ic_dengji.png" alt="" class="pict">
        </div>
      </div>
    </div>

    <div class="user-box">
      <div class="user-card" v-for="user in userInfoS" :key="user.name">
        <div class="flex-start-box head-avatar-width">
          <img src="https://dapv7y4era0s5.cloudfront.net/ludoclubcash/mobile/ic_people.png" alt="" class="avatar">
          <span class="user-name">{{ user.name }}</span>
          <img src="https://dapv7y4era0s5.cloudfront.net/ludoclubcash/mobile/ic_more.png" alt="" class="more-pict">
        </div>
        <div class="flex-start-box user-mark-box">
          <img src="https://dapv7y4era0s5.cloudfront.net/ludoclubcash/mobile/ic_pinfen.png" alt="" class="five-star-pict">
          <span class="user-date">{{ user.date }}</span>
        </div>
        <span class="flex-start-box user-content">
          {{ user.content }}
        </span>
        <div class="flex-start-box last-avatar-box">
          <span class="user-help-span">Was this review helpful?</span>
          <div class="mid-box button-box-total">
            <div class="mid-box yes-button">Yes</div>
            <div class="mid-box yes-button">No</div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { download, chnup } from "../utils/tools";

export default {
  data() {
    return {
      userInfoS: [
        {
          name: "Chand Nancy",
          date: "2023/10/27",
          content:
            "Ludo Club Cash is more addictive than we ever expected. The thousands of strategies make each game unique, and the competitive spirit keeps us coming back for more. It's a must-play for anyone who loves a good challenge.",
        },
        {
          name: "Megaduta Punja",
          date: "2023/10/24",
          content:
          "The various game modes in Ludo Club Cash keep the experience fresh and exciting. Whether we're in the mood for a classic four-player showdown or team-based action, this game has us covered. It's a versatile gem!"
        },
        {
          name: "Sulini Tavade",
          date: "2023/10/18",
          content:
          "What we love most about Ludo Club Cash is that it's easy to pick up, even for newcomers, thanks to its straightforward rules. Yet, the strategic depth is incredible, making it a game we can enjoy without any barriers. Highly recommended!"
        },
      ],
      shareInfoS: [
        {
          pict: "https://dapv7y4era0s5.cloudfront.net/ludoclubcash/mobile/ic_lianjie.png",
          pictStyle: "share-pict-1",
          content: "This app may share these data types with third parties",
          content2: "App activity and Device or other IDs",
        },
        {
          pict: "https://dapv7y4era0s5.cloudfront.net/ludoclubcash/mobile/ic_yun.png",
          pictStyle: "share-pict-2",
          content: "This app may collect these data types",
          content2:
            "App activity,App info and perfor mance.and Device or other IDs",
        },
        {
          pict: "https://dapv7y4era0s5.cloudfront.net/ludoclubcash/mobile/ic_lock.png",
          pictStyle: "share-pict-3",
          content: "Datais encrypted in transit",
        },
        {
          pict: "https://dapv7y4era0s5.cloudfront.net/ludoclubcash/mobile/ic_ljt.png",
          pictStyle: "share-pict-4",
          content: "You can request that data be deleted",
        },
      ],
    };
  },
  methods: {
    download_apk: function (event) {
      chnup("click");
      download();
    },
    head_click: function () {
      chnup("headClick1");
    },
  },
};
</script>

<style lang="less" scoped>
.main {
  background: #ffffff;
  height: auto;
  box-sizing: border-box;
  padding: 2.8vw 6.8vw;
  padding-right: 0vw;
  font-family: "rb";
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
  font-size: 6.4vw;
  line-height: 6.4vw;
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
  width: 24vw;
  text-align: center;
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
  margin-top: 6.93vw;
  font-size: 4vw;
  color: #ffffff;
}
.app-show-box {
  margin-top: 6.67vw;
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
  margin-top: 2.87vw;
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
</style>