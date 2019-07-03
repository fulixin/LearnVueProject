<!--
    1、v-slot标记的标签，在slot标签里显示
    2、v-slot:name中的name和slot标签中的name对应，做唯一关联
    3、
-->
<template>
  <div>
    <slot name="header" :context="header"/>
    <slot name="xy" v-bind:mxy="user"/>
    <div>{{user.name}}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      header: '子组件数据',
      user: {
        name: 'ddd',
        age: '23'
      }
    }
  },
  methods: {
    mxy() {
      const x = 1
      const y = 2
      return { x: x, y: y }
    }
  }
}
</script>
<style>
</style>
