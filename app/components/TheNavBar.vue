<template>
  <section class>
    <!-- ヘッダー -->
    <nav class="columns is-vcentered has-text-white nav">
      <div class="column is-2 is-mobile has-background-white brand-logo-area">
        <a class="brand-logo">Edmond</a>
      </div>
      <div class="column search-area">
        <div class>
          <input class="input" type="text">
        </div>
      </div>

      <div class="column is-2">
        <a class>hoge@giftee.co</a>
        <!-- ドロップダウンが来るはず -->
      </div>
    </nav>
  </section>
</template>

<style scoped lang="scss">
.nav {
  padding: 0.8rem;
  text-align: center;
}

.brand-logo-area {
  min-width: 180px;
}

.brand-logo {
  font-size: 2rem;
  font-family: 'Futura';
  font-weight: bold;
  color: #273c6c;
}

.search-area {
  @media screen and (max-width: 768px) {
    width: 98%;
  }

  @media screen and (min-width: 768px) {
    width: 65%;
    padding-left: 2rem;
  }
}

.dropdown-text {
  color: white;
  &:hover {
    background: #355293 !important;
  }
}
</style>
