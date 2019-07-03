<!--
自定义事件
-->
<template>
  <div>
    <child v-on:backclick="backClick"></child>
    {{data}}
    <child2 :title.sync="title"></child2>
  </div>
</template>
<script>
import child from './emitEventChild'
import child2 from './emitEventChild2'
export default {
  components: {
    child,
    child2
  },
  data() {
    return {
      data: '这是父页面数据',
      title: '数据'
    }
  },
  methods: {
    backClick(data) {
      this.data = data
    }
  }
}
</script>
<style>
</style>
