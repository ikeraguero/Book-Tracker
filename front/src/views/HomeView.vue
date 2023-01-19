<template>
  <div class="home">
      <div class="user">
          Logged as {{ user.name }}
      </div>
    <div class="currently">
      Currently Reading:
    </div>
    <div class="list">
      My List:
    </div>
    <div class="finished">
      Finished
    </div>
    <div class="favorites">
      Favorites:
    </div>
  </div>
</template>

<script>
  import axios from "axios"
  import router from "../router"

  export default {
    name: "Login",
    data() {
      return {
        user: {
          name: "Jesse"
        }
      }
    },
    methods: {
      getUserData: function() {
        let self = this
        axios.get("api/user")
        .then((response) => {
          console.log(response)
          self.$set(this, "user", response.data.user)
        })
        .catch((errors) => {
          console.log(errors)
          router.push("/")
        })
      }
    },
    mounted() {
      this.getUserData()
    }
  }
</script>

<style>
.currently, .list, .finished, .favorites, .user {
  text-align: left;
  margin-left: 20px;
  padding: 20px;
}

.list, .finished, .favorites {
  margin-top: 300px;
}

.user {
  margin-bottom: 10px;
}

</style>
