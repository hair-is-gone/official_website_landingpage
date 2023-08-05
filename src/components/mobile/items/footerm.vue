<template>
    <div id="h5-footer">
        <div class="mid-box footer-info">

            <div class="m-footer-container">
                <div class="footer-link-box">
                    <span @click="gotoPage('linkClick2')" class="link-style">Terms & Conditions</span>
                    <span @click="gotoPage('linkClick3')" class="link-style">Refunds/Cancellations</span>
                    <span @click="gotoPage('linkClick1')" class="link-style">Contact Us</span>
                    <span @click="gotoPage('linkClick4')" class="link-style">Privacy Policy</span>
                </div>

                <div class="security-box">
                    <div class="security-box-items">
                        <div class="security-items-1" @click="gotoPage('sslClick1')">
                            <img src="../../../../static/mobile/ssl.png" alt="security-pict" class="pict"/>
                        </div>
                        <div class="security-items-2" @click="gotoPage('sslClick3')">
                            <img src="../../../../static/mobile/fraud.png" alt="security-pict" class="pict"/>
                        </div>
                        <div class="security-items-3" @click="gotoPage('sslClick4')">
                            <img src="../../../../static/mobile/18+.png" alt="security-pict" class="pict"/>
                        </div>
                        <div class="security-items-4" @click="gotoPage('sslClick5')">
                            <img src="../../../../static/mobile/know.png" alt="security-pict" class="pict"/>
                        </div>
                        <div class="security-items-5" @click="gotoPage('sslClick2')">
                            <img src="../../../../static/mobile/secured.png" alt="security-pict" class="pict"/>
                        </div>
                    </div>
                </div>
            </div>

            <div class="copy-right">
                <span style="color: #fff; opacity: 0.55; font-size: 2.78vw">@ 2023 Master Teenpatti India</span>
            </div>
        </div>
        <!--    <div class="last-banner">-->
        <!--        <div class="download-pict" @click="download_apk()">-->
        <!--            <img src="../../../../static/mobile/btn_ad.png" alt="" class="pict">-->
        <!--        </div>-->
        <!--    </div>-->
    </div>
</template>

<script>
    import {download_v2, chnup} from "../../../utils/tools"

    export default {
        methods: {
            gotoPage: function (msg) {
                // chnup(msg)
                // this.$router.push(msg);
            },
            download_apk: function () {
                // window._latest_apk = "https://mastertp.go.link/?adj_t=12swbuq0&adj_campaign=%7B%7Bcampaign.name%7D%7D%20%28%7B%7Bcampaign.id%7D%7D%29&adj_adgroup=%7B%7Badset.name%7D%7D%20%28%7B%7Badset.id%7D%7D%29&adj_creative=%7B%7Bad.name%7D%7D%20%28%7B%7Bad.id%7D%7D%29&adj_redirect=https%3A%2F%2Fmasterteenpattiindia.com%2Fstatic%2Fpkg%2FMasterTeenpatti.apk";
                // window.location.href = window._latest_apk;
                chnup("click_v2")
                download_v2()
            },
            download_gp: function () {
                chnup("click_v4")
                download_v3()
            }
        },
    };
</script>

<style lang="less" scoped>
    #h5-footer {
        width: 100%;
        height: 34.72vw;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        background-size: cover;
        box-sizing: border-box;
        padding-bottom: 28.61vw;
        background-color: #a238c1;
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
        width: 52vw;
        height: 17vw;
        .flex-between;
        box-sizing: border-box;
        flex-wrap: wrap;
        justify-content: center;
    }

    .security-items {
        width: 12.08vw;
        height: 12.08vw;
    }

    .security-items-1 {
        display: flex;
        width: 14.17vw;
        height: 7.36vw;
        margin-right: 4.5vw;
    }

    .security-items-2 {
        width: 14.17vw;
        height: 7.36vw;
        margin-right: 4.5vw;
    }

    .security-items-3 {
        width: 14.17vw;
        height: 7.36vw;
    }

    .security-items-4 {
        width: 14.17vw;
        height: 7.36vw;
        margin-right: 4.58vw;
    }

    .security-items-5 {
        width: 14.17vw;
        height: 7.36vw;
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
        background-color: #00000033;
        height: 6.53vw;
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
        font-size: 2.22vw;
    }

    .link-style:hover {
        cursor: pointer;
        color: #7eaefd;
    }

    .security-box {
        .flex-change-box;
        width: 52vw;
        height: 17vw;
        margin-right: 0vw;
        margin-top: 4.78vw;
        box-sizing: border-box;
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
        justify-content: space-between;
    }

    .m-footer-container {
        display: flex;
        width: 86.53vw;
        height: 28.19vw;
        justify-content: space-between;
    }

    .footer-logo {
        width: 29.86vw;
        height: 11.67vw;
        margin: 2.64vw 0;
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
        font-size: 4.17vw;
        color: #ffffff;
        margin-left: 5.28vw;
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
        height: 28.61vw;
        background-size: cover;
        box-sizing: border-box;
        margin-top: 2vw;
        position: fixed;
        z-index: 301;
        bottom: 0;
    }

    .download-pict {
        width: 35.42vw;
        height: 10vw;
    }

    .gp-pict {
        width: 35.42vw;
        height: 10vw;
        margin-left: 2vw;
    }

    .footer-link-box {
        .flex-change-box;
        height: 23vw;
        justify-content: space-between;
        align-content: flex-start;
        margin-left: 2.5vw;
        align-items: flex-start;
        margin-top: 3vw;
    }
</style>
