<template>
  <div>
    <page>
      <template v-slot:title-first>
        <span>About Us</span>
      </template>
      <template v-slot:title>
        <span>About Us</span>
      </template>
      <template v-slot:content>
      <p style="margin-top:0pt; margin-bottom:0pt; text-align:justify; widows:0; orphans:0; font-size:10.5pt"><span
                style="font-family:'Times New Roman'">W</span><span style="font-family:'Times New Roman'">elcome to
            </span><span style="font-family:'Times New Roman'">Dunk Rummy! Play Rummy and Win Big!</span></p>
        <p style="margin-top:0pt; margin-bottom:0pt; text-align:justify; widows:0; orphans:0; font-size:10.5pt"><span
                style="font-family:'Times New Roman'">&#xa0;</span></p>
        <p style="margin-top:0pt; margin-bottom:0pt; text-align:justify; widows:0; orphans:0; font-size:10.5pt"><span
                style="font-family:'Times New Roman'">As is well-known, r</span><span
                style="font-family:'Times New Roman'">ummy</span><span style="font-family:'Times New Roman'">
                games</span><span style="font-family:'Times New Roman'"> have always been popular in India. If you
            </span><span style="font-family:'Times New Roman'">like card games and you </span><span
                style="font-family:'Times New Roman'">are passionate about playing rummy</span><span
                style="font-family:'Times New Roman'"> games,</span><span style="font-family:'Times New Roman'">
            </span><span style="font-family:'Times New Roman'">Dunk Rummy is 100% the best option for you</span><span
                style="font-family:'Times New Roman'">.</span><span style="font-family:'Times New Roman'"> Just download
                it now!</span></p>
        <p style="margin-top:0pt; margin-bottom:0pt; text-align:justify; widows:0; orphans:0; font-size:10.5pt"><span
                style="font-family:'Times New Roman'">&#xa0;</span></p>
        <p style="margin-top:0pt; margin-bottom:0pt; text-align:justify; widows:0; orphans:0; font-size:10.5pt"><span
                style="font-family:'Times New Roman'">Dunk Rummy is a highly recommended online rummy game platform
                compared to other online skill games. We offer you the chance to play your favorite classic game modes
                with an enhanced online experience. And you can invite your friends to play with you and win big prizes
                together.</span></p>
        <p style="margin-top:0pt; margin-bottom:0pt; text-align:justify; widows:0; orphans:0; font-size:10.5pt"><span
                style="font-family:'Times New Roman'">&#xa0;</span></p>
        <p style="margin-top:0pt; margin-bottom:0pt; text-align:justify; widows:0; orphans:0; font-size:10.5pt"><span
                style="font-family:'Times New Roman'">Moreover, Dunk Rummy</span><span
                style="font-family:'Times New Roman'"> is </span><span style="font-family:'Times New Roman'">a 100% safe
            </span><span style="font-family:'Times New Roman'">platform for all your real money game transactions. Even
                if you are a beginner and want to learn the game, </span><span
                style="font-family:'Times New Roman'">Dunk Rummy has a simple but complete tutorial to make your game
                experience comfortable and enjoyable. </span><span style="font-family:'Times New Roman'">These factors
                combined together make it one of the best real rummy apps as well.</span><span
                style="font-family:'Times New Roman'"> You should definitely try it out! </span></p>
        <p style="margin-top:0pt; margin-bottom:0pt; text-align:justify; widows:0; orphans:0; font-size:10.5pt"><span
                style="font-family:'Times New Roman'">&#xa0;</span></p>
        <p style="margin-top:0pt; margin-bottom:0pt; text-align:justify; widows:0; orphans:0; font-size:10.5pt"><span
                style="font-family:'Times New Roman'">We are at your service 24/7. If you have any concerns about the
                game, please feel free to contact us by email support@slamdunktechpriltd.com.</span></p>
        <p style="margin-top:0pt; margin-bottom:0pt; text-align:justify; widows:0; orphans:0; font-size:10.5pt"><span
                style="font-family:'Times New Roman'">&#xa0;</span></p>
      </template>
    </page>
  </div>

</template>

<script>
import page from "@/components/mobile/items/Page.vue";

export default {
  components: {
    page,
  },
  created() {
    window.addEventListener("beforeunload", (e) => {
      window.scrollTo(0, 0);
    });
  },
};
</script>
