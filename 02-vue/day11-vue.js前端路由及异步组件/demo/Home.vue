<template>
    <div class="app" id="app">
        {{ message }}
    </div>
</template>

<script>
export default {
    name: 'app',
    data: function() {
        return {
            message: 'Hello Home.vue'
        }
    },
    computed: {
        username() {
            return this.$route.params.username
        }
    },
    methods: {
        goBack() {
            window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
        }
    }
}
</script>

<style>
.app {
    width: 100%;
    height: 100%;
    background-color: greenyellow;
}
</style>
