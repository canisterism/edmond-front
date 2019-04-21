<template>
  <div class="card-box-background">
    <nuxt-link :to="'/book/' + isbn" class="cover-area">
      <img :src="cover ? cover : noImage" alt>
    </nuxt-link>

    <div class="media-content">
      <div class="content">
        <div class>{{title}}</div>
        <div class="author font-small">{{author}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import noImage from '~/assets/images/no_image.jpg'
export default {
  props: {
    author: String,
    cover: String,
    publisher: String,
    isbn: Number,
    title: String
  },
  data() {
    return {
      noImage: noImage
    }
  }
}
</script>

<style lang="sass" scoped>
.card-box
  height: 100%
.cover-area
  text-align: center
  margin: 0.6rem auto
  display: block
  > img
    height: 15rem
    width: 12rem

.card-box-background
  border-radius: 6px
  padding: 1rem
  background: linear-gradient( rgba(39, 60, 108, 0.8), rgba(139, 175, 255, 0.3), rgba(39, 60, 108, 0.8) )
  box-shadow: 10px 5px 5px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1)
  height: 100%

.author
  margin-top: 0.5rem

</style>
