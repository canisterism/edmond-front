<template>
  <section class="section-navbar">
    <!-- ヘッダー -->
    <nav class="header-nav">
      <div class="brand-logo-area">
        <nuxt-link to="/" class="brand-logo font-xxlarge">Edmond</nuxt-link>
      </div>
      <div class="search-area">
        <div class="input-area">
          <div class="search-icon">
            <i class="fas fa-search"></i>
          </div>
          <input
            class="input"
            type="text"
            v-model="searchWord"
            @keyup.enter="onClickSearchButton"
            placeholder="タイトルから探す"
          >
        </div>
      </div>
      <div class="menu-area"></div>
    </nav>
  </section>
</template>

<script>
export default {
  data: () => {
    return {
      searchWord: ''
    }
  },
  methods: {
    async onClickSearchButton() {
      try {
        const searchWord = this.searchWord
        await this.$store.dispatch('books/searchByText', { searchWord })
        this.$router.push('/')
      } catch (e) {
        // eslint-disable-next-line
        console.error(e)
      }
    }
  }
}
</script>


<style lang="sass" scoped>
.section-navbar
  position: sticky
  top: 0

.header-nav
  display: grid
  grid-template-rows: 60px
  grid-template-areas: 'brand-logo search search search search menu'
  border-bottom: $second-base-color solid 0.5px
  grid-template-columns: 12rem 1fr 1fr 1fr 1fr 1fr
  border-bottom: 1px $line-color solid

  @media screen and (max-width: 480px)
    grid-template-columns: 1fr
    grid-template-rows: auto

.brand-logo-area
  grid-area: brand-logo
  background-color: white
  color: $primary-color
  text-align: center
  vertical-align: middle
  @media screen and (max-width: 480px)
    grid-column: 1
    grid-row: auto

.brand-logo
  line-height: 1.9 //fixme: vertical-align doesn't work
  font-family: 'Futura','Archivo Black'
  font-weight: bold

.search-area
  grid-area: search
  grid-column: 2/6
  background-color: $base-color
  display: flex
  align-items: center
  justify-content: flex-start
  @media screen and (max-width: 480px)
    grid-column: 1
    grid-row: auto
    padding: 1rem 0

.input-area
  margin: 0 1rem
  width: 100%
  display: flex
  align-items: center
  justify-content: flex-start
  box-shadow: 0px 3px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1)
  border-radius: 4px
  border: 1px $line-color solid

.search-icon
  width: 3rem
  height: 100%
  color: $text-base-color
  text-align: center
  padding-left: 0.5rem
  > i
  display: inline-block

.input
  line-height: 2.3
  width: 100%
  padding-left: 0

.menu-area
  grid-area: menu
  background-color: $base-color
  @media screen and (max-width: 480px)
    grid-column: 1
    grid-row: auto

</style>
