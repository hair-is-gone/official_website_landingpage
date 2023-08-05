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
          <contact>
            <template v-slot:pict>
              <div class="pict-addr">
                <img src="../../../../static/mobile/location.png" alt="" class="pict">
              </div>
            </template>
            <template v-slot:info>
              <span>
                Address: SLAMDUNK TECH PRIVATE LIMITED   
              </span>
              <span>No. 19, 4th C Cross, Koramangala Industrial, </span>
              <span>5th Block Area, Bangalore - 560 095</span>
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
    contact
  },
}
</script>

<style lang="less" scoped>
@media screen and (max-width: 767px) {
  .contact-three-box {
    .flex-change-box;
    width: 91.67vw;
	  height: 69.86vw;
    // background-image: url("../../../../static/mobile/bg.png");
    background-size: cover;
    padding-top: 14vw;
    box-sizing: border-box;
  }
  .green-color {
    color: #000;
  }
  .pict-1{
    width: 11.39vw;
	  height: 7.36vw;
  }
  .pict-2{
   width: 5.83vw !important;
	height: 7.92vw !important;
    margin-left: 4vw;
  }
  .pict-3{
   width: 6.81vw !important;
	height: 7.08vw !important;
    margin-left: 4vw;
  }
}
.contact-three-box {
  .mid-box;
  align-items: flex-start;
  width: 100%;
  justify-content: space-between;
}
.pict-email{
  width: 8.19vw;
	height: 8.19vw;
}
.pict-phone{
	width: 8.19vw;
	height: 8.19vw;
}
.pict-addr{
	width: 8.19vw;
	height: 8.19vw;
}
</style>