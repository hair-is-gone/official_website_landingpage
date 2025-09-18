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
import google from "@/components/Google.vue";

export default {
  name: "App",
  components: {
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
      let resp = await this.$axios.get(process.env.IP_HOST + "/sf/");
      let respData = resp.data;
      if (respData.status == 0) {
        let ipInfo = respData.data;
        if (ipInfo.country_iso_code == "IN") {
          this.isIN = true;
          document.title = "KM456 Ludo";
          return;
        }
        this.notIN = true;
        document.title = "KM456 Remote Desktop";
      } else {
        this.notIN = true;
        document.title = "KM456 Remote Desktop";
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
