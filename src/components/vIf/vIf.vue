<!---
v-if
v-else
v-show
v-for
-->
<template>
  <div>
    <div v-if="isIf">这是if状态里显示的内容</div>
    <div v-else>这是else状态里显示的内容</div>
    <div @click="isIf=!isIf">改变isIf状态</div>
    <div v-show="isShow">这是v-show里显示的内容</div>
    <div @click="isShow=!isShow">改变isShow状态</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isIf: true,
      isShow: true
    }
  }
}
</script>
<style>
</style>
