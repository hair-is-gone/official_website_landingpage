<template>
  <div class="main">
    <div class="flex-start-box head-box">
      <div class="play-pict" @click.stop="head_click()">
        <img src="https://dapv7y4era0s5.cloudfront.net/teenrock/GooglePlay.png" alt="" class="pict">
      </div>
      <div class="search-pict">
        <img src="https://dapv7y4era0s5.cloudfront.net/teenrock/ic_search.png" alt="" class="pict">
      </div>
      <div class="question-pict">
        <img src="https://dapv7y4era0s5.cloudfront.net/teenrock/ic_question.png" alt="" class="pict">
      </div>
    </div>
    <div class="flex-start-box icon-box">
      <div class="icon-app">
        <img src="https://dapv7y4era0s5.cloudfront.net/teenrock/icon_TeenpattiRock.png" alt="" class="pict">
      </div>
      <div class="app-info">
        <span class="app-name">Teenpatti Rock</span>
        <span class="app-team">Rock Team</span>
      </div>
    </div>
    <div class="flex-start-box app-data">
      <div class="app-review">
        <div class="star-box">
          <span class="mark-num">4.9</span>
          <img src="https://dapv7y4era0s5.cloudfront.net/teenrock/ic_star.png" alt="" class="star-single">
        </div>
        <span class="mark-data-grey">4792 reviews</span>
      </div>
      <div class="app-download">
        <span class="download-data">100K+</span>
        <span class="mark-data-grey">Downloads</span>
      </div>
    </div>
    <div class="install-btn" @click.stop="download_apk()">
      Install
    </div>

    <div class="flex-start-box app-show-box">
      <div class="show-pict-box">
        <img src="https://dapv7y4era0s5.cloudfront.net/teenrock/GP1.png" alt="" class="show-pict">
        <img src="https://dapv7y4era0s5.cloudfront.net/teenrock/GP2.png" alt="" class="show-pict">
        <img src="https://dapv7y4era0s5.cloudfront.net/teenrock/GP3.png" alt="" class="show-pict">
      </div>
    </div>

    <div class="flex-start-box about-game-box">
      <span class="about-title">About this game</span>
      <span class="about-content">
        Enter the world of high-stakes card games with Teenpatti
        Rock! Experience the timeless thrill of this classic Indian
        poker game, elevated to a whole new level of excitement.
        With its stunning graphics and immersive gameplay,
        Teenpatti Rock offers an unforgettable journey through
        the world of cards and chance.
        <br>
        <br>
        Features in Teenpatti Rock:<br>
        1. Play with finesse as you challenge your wits and luck.<br>
        2. Test your skills in games of skill and strategy.<br>
        3. Immerse yourself in the glitz and glamour of a
        virtual casino.<br>
        4. Compete against your opponents and collect lots of coins.<br>
        5. Complete goals and get rewarded.<br>
      </span>
      <span class="collapse-span">Collapse</span>
    </div>

    <div class="flex-start-box rating-box">
      <span class="rating-title">Ratings and reviews</span>
      <div class="rate-card-box">
        <div class="rate-left">
          <span class="rate-num">4.50</span>
          <img src="https://dapv7y4era0s5.cloudfront.net/teenrock/ic_star_five.png" alt="" class="five-star-pict five-margin-rate">
          <span class="rate-count">12,478</span>
        </div>
        <div class="rate-right">
          <img src="https://dapv7y4era0s5.cloudfront.net/teenrock/ic_level.png" alt="" class="pict">
        </div>
      </div>
    </div>

    <div class="user-box">
      <div class="user-card" v-for="user in userInfoS" :key="user.name">
        <div class="flex-start-box">
          <img src="https://dapv7y4era0s5.cloudfront.net/teenrock/ic_people.png" alt="" class="avatar">
          <span class="user-name">{{ user.name }}</span>
        </div>
        <div class="flex-start-box user-mark-box">
          <img src="https://dapv7y4era0s5.cloudfront.net/teenrock/ic_star_five.png" alt="" class="five-star-pict">
          <span class="user-date">{{ user.date }}</span>
        </div>
        <span class="flex-start-box user-content">
          {{ user.content }}
        </span>
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
          name: "Rishu Sabanis",
          date: "2023/10/25",
          content:
            "It is a amazing game but I wish they could add another option for login like you can also login from Google, email and etc people who don't have Facebook what will they do otherwise this game is amazing!!",
        },
        {
          name: "Daas Dayal",
          date: "2023/10/25",
          content:
            "It was nice app to pass your free time but at the same time it can be adjective. Suggest enjoy the game don't get addicted to it. Else game is designed well, keep you entertained. I think it's quite fair than its similar games or counterparts.",
        },
        {
          name: "Yogarasa Sanyal",
          date: "2023/10/25",
          content:
            "Excellent, however there should be more efficient system to avoid cheater. I always found cheater sitting on 320 table and in spite of many reports they are freely playing.",
        },
      ],
    };
  },
  methods:{
    download_apk: function (event) {
      chnup("click");
      download();
    },
    head_click: function(){
      chnup("headClick1");
    }
  }
};
</script>

<style lang="less" scoped>
.main {
  background: #ffffff;
  height: auto;
  box-sizing: border-box;
  padding: 2.8vw 6.8vw;
  padding-right: 0vw;
  font-family: "rb"
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
  margin-top: 8.4vw;
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
  color: #17ac3c;
}
.app-data {
  margin-top: 9.47vw;
}
.app-review {
  .flex-change-start;
  justify-content: flex-start;
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
  color: #17ac3c;
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
}
.app-download {
  .flex-change-start;
  margin-left: 24.8vw;
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
  background-color: #17ac3c;
  border-radius: 5.33vw;
  margin-top: 9.2vw;
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
  width: 80.33vw;
  height: auto;
  margin-left: 2.53vw;
}
.show-pict:nth-child(1) {
  margin-left: 0vw;
}
.show-pict:nth-child(3) {
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
  padding-left: 10.27vw;
  .mid-box;
  justify-content: flex-start;
  margin-top: 8.13vw;
}
.rate-left {
  .flex-change-box;
  justify-content: flex-start;
  height: 24vw;
}
.rate-right {
  width: 37.6vw;
  height: 24vw;
  margin-left: 10.27vw;
}
.rate-num {
  font-size: 12.8vw;
  color: #333333;
  line-height: 1;
  font-family: "dm"
}
.five-star-pict {
  width: 13.2vw;
  height: 2vw;
}
.five-margin-rate{
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
.user-card{
  .flex-change-start;
  margin-bottom: 8.13vw;
}
.user-card:nth-child(3){
  margin-bottom: 11.47vw;
}
.avatar{
  width: 8.93vw;
	height: 9.07vw;
}
.user-name{
  font-size: 3.73vw;
	color: #262323;
  margin-left: 4.67vw;
}
.user-mark-box{
  margin-top: 1.07vw;
}
.user-date{
  font-size: 3.73vw;
  color: #676769;
  margin-left: 2.67vw;
}
.user-content{
  margin-top: 3.87vw;
  font-size: 3.73vw;
  color: #676769;
  width: 78.53vw; 
}
</style>