<template>
  <section class="columns is-centered">
    <div class="column is-half">
      <div class="cover">
        <img src="https://cover.openbd.jp/9784780802047.jpg" alt>
      </div>
      <div class="book-info">
        <div class="book-summary">
          <div class="is-size-4">おにぎりレシピ101 everyday onigiri</div>
          <div class="author is-size-6">山田玲子</div>
          <div class="published_by is-size-6">技術評論社</div>
        </div>

        <div class="status button">貸出可</div>
        <div class="borrow button is-primary">借りる</div>
        <div class="borrowing-info">
          <h4>借りている人</h4>
          <ul class="borrowing-users">
            <li class="borrowing-user">
              <nuxt-link to="/user/1">
                <span class="icon">○</span>
                <span>otani</span>
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.cover {
  width: 100%;
  margin: 3rem auto 0;
  text-align: center;
}
.book-info {
  width: 70%;
  margin: 2rem auto 0;
  box-sizing: border-box;
}
.author {
}
.published_by {
}

.button {
  display: block;
  margin: 0.5rem auto;
  color: white;
  border: none;

  &.status {
    width: 20%;
    margin-left: 0;
    background: #20a310;
  }
  &.borrow {
    background: white;
    border: #0f95ce 1px solid;
    border-radius: 5px;
    box-shadow: 10px 5px 5px rgba(10, 10, 10, 0.1),
      0 0 0 1px rgba(10, 10, 10, 0.1);
    color: #0f95ce;
    font-weight: bold;
    height: 2.5rem;
    font-size: 1.2rem;
    margin: 1rem 9rem 1rem 0;
    &:hover {
      color: white;
      background: #0f95ce;
      transition: all 0.1s ease 0s;
    }
  }
}

.borrowing-info {
  > h4 {
    font-weight: bold;
    padding-bottom: 0.2rem;
    border-bottom: 2px white solid;
  }
}

.borrowing-user {
  width: 20%;
  margin: 1rem 8rem 1rem 0;
  text-decoration: none;
  background: white;
  border-radius: 2px;
  font-size: 1.2rem;
}
</style>
