<template>
  <section class="container">
    <div class="left">
      <h1 class="logo">
        <span>Edm</span>ond
      </h1>
      <div class="line"></div>
      <div class="font-small">さあ、見つけよう。</div>
      <nuxt-link to="/">
        <div class="button try">Find your book</div>
      </nuxt-link>
      <h4 class="top-members">Top Members</h4>
      <ul class="members">
        <li>@someone</li>
        <li>@someone</li>
        <li>@someone</li>
      </ul>
    </div>
    <!-- fixme: 画質が終わっている -->
    <!-- fixme: コンポーネントで賄った方が良い -->
    <div class="right">
      <div class="cards">
        <div class="card">
          <figure class="cover">
            <img src="~/assets/images/cover_01.jpg" alt="cover">
          </figure>
          <h4>初めてのJavaScript</h4>
          <p class="font-small">Ehan Brown</p>
          <p class="font-small">O'REILLY JAPAN</p>
        </div>
        <div class="card">
          <figure class="cover">
            <img src="~/assets/images/cover_02.jpg" alt="cover">
          </figure>
          <h4>ゼロから作るDeepLearning</h4>
          <p class="font-small">Yasutaka Saito</p>
          <p class="font-small">O'REILLY JAPAN</p>
        </div>
        <div class="card">
          <figure class="cover">
            <img src="~/assets/images/cover_03.jpg" alt="cover">
          </figure>
          <h4>リーダブルコード</h4>
          <p class="font-small">Dustin Boswell</p>
          <p class="font-small">Trevor Foucher</p>
          <p class="font-small">O'REILLY JAPAN</p>
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

<style lang="sass" scoped>
.container
  background: linear-gradient(90deg, #fff 20%, $base-color 20%)
  height: 100vh
  display: flex

.left
  height: 100%
  width: 35%
  padding-top: 15vh
  padding-left: 8.5vw
  color: $base-color

.logo
  font-size: 5vw
  font-family: 'Futura','Archivo Black'
  color: $second-base-color
  > span
    color: $base-color

.line
  border: 0.5px $base-color solid
  width: 30%
  margin-top: 3vh
  margin-bottom: 2vh

.button
  display: block
  margin: 0.5rem auto
  color: $second-base-color
  border: none
  text-align: center

  &.try
    font-family: 'Futura','Archivo Black'
    display: inline-block
    background: yellow
    border-radius: 30px
    box-shadow: 10px 5px 5px rgba(20, 20, 10, 0.1), 0 0 0 1px rgba(20, 10, 10, 0.1)
    color: $base-color
    font-weight: bold
    height: 3.5rem
    min-width: 80%
    margin-left: 0.5rem
    margin-top: 10rem
    line-height: 3.5

.top-members
  margin-top: 5vh
  display: block

.members > li
  margin: 1vh 0

.right
  height: 100%
  width: 65%
  padding-top: 25vh
  overflow: hidden

.cards
  display: flex
  padding-left: 5rem

.card
  margin-left: 1rem
  font-family: 'Noto Sans JP', sans-serif

.cover > img
  width: auto
  height: 25vw
</style>
