<template>
  <div>
    <p v-on:click="changeHome">点击更改父页面内容</p>
  </div>
</template>
<script>
export default {
  methods: {
    changeHome() {
      this.$emit('backclick', '这是子页面传过来的数据')
    }
  }
}
</script>
<style>
</style>
