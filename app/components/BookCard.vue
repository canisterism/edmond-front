<template>
  <nuxt-link :to="'/book/' + isbn" class="card-box">
    <div class="card-box-background">
      <figure class="cover-area">
        <img :src="cover" alt>
      </figure>
      <div class="media-content">
        <div class="content">
          <div class>{{title}}</div>
          <div class="author">{{author}}</div>
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    author: String,
    cover: String,
    publisher: String,
    isbn: Number,
    title: String
  }
}
</script>

<style lang="sass" scoped>
.card-box
  height: 100%
.cover-area
  text-align: center
  margin: 0.6rem auto
  > img
      height: 16rem

.card-box-background
  border-radius: 6px
  padding: 1rem
  background: linear-gradient( rgba(39, 60, 108, 0.8), rgba(139, 175, 255, 0.3), rgba(39, 60, 108, 0.8) )
  box-shadow: 10px 5px 5px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1)
  height: 100%

.author
  margin-top: 0.5rem
  font-size: 0.5rem

.button
  margin-top: 0.8rem
  font-size: 0.8rem
  background-color: yellow
  color: #273c6c
</style>
