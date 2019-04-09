<template>
  <section class="container">
    <div class="left">
      <h1 class="logo">
        <span>Edm</span>ond
      </h1>
      <div class="line"></div>
      <div class="phrase">さあ、見つけよう。</div>
      <nuxt-link to="/">
        <div class="button try">Find your book</div>
      </nuxt-link>
    </div>
    <div class="right">
      <div class="cards">
        <div class="card">
          <figure class="cover">
            <img src="~/assets/images/cover_01.png" alt="cover">
          </figure>
          <h4>初めてのJavaScript</h4>
          <p>Ehan Brown</p>
          <p>O'REILLY JAPAN</p>
        </div>
        <div class="card">
          <figure class="cover">
            <img src="~/assets/images/cover_02.png" alt="cover">
          </figure>
          <h4>ゼロから作るDeepLearning</h4>
          <p>Yasutaka Saito</p>
          <p>O'REILLY JAPAN</p>
        </div>
        <div class="card">
          <figure class="cover">
            <img src="~/assets/images/cover_03.png" alt="cover">
          </figure>
          <h4>プログラミングRust</h4>
          <p>Ehan Brown</p>
          <p>O'REILLY JAPAN</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  layout: 'none'
}
</script>

<style lang="scss" scoped>
.container {
  background: linear-gradient(90deg, #fff 20%, #273c6c 20%);
  height: 100vh;
  display: flex;
}

.left {
  height: 100%;
  width: 35%;
  padding-top: 15vh;
  padding-left: 8.5vw;
  color: #273c6c;
}

.logo {
  font-size: 5vw;
  font-family: Futura;
  color: white;
  > span {
    color: #273c6c;
  }
}

.line {
  border: 0.5px #273c6c solid;
  width: 30%;
  margin-top: 3vh;
  margin-bottom: 2vh;
}
.phrase {
  font-size: 0.8rem;
}

.button {
  display: block;
  margin: 0.5rem auto;
  color: white;
  border: none;
  text-align: center;

  &.try {
    font-family: 'Archivo Black';
    display: inline-block;
    background: yellow;
    border-radius: 30px;
    box-shadow: 10px 5px 5px rgba(20, 20, 10, 0.1),
      0 0 0 1px rgba(20, 10, 10, 0.1);
    color: #273c6c;
    font-weight: bold;
    height: 3.5rem;
    min-width: 80%;
    margin-left: 0.5rem;
    margin-top: 10rem;
    line-height: 3.5;
  }
}

.right {
  height: 100%;
  width: 65%;
  padding-top: 15vh;
}

.cards {
  display: flex;
  padding-left: 5rem;
}
.card {
  margin-left: 1rem;
  font-family: Hiragino Sans CNS;
}
.cover > img {
  width: 20vw;
}
</style>
