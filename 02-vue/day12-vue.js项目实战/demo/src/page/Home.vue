<template>
    <div id="home">
        <!-- 1. header -->
        <my-header @showModal="showModal"></my-header>
        <!-- 2. slider -->
        <slider @changeContent="changeContent"></slider>
        <!-- 3. news -->
        <router-view :newsType="newsType"></router-view>
        <!-- 4. modal -->
        <modal v-if="showMessage" @closeModal="closeModal"></modal>
        <!-- <van-button type="default">默认按钮</van-button> -->
    </div>
</template>

<script>
import { Button } from 'vant'
import myHeader from '../components/Header'
import Slider from '../components/Slider'
import Modal from '../components/Modal'

export default {
  name: 'Home',
  data () {
    return {
      newsType: 0,
      showMessage: false
    }
  },
  components: {
    myHeader,
    Slider,
    Modal,
    Button
  },
  methods: {
    changeContent (content) {
      console.log('content::', content)
      console.log('content.title::', content.title)
      this.newsType = content.id
    },
    showModal () {
      this.showMessage = true
    },
    closeModal () {
      this.showMessage = false
    }
  }
}
</script>

<style>
#home {
  height: 100%;
  width: 100%;
}
</style>
