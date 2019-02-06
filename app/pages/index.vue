<template>
  <section>
    <!-- ヘッダー -->
    <nav class="navbar has-background-base has-text-white" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item has-background-white">
          <span class="brand-logo">Edmond</span>
        </a>
      </div>
      <div class="navbar-item search-area">
        <div class="control width-100p">
          <input class="input" type="text">
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item has-dropdown">
          <a class="navbar-link dropdown-text">hoge@giftee.co</a>
        </div>
        <div class="navbar-dropdown">
          <a href="/" class="navbar-item">自分のページ</a>
          <a href="/" class="navbar-item">設定</a>
        </div>
      </div>
    </nav>
    <!-- メインコンテンツ おわり -->
    <div class="column">
      <aside>hogehoge</aside>
      <aside>hogehoge</aside>
      <aside>hogehoge</aside>
      <aside>hogehoge</aside>
      <aside>hogehoge</aside>
      <aside>hogehoge</aside>
      <aside>hogehoge</aside>
      <aside>hogehoge</aside>
      <aside>hogehoge</aside>
      <aside>hogehoge</aside>
      <aside>hogehoge</aside>
      <aside>hogehoge</aside>
      <aside>hogehoge</aside>
      <aside>hogehoge</aside>
      <aside>hogehoge</aside>
      <aside>hogehoge</aside>
      <aside>hogehoge</aside>
      <aside>hogehoge</aside>
      <aside>hogehoge</aside>
      <aside>hogehoge</aside>
      <aside>hogehoge</aside>
      <!-- メインコンテンツ おわり-->
    </div>
  </section>
</template>

<script>
export default {
  components: {}
}
</script>

<style scoped lang="scss">
.brand-logo {
  font-size: 2rem;
  font-family: 'Futura';
  font-weight: bold;
  padding-left: 1rem;
  padding-right: 1rem;
}

.search-area {
  width: 65%;
  margin-left: 2rem;
}

.dropdown-text {
  color: white;
  &:hover {
    background: #355293 !important;
  }
}
</style>
