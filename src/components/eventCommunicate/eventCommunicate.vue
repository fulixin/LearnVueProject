<!---
通过$attre和$listeners进行数据传递
A,B,C三层嵌套，可以实现A与C数据交互
--->
<template>
  <div>
    <child :data1="data1" :data2="data2" v-on:back1="back1" v-on:back2="back2"></child>
    <p v-on:click="change1">改变第一层数据</p>
    <p v-on:click="change2">改变第二层数据</p>
  </div>
</template>
<script>
import child from './eventCommunicateChild'
export default {
  components: { child },
  data() {
    return {
      data1: '第一层数据',
      data2: '第二层数据'
    }
  },
  methods: {
    change1() {
      this.data1 = '第一层数据被改变了'
    },
    change2() {
      this.data2 = '第二层数据被改变了'
    },
    back1(msg) {
      console.log('第一层传回的数据' + msg)
    },
    back2(msg) {
      console.log('第二层传回的数据' + msg)
    }
  }
}
</script>
<style>
</style>
