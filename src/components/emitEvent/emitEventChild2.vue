<template>
  <div style="color:red">
    {{title}}
    <p v-on:click="changeHome">点击更改父页面内容</p>
  </div>
</template>
<script>
export default {
  props: {
    title: ''
  },
  methods: {
    changeHome() {
      this.$emit('update:title', '这是子页面传过来的数据')
    }
  }
}
</script>
<style>
</style>
