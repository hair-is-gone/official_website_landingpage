<template>
  <page>
    <template v-slot:title-first>
      <span>Contact Us</span>
    </template>
    <template v-slot:title>
      <span>Contact Us</span>
    </template>
    <template v-slot:content>
      <div class="contact-three-box">
        <contact>
          <template v-slot:pict>
            <div class="pict-email">
                <img src="../../../../static/mobile/email.png" alt="" class="pict">
              </div>
          </template>
          <template v-slot:info>
            <span>Email: <span class="green-color">support@slamdunktechpriltd.com</span></span>
          </template>
        </contact>
        <contact>
          <template v-slot:pict>
            <div class="pict-phone">
                <img src="../../../../static/mobile/phone.png" alt="" class="pict">
              </div>
          </template>
          <template v-slot:info>
            <span>Phone <span class="green-color">+91 89778 46724</span></span>
          </template>
        </contact>
        
        <contact :isLong="true">
          <template v-slot:pict>
            <div class="pict-addr">
                <img src="../../../../static/mobile/location.png" alt="" class="pict">
              </div>
          </template>
          <template v-slot:info>
            <div class="addr-info-box">
              <span>
                Address: SLAMDUNK TECH PRIVATE LIMITED   
              </span>
              <span>No. 19, 4th C Cross, Koramangala Industrial, </span>
              <span>5th Block Area, Bangalore - 560 095</span>
            </div>

          </template>
        </contact>
      </div>
    </template>
  </page>
</template>

<script>
import page from "@/components/mobile/items/Page.vue";
import contact from "@/components/mobile/items/Contactitem.vue";

export default {
  components: {
    page,
    contact,
  },
};
</script>

<style lang="less" scoped>
.addr-info-box {
  .flex-change-start;
}

.contact-three-box {
  .mid-box;
  // align-items: flex-start;
  width: 100%;
  // justify-content: space-between;
}
.green-color {
  color: #000;
}
.pict-email{
  width: 8.19vw;
	height: 8.19vw;
}
.pict-phone{
	width: 8.19vw;
	height: 8.19vw;
  margin-left: 1.81vw;
}
.pict-addr{
	width: 8.19vw;
	height: 8.19vw;
}
</style>