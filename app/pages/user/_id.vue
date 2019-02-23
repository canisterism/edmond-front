<template>
  <section class>
    <div class="columns is-centered">
      <div class="user-info-area column is-one-fifth">
        <div class="icon-image">
          <img src="~/assets/images/edmond-honda.jpg" alt>
        </div>
        <div class="name">Otani</div>
        <div class="email">hoge@hoge.co.jp</div>
      </div>
    </div>

    <h4>借りている本</h4>
    <div class="border-line"></div>
    <div class="main-container columns is-multiline">
      <book-card></book-card>
      <book-card></book-card>
      <book-card></book-card>
      <book-card></book-card>
      <book-card></book-card>
      <div class="line"></div>
      <!-- ↑↑↑↑要検討↑↑↑↑ -->
      <book-card></book-card>
      <book-card></book-card>
      <!-- メインコンテンツ おわり-->
    </div>
  </section>
</template>

<script>
import BookCard from '~/components/BookCard.vue'

export default {
  components: {
    BookCard
  },
  middleware: 'authentication'
}
</script>

<style scoped lang="scss">
h4 {
  font-weight: bold;
  padding-bottom: 0.2rem;
  border-bottom: 2px white solid;
  margin: 2rem;
  margin-bottom: 1rem;
}
.main-container {
  margin: 1rem;
}
.line {
  border: 1px #cec6bb solid;
  width: 100%;
}

.user-info-area {
  text-align: center;
  margin-top: 1rem; //付け焼き刃
}
.icon-image {
  text-align: center;
  > img {
    border-radius: 2.5rem;
    object-fit: cover;
    height: 5rem;
    width: 5rem;
  }
}

.name {
}
.email {
}
</style>
