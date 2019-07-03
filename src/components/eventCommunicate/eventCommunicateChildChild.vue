<template>
  <div style="color:green">
    <div>{{data2}}</div>
    <p v-on:click="back">向首层传数据</p>
  </div>
</template>
<script>
export default {
  inheritAttrs: false,
  props: {
    data2: ''
  },
  methods: {
    back() {
      this.$emit('back2', '这是第二层返回的数据')
    }
  }
}
</script>
