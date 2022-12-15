<template>
  <div class="technical">
    <h2>Elektronika enjamlaryny abatlamak hyzmatyny Size hödürleýäris!</h2>
    <div class="technical-body">
      <div class="technical-body-one">
        <ul>
          <p>Aşakda görkezileln ugurlar boýunça işleri alyp barýarys:</p>
          <li>Telewizorler</li>
          <li>Tefallar</li>
          <li>Sowadyjylar</li>
          <li>Elektrik peçler</li>
          <li>Ütükler</li>
          <li>Robotehnika ugrundan dürli enjamlary gurnamak we bejermek</li>
          <li>"Smart House" (Akylly Öý) ulgamyny ornaşdyrmak</li>
          <li>
            Kompýuter enjamlaryny barlamak, düzmek, bejermek we programma
            üpjünçiligi
          </li>
        </ul>
        <img src="../images/49635401403_96f9c322dc_o.jpg" />
      </div>
      <div class="technical-body-two">
        <img src="../images/49635401403_96f9c322dc_o.jpg" />
        <ul>
          <li>
            IT ugurdan islendik programma we tehniki çözgütleri hödürlemek
            hem-de konsultasiýa bermek.
          </li>
          <li>
            Internetde online söwdanyň islendik görnüşi üçin (elektronika,
            egin-eşik, hojalyk harytlary we ş.m.) şeýle hem islendik internet
            biznes ( meselem, hyzmatlar) üçin web saýtlary we olaryň mobil
            telefonlar üçin priloženiýesini islegiňize görä dizaýn etmek,
            programmasyny düzüp bermek, tehniki şertlerini we ýumuşlaryny
            (Техзадания) düzmek.
          </li>
          <li>
            Internetde online söwdanyň islendik görnüşi üçin (elektronika,
            egin-eşik, hojalyk harytlary) şeýle hem islendik internet biznes
            üçin dükanlardaky kassa we skladlardaky hasabatlary ýöretmek,
            statistikalary çykarmak üçin programmalary düzüp bermek.
          </li>
          <li>
            Islendik önümçilik proseslerini we iş ýerlerini awtomatlaşdyrmak
            üçin programma düzmek we tehniki çözgütleri hödürlemek.
          </li>
          <li>
            Islendik elektronika enjamlaryny diagnostika etmek we bejermek.
          </li>
          <li>
            Islendik elektronika enjamlaryny, ätiýaçlyk şaýlaryny we gurallaryny
            Siziň sargytlaryňyz boýunça Türkiýeden hem-de Hytaýyň islendik
            saýtlaryndan getirip bermek.
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TechnicalServe",
};
</script>

<style>
.technical-body {
  margin: 50px;

  display: flex;
  flex-direction: column;
  justify-content: center;
}

.technical-body .technical-body-one,
.technical-body-two {
  margin: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  height: 50vh;
  font-size: 20px;
  text-align: justify;
}
.technical-body .technical-body-one img,
.technical-body-two img {
  width: 40vw;
  height: 80%;
  margin: 0;
}

.technical h2 {
  margin-top: 30px;
  display: flex;
  justify-content: center;
}
</style>
