<template>
  <div>
    <page>
      <template v-slot:title-first>
        <span>Legality</span>
      </template>
      <template v-slot:title>
        <span>Legality</span>
      </template>
      <template v-slot:content>
        <p style="margin-top:0pt; margin-bottom:0pt; text-align:justify; widows:0; orphans:0; font-size:10.5pt"><span
                style="font-family:'Times New Roman'">Gambling or gaming in India was originally regulated by the Public
                Gambling Act, 1867 which is the central law on gambling presently, the power to legislate lies
                exclusively within the State Legislature. Pursuant to this power, most states in India have passed
                enactments laws.</span></p>
        <p style="margin-top:0pt; margin-bottom:0pt; text-align:justify; widows:0; orphans:0; font-size:10.5pt"><span
                style="font-family:'Times New Roman'">&#xa0;</span></p>
        <p style="margin-top:0pt; margin-bottom:0pt; text-align:justify; widows:0; orphans:0; font-size:10.5pt"><span
                style="font-family:'Times New Roman'">It is to be noted that, while the Central Gambling Act and all the
                State Gaming Acts provide for an exemption in the nature of Saving of Games of Skill and substantially
                state that "nothing in this Act shall apply to games of mere skill wherever played</span><a
                name="OLE_LINK2"><span style="font-family:'Times New Roman'">"</span></a><span
                style="font-family:'Times New Roman'">.</span></p>
        <p style="margin-top:0pt; margin-bottom:0pt; text-align:justify; widows:0; orphans:0; font-size:10.5pt"><span
                style="font-family:'Times New Roman'">&#xa0;</span></p>
        <p style="margin-top:0pt; margin-bottom:0pt; text-align:justify; widows:0; orphans:0; font-size:10.5pt"><span
                style="font-family:'Times New Roman'">Games of skill or mere skill are excluded from the applicability
                of Indian Gaming Laws which prohibits only betting and gambling in all Indian states to the exception of
                a few ("Betting and Gambling" being a state subject under the Constitution of India).</span></p>
        <p style="margin-top:0pt; margin-bottom:0pt; text-align:justify; widows:0; orphans:0; font-size:10.5pt"><span
                style="font-family:'Times New Roman'">&#xa0;</span></p>
        <p style="margin-top:0pt; margin-bottom:0pt; text-align:justify; widows:0; orphans:0; font-size:10.5pt"><span
                style="font-family:'Times New Roman'">T</span><span style="font-family:'Times New Roman'">he Supreme
                Court of India in 1967 passed a verdict stating that playing </span><span
                style="font-family:'Times New Roman'">r</span><span style="font-family:'Times New Roman'">ummy requires
                a considerable amount of skill as the players need to remember the cards and is not dependent on
                luck.</span></p>
        <p style="margin-top:0pt; margin-bottom:0pt; text-align:justify; widows:0; orphans:0; font-size:10.5pt"><span
                style="font-family:'Times New Roman'">&#xa0;</span></p>
        <p style="margin-top:0pt; margin-bottom:0pt; text-align:justify; widows:0; orphans:0; font-size:10.5pt"><span
                style="font-family:'Times New Roman'">In another judgment in 1996, the Supreme Court also stated that
                (i) competitions where success depends on substantial degree of skill are not "gambling" and (ii)
                despite there being an element of chance, if a game is preponderantly a game of skill it may be called a
                game of "mere skill".</span><span style="font-family:'Times New Roman'"> </span></p>
        <p style="margin-top:0pt; margin-bottom:0pt; text-align:justify; widows:0; orphans:0; font-size:10.5pt"><span
                style="font-family:'Times New Roman'">&#xa0;</span></p>
        <p style="margin-top:0pt; margin-bottom:0pt; text-align:justify; widows:0; orphans:0; font-size:11pt"><span
                style="font-family:'Times New Roman'; font-size:10.5pt">With all such information, it can be concluded
                that it is legal to play skill based games on Dunk Rummy. </span><span
                style="font-family:'Times New Roman'">However, </span><span style="font-family:'Times New Roman'">the
                states of Karnataka, Meghalaya, Andhra Pradesh, Assam, Odisha, Sikkim, Nagaland, Tamil Nadu, Arunachal
                Pradesh, and Telangana are exempt due to laws being vague in these states. </span><span
                style="font-family:'Times New Roman'">Hence</span><span style="font-family:'Times New Roman'">, we only
                allow people from states other than these mentioned above to play our games.</span></p>
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