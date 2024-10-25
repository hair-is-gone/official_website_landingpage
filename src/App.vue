<template>
  <div id="app" v-cloak>
    <div id="indiaPage" v-if="notIN">
      <router-view />
    </div>
    <div id="gpPage" v-if="isIN">
      <google></google>
    </div>
  </div>
</template>

<script>
import mHeader from "@/components/Header.vue";
import mFooter from "@/components/Footer.vue";
import google from "@/components/Google.vue";

export default {
  name: "App",
  components: {
    mHeader,
    mFooter,
    google,
  },
  data() {
    return {
      isIN: false,
      notIN: false,
    };
  },
  mounted() {
    this.loadInfo();
  },
  methods: {
    async loadInfo() {
      // let india = document.getElementById("indiaPage")
      //   india.style.display = "block";
      // let gpPage = document.getElementById("gpPage")
      // gpPage.style.display = "block";
      let resp = await this.$axios.get(process.env.IP_HOST + "/sf/");
      let respData = resp.data;
      if (respData.status == 0) {
        let ipInfo = respData.data;
        if (ipInfo.country_iso_code == "IN") {
          let gpPage = document.getElementById("gpPage");
          // gpPage.style.display = "block";
          this.isIN = true;
          return;
        }
        let india = document.getElementById("indiaPage");
        this.notIN = true;
      } else {
        let india = document.getElementById("indiaPage");
        this.notIN = true;
      }
    },
  },
  watch: {
    $route() {
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style lang="less" scoped></style>
