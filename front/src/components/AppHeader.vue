<template>
    <nav>
            <router-link to="/" class="logo"> Book Tracker
            </router-link>
        <ul class="links">
            <li><router-link to="/addbook">Add Book</router-link></li>
            <li><router-link to="/addcategory">Add Category</router-link></li>
            <li><router-link to="/books">Books</router-link></li>
            <li><router-link to="/profile">Profile</router-link></li>
        </ul>
    </nav>
</template>
<script>
</script>
<style scoped>

#app {
    margin: 0px;
}
.logo {
    text-transform: uppercase;
    letter-spacing: 4px;
    font-size: 20px;
    color: aliceblue;
}
li {
    list-style: none;
}
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300&family=Open+Sans:wght@500&display=swap');
nav {
  display: inline-flex;
  background-color: darkcyan;
  color: white;
  font-size: 20px;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin: auto;
  height: 55px;
}

.links {
    display: flex;
    width: 47%;
    letter-spacing: 3px;
    justify-content: space-around;
}

.links a {
    color: white;
    font-family: 'Open Sans', sans-serif;
    text-decoration: none;
    font-weight: bold;
    font-size: 19px;
}
</style>
