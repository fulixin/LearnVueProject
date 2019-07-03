<template>
  <div>
    <div>v-slot学习</div>
    <child>
      <template v-slot:header="slot">{{slot.context+msg}}</template>
      <template v-slot:xy="mxy"><br/>{{mxy.mxy}}{{mxy.mxy.name}}{{mxy.mxy.age}}</template>
    </child>
  </div>
</template>
<script>
import child from './vSlot-child'
export default {
  components: {
    child
  },
  data() {
    return {
      msg: '根组件'
    }
  }
}
</script>
<style>
</style>
