<template>
<div id="footer">
    <div class="my-footer">
        <div class="link-five-box">
            <div class="footer-mid-box">
                
                <div class="quick-box">
                    <img class="quick-box-logo" src="../../../../static/img/logo.png">
                    <div class="link-mid-box">
                        <div class="link-mid-box-column">
                            <span @click="gotoPage('linkClick1')" class="link-style">Contact Us</span>
                            <span @click="gotoPage('linkClick4')" class="link-style">Privacy Policy</span>
                        </div>
                        <div class="link-mid-box-column">
                            <span @click="gotoPage('linkClick3')" class="link-style">Refunds Cancellations</span>
                            <span @click="gotoPage('linkClick2')" class="link-style">Terms & Conditions</span>
                        </div>
                    </div>
                </div>

                <div class="security-box">
                    <span class="footer-title"></span>
                    <div class="five-pict-box">
                        <div class="security-items-1" @click="gotoPage('sslClick1')">
                            <img src="../../../../static/img/secured.png" alt="security-pict" class="security-items" />
                        </div>
                        <div class="security-items-2" @click="gotoPage('sslClick5')">
                            <img src="../../../../static/img/know.png" alt="security-pict" class="security-items" />
                        </div>
                        <div class="security-items-3" @click="gotoPage('sslClick3')">
                            <img src="../../../../static/img/18+.png" alt="security-pict" class="security-items" />
                        </div>
                        <div class="security-items-4" @click="gotoPage('sslClick2')">
                            <img src="../../../../static/img/fraud.png" alt="security-pict" class="security-items" />
                        </div>
                        <div class="security-items-5" @click="gotoPage('sslClick4')">
                            <img src="../../../../static/img/ssl.png" alt="security-pict" class="security-items" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="copy-right">
        <span style="color: #fff; opacity: 0.6;">@ 2023 Master Teenpatti India</span>
        </div>
    </div>
<!--    <div class="last-banner">-->
<!--        <div class="download-pict" @click="download_apk()">-->
<!--            <img src="../../../../static/img/btn_ad.png" alt="" class="pict">-->
<!--        </div>-->
<!--    </div>-->
</div>

</template>

<script>
import { download_v3,download_v2, chnup } from "../../../utils/tools"

export default {
    methods: {
        gotoPage: function (msg) {
            // chnup(msg)
            // var pageDict = {
            //     "/home": 0,
            //     "/about": 1,
            //     "/terms": 2,
            //     "/refunds": 3,
            //     "/privacy": 4,
            //     "/contact": 5,
            //     "/legality": 6,
            // };
            // localStorage.setItem("current", pageDict[msg]);
            // this.$router.push(msg);
        },
        download_apk: function(){
            // window._latest_apk = "https://mastertp.go.link/?adj_t=12swbuq0&adj_campaign=%7B%7Bcampaign.name%7D%7D%20%28%7B%7Bcampaign.id%7D%7D%29&adj_adgroup=%7B%7Badset.name%7D%7D%20%28%7B%7Badset.id%7D%7D%29&adj_creative=%7B%7Bad.name%7D%7D%20%28%7B%7Bad.id%7D%7D%29&adj_redirect=https%3A%2F%2Fmasterteenpattiindia.com%2Fstatic%2Fpkg%2FMasterTeenpatti.apk";
            // window.location.href = window._latest_apk;
            chnup("click_v2")
            download_v2();
        },
        download_gp: function(){
            chnup("click_v4")
            download_v3()
        }
    },
};
</script>

<style lang="less" scoped>
.my-footer {
    width: 100%;
    height: auto;
    background-color: #a238c1;
    .flex-change-box;
    // justify-content: flex-start;
    box-sizing: border-box;
    padding-bottom: 0vw;
}

.center-box {
    .mid-box;
    align-items: flex-start;
    color: #fff;
}

.footer-info-box {
    .flex-change-start;
    width: 100%;
    margin-top: 18px;
}

.link-box {
    .flex-change-box;
    align-items: flex-start;
    height: 7.5vw;
    justify-content: space-between;
}

.link-style {
    font-size: 1.15vw;
    line-height: 0.78vw;
    color: #fff;
}

.link-style:hover {
    color: #fff000;
    cursor: pointer;
}

.copy-right {
    width: 100%;
    height: 2.66vw;
    background-color: #00000033;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0;
    font-size: 1.27vw;
    margin-top: 0;
}
.five-pict-box {
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    width: 34vw;
    height: 11vw;
    justify-content: center;
    margin-top: 3.26vw;
}


.security-items {
    display: flex;
    width: 100%;
    height: auto;
}

.security-items-1 {
    display: flex;
    width: 9.06vw;
	height: 4.64vw;
    margin-right: 3.02vw;
}

.security-items-2 {
    display: flex;
    width: 9.06vw;
    height: 4.64vw;
    margin-right: 3.02vw;
}

.security-items-3 {
    display: flex;
    width: 9.06vw;
    height: 4.64vw;
}

.security-items-4 {
    display: flex;
    width: 9.06vw;
    height: 4.64vw;
    margin-right: 3.02vw;
}

.security-items-5 {
    display: flex;
    width: 9.06vw;
    height: 4.64vw;
}

.logo-pict {
    width: 11.72vw;
    height: 4.27vw;
}

.logo-pict-box {
    width: 16.72vw;
    height: 4.27vw;
    padding-left: 2vw;
    padding-right: 2vw;
    position: relative;
    top: -3vw;
    z-index: 210;
    background-color: #000000;
    .mid-box;
}

.logo-right {
    .mid-box;
    justify-content: space-between;
    width: 71vw;
    align-items: flex-start;
    margin-top: 4vw;
}

.quick-box {
    .flex-change-start;
    width: 28vw;
}

.quick-box-logo {
    width: 17.71vw;
    height: auto;
    background-image: url("../../../../static/img/logo.png");
    background-size: cover;
    .flex-change-box;
    justify-content: flex-start;
    margin-top: 2.66vw;
    margin-left: 1.3vw;
}

.security-box {
    .flex-change-box;
    .mid-width;
    margin-top: 2vw;
}

.footer-link-box {
    .flex-between;
    width: 26.46vw;
    margin-top: 3vw;
}

.about-box {
    .flex-change-start;
}

.footer-about-content {
    width: 14.79vw;
    font-size: 1.04vw;
    line-height: 1.88vw;
    color: #ffffff;
    margin-top: 2.5vw;
}

.black-hr {
    width: 100%;
    height: 1px;
    background-color: #5b5b5b;
    margin-top: 1vw;
}

.three-box {
    .flex-change-start;
}

.logo-title-box {
    .mid-box;
    justify-content: flex-start;
    align-items: baseline;
    margin-top: 1.72vw;
}

.footer-pict {
    width: 11.93vw;
    height: 6.61vw;
}

.footer-title {
    font-size: 1.88vw;
    font-weight: bold;
    line-height: 2.21vw;
    color: #ffffff;
}

.link-five-box {
    .flex-change-box;
    width: 100%;
    box-sizing: border-box;
    justify-content: flex-start;
}

.link-hr {
    width: 0.1vw;
    height: 7.92vw;
    background-color: #ffffff;
}

.copy-hr {
    .mid-width;
    height: 0.1vw;
    background-color: #ffffff;
    margin-top: 2.59vw;
}

.arrow-footer {
    .flex-change-start;
    width: 25.63vw;
    // margin-top: 2.81vw;
}

.white-hr {
    width: 100%;
    border-bottom: solid 1px #ffffff;
    z-index: 200;
}

.security-title {
    font-size: 1.33vw;
    color: #fff;
    margin-top: 0.5vw;
}

.footer-logo-box {
    .flex-change-box;
    height: 9.84vw;
    max-height: 189px;
}

.footer-logo {
    width: 26.67vw;
	height: 9.43vw;
}

.footer-mid-box {
    .flex-between;
    .mid-width;
    height: 19.11vw;
    align-items: flex-start;
}

.link-mid-box {
    .flex-change-start;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 28vw;
    margin-left: 1.6vw;
    margin-top: 2.08vw;
}

.link-mid-box-column{
    .flex-change-start;
    width: 14vw;
    height: 4vw;
    justify-content: space-between;
}

.mid-hr {
    width: 1px;
    height: 16.61vw;
	border-left: solid 0.16vw #fff;
    opacity: 0.5;
    margin-top: 2vw;
}

.footer-head-box {
    .mid-width;
    .flex-between;
    align-items: flex-start;
    margin-top: -3vw;
}

.choose-box {
    .flex-change-start;
    margin-top: 2.14vw;
}

.footer-span {
    width: 34.11vw;
    font-size: 1.25vw;
    line-height: 1.36vw;
    color: #ffffff;
    margin-top: 0.63vw;
}

.last-banner{
    .flex-change-box;
    width: 100%;
	height: 10.97vw;
    background-image: url("../../../../static/img/banner2.png");
    background-size: cover;
    box-sizing: border-box;
    margin-top: -0.1vw;
    position: fixed;
    z-index: 301;
    bottom: 0;
    justify-content: space-around;
}
.download-pict{
    width: 18.54vw;
	height: auto;
}
.download-pict-gp{
    width: 13.54vw;
	height: auto;
    // margin-top: 0.5vw;
}
</style>
