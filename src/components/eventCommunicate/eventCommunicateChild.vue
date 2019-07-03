<template>
  <div style="color:red">
    <div>{{data1}}</div>
    <childchild v-bind="$attrs" v-on="$listeners"></childchild>
    <p v-on:click="back">向首层传数据</p>
  </div>
</template>
<script>
import childchild from './eventCommunicateChildChild'
export default {
  inheritAttrs: false,
  components: { childchild },
  props: {
    data1: ''
  },
  methods: {
    back() {
      this.$emit('back1', '这是第一层返回的数据')
    }
  }
}
</script>
