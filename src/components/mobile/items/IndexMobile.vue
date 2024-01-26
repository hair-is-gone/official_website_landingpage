<template>
  <div>
    <div class="dialog-box" id="dialog-box" @click.stop="closeDialog()">
      <div class="mid-box click-show-box">
        <img src="https://dapv7y4era0s5.cloudfront.net/cashbreak/mobile/left.png" @click.stop="changePict(-1)" id="left-pict" alt="" class="left-pict">
        <img src="https://dapv7y4era0s5.cloudfront.net/cashbreak/mobile/image_1.png" alt="" class="show-pict-big" id="show-pict-big">
        <img src="https://dapv7y4era0s5.cloudfront.net/cashbreak/mobile/right.png" class="right-pict" @click.stop="changePict(1)" id="right-pict" alt="">
      </div>
    </div>
    <div class="main">
      <div class="google-head">
        <div class="google-play-pict">
          <img src="https://dapv7y4era0s5.cloudfront.net/cashbreak/mobile/googleplay.png" alt="" class="pict">
        </div>
        <div class="search-box">
          <img src="https://dapv7y4era0s5.cloudfront.net/cashbreak/mobile/ic_search.png" alt="" class="pict">
        </div>
        <div class="question-box">
          <img src="https://dapv7y4era0s5.cloudfront.net/cashbreak/mobile/ic_question.png" alt="" class="pict">
        </div>
      </div>
      <div class="flex-start-box icon-box">
        <div class="icon-app">
          <img src="https://dapv7y4era0s5.cloudfront.net/cashbreak/mobile/192.png" alt="" class="pict">
        </div>
        <div class="app-info">
          <span class="app-name">Callbreak Offline: Tash Game</span>
          <span class="app-team">Wonder Game</span>
          <span class="app-ads">In-App Purchases</span>
        </div>
      </div>
      <div class="flex-start-box app-data">
        <div class="app-slide-box">
          <div class="app-review">
            <div class="star-box">
              <span class="mark-num">4.9</span>
              <img src="https://dapv7y4era0s5.cloudfront.net/cashbreak/mobile/ic_star.png" alt="" class="star-single">
            </div>
            <span class="mark-data-grey">7k reviews
              <img src="https://dapv7y4era0s5.cloudfront.net/cashbreak/mobile/ic_gth.png" alt="" class="gth-pict gth-pict-1">
            </span>
          </div>
          <div class="split-col"></div>
          <div class="app-download">
            <img src="https://dapv7y4era0s5.cloudfront.net/cashbreak/mobile/ic_xz.png" alt="" class="download-icon">
            <span class="mark-data-grey mark-data-grey-1">3 MB</span>
          </div>
          <div class="split-col"></div>
          <div class="app-download">
            <img src="https://dapv7y4era0s5.cloudfront.net/cashbreak/mobile/ic_16.png" alt="" class="year-icon">
            <span class="mark-data-grey">Rated for 16+
              <img src="https://dapv7y4era0s5.cloudfront.net/cashbreak/mobile/ic_gth.png" alt="" class="gth-pict gth-pict-2">
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

      <div class="wish-share-box">
        <div class="wish-share-1">
          <img src="https://dapv7y4era0s5.cloudfront.net/cashbreak/mobile/ic_fx.png" alt="" class="share-link-pict">
          <span class="wish-share-text">Share</span>
          <img src="https://dapv7y4era0s5.cloudfront.net/cashbreak/mobile/ic_qd.png" alt="" class="share-add-pict">
          <span class="wish-share-text">Add to wishlist</span>
        </div>
        <div class="wish-share-1 wish-share-2">
          <img src="https://dapv7y4era0s5.cloudfront.net/cashbreak/mobile/ic_equipment.png" alt="" class="share-eq-pict">
          <span class="wish-share-text-grey">This app works on all your devices</span>
        </div>
      </div>

      <div class="flex-start-box app-show-box">
        <div class="show-pict-box">
          <img src="https://dapv7y4era0s5.cloudfront.net/cashbreak/mobile/img_1.png" alt="" class="show-pict" @click="showDialog(1)">
          <img src="https://dapv7y4era0s5.cloudfront.net/cashbreak/mobile/img_2.png" alt="" class="show-pict" @click="showDialog(2)">
          <img src="https://dapv7y4era0s5.cloudfront.net/cashbreak/mobile/img_3.png" alt="" class="show-pict" @click="showDialog(3)">
          <img src="https://dapv7y4era0s5.cloudfront.net/cashbreak/mobile/img_4.png" alt="" class="show-pict" @click="showDialog(4)">
        </div>
      </div>

      <div class="flex-start-box about-game-box">
        <div class="about-title-arrow-box">
          <span class="about-title">About this game</span>
          <img src="https://dapv7y4era0s5.cloudfront.net/cashbreak/mobile/ic_left.png" alt="" class="right-arrow-pict right-arrow-pict-margin">
        </div>
        <span class="about-content">
          Callbreak Offline, a thrilling rendition of the classic trick-taking game. Immerse yourself in the art of calculated moves, clever tactics, and intense competition, all in the comfort of your device. Callbreak Offline is a journey into the heart of strategic gameplay, where every card played could be a game-changer. 
          <br>
          <br>
          Features in Callbreak Offline: <br>
          1.	Classic trick-taking gameplay. <br>
          2.	The strategies are endless.   <br>
          3.	Engaging and accessible card game. <br>
          4.	Hours of strategic fun guaranteed.<br>
        </span>
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
          <img src="https://dapv7y4era0s5.cloudfront.net/cashbreak/mobile/ic_left.png" alt="" class="right-arrow-pict">
        </div>
        <span class="rating-mid-content">
          Ratings and reviews are verified and are from people who use the same type of device that you use
        </span>
        <div class="rate-card-box">
          <div class="rate-left">
            <span class="rate-num">4.9</span>
            <img src="https://dapv7y4era0s5.cloudfront.net/cashbreak/mobile/ic_pinfen.png" alt="" class="five-star-pict five-margin-rate">
            <span class="rate-count">7,796</span>
          </div>
          <div class="rate-right">
            <img src="https://dapv7y4era0s5.cloudfront.net/cashbreak/mobile/ic_dengji.png" alt="" class="pict">
          </div>
        </div>
      </div>

      <div class="user-box">
        <div class="user-card" v-for="user in userInfoS" :key="user.name">
          <div class="flex-start-box head-avatar-width">
            <img src="https://dapv7y4era0s5.cloudfront.net/cashbreak/mobile/ic_people.png" alt="" class="avatar">
            <span class="user-name">{{ user.name }}</span>
            <img src="https://dapv7y4era0s5.cloudfront.net/cashbreak/mobile/ic_more.png" alt="" class="more-pict">
          </div>
          <div class="flex-start-box user-mark-box">
            <img src="https://dapv7y4era0s5.cloudfront.net/cashbreak/mobile/ic_pinfen.png" alt="" class="five-star-pict">
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
        <span class="see-reviews">See all reviews</span>
        <div class="line-reviews"></div>
      </div>

      <div class="google-policy-box google-policy-box-1">
        <span class="policy-title">Google Play</span>
        <span class="policy-span">Play Pass</span>
        <span class="policy-span">Play Points</span>
        <span class="policy-span">Gift cards</span>
        <span class="policy-span">Redeem</span>
        <span class="policy-span">Refund policy</span>
      </div>
      <div class="google-policy-box google-policy-box-2">
        <span class="policy-title">Children and family</span>
        <span class="policy-span">Parent guide</span>
        <span class="policy-span">Family sharing</span>
      </div>

      <div class="terms-box">
        <span>Terms of service</span>
        <span>Privacy</span>
        <span>About Google Play</span>
        <span>Developers</span>
        <span>Google Store</span>
        <span>All prices include VAT.</span>
      </div>

      <div class="flag-box">
        <img src="https://dapv7y4era0s5.cloudfront.net/cashbreak/mobile/ic_lndia.png" alt="" class="india-pict">
        <span class="flag-text">India(Hindi)</span>
      </div>

    </div>
    <div class="app-bottom">
      <div class="app-bottom-card-box">
        <div class="bottom-card" v-for="bottomInfo in bottomInfoS" :key="bottomInfo.index">
          <img :src="bottomInfo.pict" alt="" :class="bottomInfo.pictStyle">
          <span class="bottom-card-title">{{ bottomInfo.title }}</span>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import { download, chnup, loadPage } from "../../../utils/tools";

export default {
  data() {
    return {
      userInfoS: [
        {
          name: "Dadabhvai Gandhi",
          date: "1/24/24",
          content:
          "Callbreak Offline has become my daily escape. The interface is intuitive, and the game offers a perfect balance between challenge and entertainment. Callbreak Offline – a must-try for anyone who loves a good card game!"
        },
        {
          name: "Srijan Acharekar",
          date: "1/22/24",
          content:
          "I recently discovered Callbreak Offline, and I must say it has become my go-to card game for entertainment. This game seamlessly blends strategy and fun, making every round a captivating experience."
        },
        {
          name: "Vrikodara Sarkar",
          date: "1/19/24",
          content:
          "Callbreak Offline has completely exceeded my expectations for a card game. The competitive nature of the game makes it a standout choice. The gameplay is addictive, and the variety of game modes keeps things interesting."
        },
      ],
      shareInfoS: [
        {
          pict: "https://dapv7y4era0s5.cloudfront.net/cashbreak/mobile/ic_lianjie.png",
          pictStyle: "share-pict-1",
          content: "This app may share these data types with third parties",
          content2: "App activity and Device or other IDs",
        },
        {
          pict: "https://dapv7y4era0s5.cloudfront.net/cashbreak/mobile/ic_yun.png",
          pictStyle: "share-pict-2",
          content: "This app may collect these data",
          content2:
            "App activity,App info and performance.and Device or other IDs",
        },
        {
          pict: "https://dapv7y4era0s5.cloudfront.net/cashbreak/mobile/ic_lock.png",
          pictStyle: "share-pict-3",
          content: "Data is encrypted in transit",
        },
        {
          pict: "https://dapv7y4era0s5.cloudfront.net/cashbreak/mobile/ic_ljt.png",
          pictStyle: "share-pict-4",
          content: "You can request that data be deleted",
        },
      ],
      bottomInfoS: [
        {
          index: 1,
          pict: "https://dapv7y4era0s5.cloudfront.net/cashbreak/mobile/ic_Games.png",
          pictStyle: "bottom-pict-1",
          title: "Games",
        },
        {
          index: 2,
          pict: "https://dapv7y4era0s5.cloudfront.net/cashbreak/mobile/ic_Apps.png",
          pictStyle: "bottom-pict-2",
          title: "Apps",
        },
        {
          index: 3,
          pict: "https://dapv7y4era0s5.cloudfront.net/cashbreak/mobile/ic_Movies.png",
          pictStyle: "bottom-pict-3",
          title: "Movies & TV",
        },
        {
          index: 4,
          pict: "https://dapv7y4era0s5.cloudfront.net/cashbreak/mobile/ic_Books.png",
          pictStyle: "bottom-pict-4",
          title: "Books",
        },
        {
          index: 5,
          pict: "https://dapv7y4era0s5.cloudfront.net/cashbreak/mobile/ic_Children.png",
          pictStyle: "bottom-pict-5",
          title: "Children",
        },
      ],
    };
  },
  methods: {
    download_apk: function (event) {
      chnup("click_v2");
      // download();
    },
    head_click: function () {
      chnup("headClick1");
    },
    changePict: function(msg){
      let changeIndex = this.nowPict + msg
      console.log(msg, changeIndex)
      if(changeIndex <= 0){
        let leftDiv = document.getElementById("left-pict")
        leftDiv.style.visibility = "hidden"
        return
      } else if(changeIndex > 4){
        let rightDiv = document.getElementById("right-pict")
        rightDiv.style.visibility = "hidden"
        return
      } else {
        let leftDiv = document.getElementById("left-pict")
        leftDiv.style.visibility = "visible"
        let rightDiv = document.getElementById("right-pict")
        rightDiv.style.visibility = "visible"
        if(changeIndex == 4){
          let rightDiv = document.getElementById("right-pict")
          rightDiv.style.visibility = "hidden"
        } 
        if(changeIndex == 1){
          let leftDiv = document.getElementById("left-pict")
          leftDiv.style.visibility = "hidden"
        } 
        this.nowPict = changeIndex;
        let imgDiv = document.getElementById("show-pict-big")
        imgDiv.src = `https://dapv7y4era0s5.cloudfront.net/cashbreak/mobile/image_${changeIndex}.png`
      }
    },
    showDialog: function(id){
      let leftDiv = document.getElementById("left-pict")
      leftDiv.style.visibility = "visible"
      let rightDiv = document.getElementById("right-pict")
      rightDiv.style.visibility = "visible"
      let dialogDiv = document.getElementById("dialog-box")
      dialogDiv.style.display = "block";
      this.nowPict = id;
      if(this.nowPict == 1){
        let leftDiv = document.getElementById("left-pict")
        leftDiv.style.visibility = "hidden"
      }
      if(this.nowPict == 4){
        let rightDiv = document.getElementById("right-pict")
        rightDiv.style.visibility = "hidden"
      }
      let imgDiv = document.getElementById("show-pict-big")
      imgDiv.src = `https://dapv7y4era0s5.cloudfront.net/cashbreak/mobile/image_${id}.png`
    },
    closeDialog: function(){
      let dialogDiv = document.getElementById("dialog-box")
      dialogDiv.style.display = "none";
    },
  },
  created() {
    loadPage();
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
  padding-bottom: 20vw;
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
  z-index: 100;
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
  position: relative;
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
.app-bottom-card-box{
  width: 90vw;
  .mid-box;
  justify-content: space-between;
  position: relative;
  top: 0.5vw;
}
.bottom-card{
  .flex-change-box;
  justify-content: space-between;
  height: 8vw;
}
.bottom-pict-1{
  width: 4.13vw;
	height: 3.2vw;
}
.bottom-pict-2{
  	width: 3.33vw;
	height: 3.47vw;
}
.bottom-pict-3{
  width: 3.6vw;
	height: 4vw;
}
.bottom-pict-4{
  width: 3.2vw;
	height: 4.13vw;
}
.bottom-pict-5{
  width: 4.53vw;
	height: 4.4vw;
}
.bottom-card-title{
  font-size: 2.93vw;
	color: #5f6368;
}
.bottom-card:nth-child(2) span{
  color: #0b57cf;
}
.dialog-box{
  width: 100vw;
  height: 100vh;
  position: fixed;
  background: rgba(0,0,0, 0.5);
  display: none;
  z-index: 500;
}
.click-show-box{
  width: 100vw;
  margin-top: 20vw;
  position: relative;
  z-index: 200;
}
.show-pict-big {
  width: 79.2vw;
  height: auto;
}
.left-pict{
  width: 13.47vw;
	height: 13.47vw;
  position: relative;
  left: 9.47vw;
  z-index:200;
}
.right-pict{
  width: 13.47vw;
	height: 13.47vw;
  position: relative;
  right: 9.47vw;
  z-index:200;
}
</style>