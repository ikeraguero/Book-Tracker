<template>
  <div class="home">
      <div class="user">
          Logged as 
      </div>
    <div class="currently">
      Currently Reading:
      <BookCards />
    </div>
    <div class="list">
      My List:
    </div>
    <div class="finished">
      Finished:
    </div>
    <div class="favorites">
      Favorites:
    </div>
  </div>
</template>

<script>
import BookCards from '@/components/BookCards.vue'

export default {
  components: {
    BookCards
  }
}
</script>

<style>
.currently, .list, .finished, .favorites, .user {
  text-align: left;
  margin-left: 20px;
  padding: 20px;
}

.finished, .favorites {
  margin-top: 300px;
}

.user {
  margin-bottom: 10px;
}


</style>
