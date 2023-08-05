<template>
  <div>
    <page>
      <template v-slot:title-first>
        <span>Refunds/Cancellations</span>
      </template>
      <template v-slot:title>
        <span>Refunds/Cancellations</span>
      </template>
      <template v-slot:content>
         <p style="margin-top:0pt; margin-bottom:0pt; text-align:justify; widows:0; orphans:0; font-size:12pt"><span
                style="font-family:'Times New Roman'">&#xa0;</span></p>
        <p style="margin-top:0pt; margin-bottom:0pt; text-align:justify; widows:0; orphans:0; font-size:10.5pt"><span
                style="font-family:'Times New Roman'; font-weight:bold">Cancellation Policy</span></p>
        <p style="margin-top:0pt; margin-bottom:0pt; text-align:justify; widows:0; orphans:0; font-size:10.5pt"><span
                style="font-family:'Times New Roman'">&#xa0;</span></p>
        <p style="margin-top:0pt; margin-bottom:0pt; text-align:justify; widows:0; orphans:0; font-size:10.5pt"><span
                style="font-family:'Times New Roman'">Transactions to transfer money to your </span><span
                style="font-family:'Times New Roman'">Dunk Rummy</span><span style="font-family:'Times New Roman'"> cash
                account have to be made through third-party payment gateways. </span><span
                style="font-family:'Times New Roman'">We are</span><span style="font-family:'Times New Roman'"> not
                responsible for the denial or rejection of any transactions as they are subject to the terms and
                conditions of the third-party payment gateways. We have the right to cancel a transaction at any point
                of time solely according to our discretion in which case if the payment is successful, then the
                transaction will be reversed, and the money credited back to your payment instrument.</span></p>
        <p style="margin-top:0pt; margin-bottom:0pt; text-align:justify; widows:0; orphans:0; font-size:10.5pt"><span
                style="font-family:'Times New Roman'">&#xa0;</span></p>
        <p style="margin-top:0pt; margin-bottom:0pt; text-align:justify; widows:0; orphans:0; font-size:10.5pt"><span
                style="font-family:'Times New Roman'; font-weight:bold">Refund Policy</span></p>
        <p style="margin-top:0pt; margin-bottom:0pt; text-align:justify; widows:0; orphans:0; font-size:10.5pt"><span
                style="font-family:'Times New Roman'; font-weight:bold">&#xa0;</span></p>
        <p style="margin-top:0pt; margin-bottom:0pt; text-align:justify; widows:0; orphans:0; font-size:10.5pt"><span
                style="font-family:'Times New Roman'">In cases of accidental or erroneous cash credits to any party,
                user or company, we can independently or you can request for a refund within 2 workings days of
                initiating the transaction. </span><span style="font-family:'Times New Roman'">We</span><span
                style="font-family:'Times New Roman'"> will process the refund if it is a genuine case of accidental or
                erroneous cash credit, which is clear from your request or after our own independent investigation. The
                refund amount will be credited within two weeks to the financial instrument/platform that was used to
                make the corresponding transaction.</span></p>
        <p style="margin-top:0pt; margin-bottom:0pt; text-align:justify; widows:0; orphans:0; font-size:10.5pt"><span
                style="font-family:'Times New Roman'">&#xa0;</span></p>
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
