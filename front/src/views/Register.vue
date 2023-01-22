<template>
    <div>
        <h2 class="font-bold text-2xl">Register</h2>
        <br>
        <input type="email" name="email" placeholder="email" v-model="email">
        <br>
        <input type="password" name="password" placeholder="password" class="mt-1" v-model="password">
        <br>
        <button @click="register">Register</button>
    </div>
</template>

<script>
import authenticationservice from '@/../services/authenticationservice.js'

export default {
    data () {
        return {
        email: '',
        password: '',
        }
    },
    methods: {
        async register () {
            const response = await authenticationservice.register({
                email: this.email,
                password: this.password
            })
            console.log(response.data);
        }
    }
}
</script>