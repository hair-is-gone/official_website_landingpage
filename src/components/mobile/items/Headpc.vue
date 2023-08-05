<template>
<div id="header-main">
    <div class="head-pict-box" @click="gotoPage('/home')">
        <img src="../../../../static/img/logo.png" alt="head-pict" class="pict" />
    </div>
    <!-- <div class="head-title">
        <div class="menu-box">
            <div class="menu-items" :key="menuInfo.url" v-for="menuInfo in menuInfoS" @click="gotoPage(menuInfo.url)">
                <span :class="current == menuInfo.index ? 'checkbox' : 'original'">
                    {{ menuInfo.name }}
                </span>
                <span :class="current == menuInfo.index ? 'checkbox-click' : 'original-click'">
                    
                </span>
            </div>
        </div>
    </div> -->
</div>
</template>

<script>
import { download, loadPage, chnup } from "../../../utils/tools"

export default {
    data() {
        return {
            currentEn: 0,
            currentIndx: 0,
            current: 0,
            menuInfoS: [{
                    url: "/home",
                    index: 0,
                    name: "Home",
                    pict1: "../../../../static/img/home.png",
                    pict2: "../../../../static/img/home1.png",
                    pictStyle: "link-pict-1",
                },
                {
                    url: "/privacy",
                    index: 4,
                    name: "Privacy Policy",
                    pict1: "../../../../static/img/ic_2.png",
                    pict2: "../../../../static/img/ic_2_1.png",
                    pictStyle: "link-pict-4",
                },

                {
                    url: "/contact",
                    index: 5,
                    name: "Contact Us",
                    pict1: "../../../../static/img/ic_3.png",
                    pict2: "../../../../static/img/ic_3_1.png",
                    pictStyle: "link-pict-5",
                },
                {
                    url: "/terms",
                    index: 2,
                    name: " Terms & Conditions",
                    pict1: "../../../../static/img/ci_1.png",
                    pict2: "../../../../static/img/ci_1_1.png",
                    pictStyle: "link-pict-3",
                },
                {
                    url: "/refunds",
                    index: 3,
                    name: "Refunds/Cancellations",
                    pict1: "../../../../static/img/ic_4.png",
                    pict2: "../../../../static/img/ic_4_1.png",
                    pictStyle: "link-pict-2",
                },
            ],
        };
    },
    created() {},
    methods: {
        gotoPage: function (msg) {
            chnup("headClick1")
            var pageDict = {
                "/home": 0,
                "/about": 1,
                "/terms": 2,
                "/refunds": 3,
                "/privacy": 4,
                "/contact": 5,
                "/legality": 6,
            };
            localStorage.setItem("current", pageDict[msg]);
            this.current = pageDict[msg];
            this.$router.push(msg);
        },
        goToIndex: function () {
            localStorage.setItem("current", 0);
            this.current = 0;
            this.$router.push("/");
        },
    },
    watch: {
        $route() {},
    },
    mounted() {
        let msg = localStorage.getItem("current");
        this.current = msg;
    },
};
</script>

<style lang="less" scoped>
#header-main {
    // position: fixed;
    width: 100%;
    height: 8.33vw;
    z-index: 300;
    box-sizing: border-box;
    .mid-box;
    background-color: #a238c1;
}

.head-title {
    width: 100%;
    .mid-box;
    height: 10.1vw;
    background-color: #a238c1;
}

.head-pict-box {
    width: 17.71vw;
    height: 6.56vw;
}

.head-pict-box:hover {
    cursor: pointer;
}

.menu-box {
    width: 60.4vw;
    height: 7.55vw;
    letter-spacing: 0vw;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.menu-box span {
    cursor: pointer;
    display: flex;
    align-content: center;
    justify-content: center;
}

.checkbox {
    font-size: 1.04vw;
    letter-spacing: 0vw;
    color: #ffea00;
    height: 1.44vw;
    box-sizing: border-box;
    padding: 1vw 1vw;
    border-radius: 0.89vw;
    .mid-box;
}

.original:hover {
    font-size: 1.04vw;
    letter-spacing: 0vw;
   color: #ffea00;
    height: 1.44vw;
    box-sizing: border-box;
    padding: 1vw 1vw;
    border-radius: 0.89vw;
    .mid-box;
}

.original {
    font-size: 1.04vw;
    letter-spacing: 0vw;
    color: #fff;
    height: 1.44vw;
    box-sizing: border-box;
    padding: 1vw 1vw;
    .mid-box;
}

.check-pict {
    width: 0.68vw;
    height: 0.68vw;
    margin-left: 0.5vw;
}

.head-logo-box {
    
}

.head-top-box {
    .flex-change-box;
    height: 4.79vw;
    justify-content: space-between;
}

.ic-top {
    width: 0.63vw;
    height: 3.44vw;
    margin-left: 0.5vw;
}

.active-pict {
    width: 2.92vw;
    height: 2.71vw;
}

.link-pict-1 {
    width: 2.92vw;
    height: 2.71vw;
}

.link-pict-2 {
    width: 2.6vw;
    height: 2.86vw;
}

.link-pict-3 {
    width: 2.66vw;
    height: 2.86vw;
}

.link-pict-4 {
    width: 2.6vw;
    height: 2.92vw;
}

.link-pict-5 {
    width: 3.07vw;
    height: 2.5vw;
}
.checkbox-click{
    width: 0.83vw;
	height: 0.73vw;
    background-image: url("../../../../static/img/ic_yellow_click.png");
    background-size: cover;
}
.original-click{
    width: 0.83vw;
	height: 0.73vw;
	background-color: #552010;
}
.menu-items{
    .flex-change-box;
}
</style>
