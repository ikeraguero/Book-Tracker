<template>
    <div>
        <h2>Login</h2>
        <form v-on:submit="login">
            <input type="email" name="email" /><br>
            <input type="password" name="password" /><br>
            <input type="submit" value="login" />
        </form>
    </div>
</template>

<script>
    import router from "../router"
    import axios from "axios"

    export default {
        name: "Login",
        methods: {
            login: (e) => {
                e.preventDefault()
                let email = "user@email.com"
                let password = "password"
                let login = () => {
                    let data = {
                        email: email,
                        password: password
                    }
                    axios.post("api/login", data)
                        .then((responde) => {
                        console.log("Logged in")
                        router.push("/home")
                    })
                    .catch((errors) => {
                        console.log("Cannot login")
                    })
                }
                login()
            }
        }
    }
</script>

<style>

</style>