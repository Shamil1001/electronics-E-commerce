<template>
  <div class="footer">
    <div class="footer-left">
      <h1>YediTilsim.com</h1>
      <div class="site-adress">
        <div class="phone-footer">
          <font-awesome-icon icon="phone" size="1x"> </font-awesome-icon>
          <p>+993 61 99 12 71 / +993 65 85 99 54</p>
        </div>
        <div class="adress-footer">
          <font-awesome-icon icon="location-dot" size="1x"> </font-awesome-icon>
          <p>Aşgabat şäher.Berdi Kerbabaýew köçe.39-nji jaýy.</p>
        </div>
        <div class="email-footer">
          <font-awesome-icon icon="envelope" size="1x"> </font-awesome-icon>
          <p>yedi.tilsim@gmail.com</p>
        </div>
      </div>
    </div>
    <h2 class="footer-right">ÝediTilsim bilen hemme zady Ýeňňilleşdir!</h2>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style>
.footer {
  width: 100%;
  height: 250px;
  bottom: 0;
  color: white;
  background-color: #172a4c;
  display: flex;
  flex-direction: row;
  gap: 50px;
}

.footer-left {
  margin: 30px;
}

.footer-right {
  margin: 30px;
}
.site-adress .adress-footer,
.email-footer,
.phone-footer {
  display: flex;
  flex-direction: row;
  gap: 10px;
}
</style>
