<template>
    <div class="item video" v-on:click="skip">
        <h3>{{title}}</h3>
        <img v-bind:src="avatar" />
    </div>
</template>

<script>
/**
 * @file feed流多图item
 * @author kyod
 */
import BaseOptions from './base.js';

export default {
    props: ['title', 'avatar'],
    methods: {
        skip(e) {
            this.$router.push({
                path: '/page/detail/kyod/video'
            });
        }
    }
}
</script>

<style scoped>
@import "./index.css";

.video {
    position: relative;
    padding: 0;
    margin: 16px 15px;
}

h3 {
    position: absolute;
    top: 0;
    color: #fff;
    margin: 5px 10px;
    font-size: 14px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}
img {
    border: none;
    display: block;
    width: 100%;
    pointer-events: none;
}
</style>
