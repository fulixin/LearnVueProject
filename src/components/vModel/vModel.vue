<!---
v-model重定义
-->
<template>
  <div>
    <child v-model="flag" v-on:change="change"></child>
    <p v-on:click="changeFlag">改变input状态</p>
  </div>
</template>
<script>
import child from './vModelChild'
export default {
  components: {
    child
  },
  data() {
    return {
      flag: true
    }
  },
  methods: {
    change(p) {
      console.log('0' + p)
      console.log('1' + this.flag)
      this.flag = p
      console.log('2' + this.flag)
    },
    changeFlag() {
      console.log('3' + this.flag)
      this.flag = !this.flag
      console.log('4' + this.flag)
    }
  }
}
</script>
<style>
</style>
