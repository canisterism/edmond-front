<template>
  <div class="column is-one-fifth-desktop is-5-mobile">
    <div class="card-box-background">
      <figure class="image">
        <img src="https://cover.openbd.jp/9784780802047.jpg" alt>
      </figure>
      <div class="media-content">
        <div class="content">
          <div class="is-size-6">おにぎりレシピ101 everyday onigiri</div>
          <div class="author is-size-7">山田玲子</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.image {
  margin: 1rem;
}
.card-box-background {
  border-radius: 6px;
  padding: 1rem;
  background: linear-gradient(
    rgba(39, 60, 108, 0.8),
    rgba(139, 175, 255, 0.3),
    rgba(39, 60, 108, 0.8)
  );
  box-shadow: 10px 5px 5px rgba(10, 10, 10, 0.1),
    0 0 0 1px rgba(10, 10, 10, 0.1);
}

.author {
  margin-top: 0.5rem;
}
</style>
