<template>
  <section class="section-navbar">
    <!-- ヘッダー -->
    <nav class="header-nav">
      <div class="brand-logo-area">
        <nuxt-link to="/" class="brand-logo font-xxlarge">Edmond</nuxt-link>
      </div>
      <div class="search-area">
        <div class="input-area">
          <input class="input" type="text" v-model="searchWord" @keyup.enter="onClickSearchButton">
          <div class="button-area" @click="onClickSearchButton">
            <i class="fas fa-search"></i>
          </div>
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
  @media screen and (max-width: 480px)
    grid-template-columns: 1fr
    grid-template-rows: auto

.brand-logo-area
  grid-area: brand-logo
  background-color: $second-base-color
  text-align: center
  vertical-align: middle
  @media screen and (max-width: 480px)
    grid-column: 1
    grid-row: auto

.brand-logo
  line-height: 1.9 //fixme: vertical-align doesn't work
  font-family: 'Futura','Archivo Black'
  font-weight: bold
  color: $base-color

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

  .input
    line-height: 2.3
    border-radius: 4px 0 0 4px
    width: 85%

  .button-area
    width: 5rem
    height: 36px
    background: $skyblue
    border-radius: 0 4px 4px 0
    text-align: center
    cursor: pointer
    > i
      display: inline-block
      line-height: 2.3 //fixme

.menu-area
  grid-area: menu
  background-color: $base-color
  @media screen and (max-width: 480px)
    grid-column: 1
    grid-row: auto

</style>
