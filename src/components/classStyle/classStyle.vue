<!--
类样式的动态绑定
-->
<template>
  <div>
    <div :class="{classStyle:true}">绑定了样式</div>
    <div :class="classStyles">样式测试</div>
    <div @click="isRed=!isRed">改变样式</div>
    <div :class="[{classRed: !isRed},{classGreen:isRed}]">选择样式</div>
    <div :style="{color:colorRed}">属性样式</div>
    <div @click="changeColor">改变属性样式颜色</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isRed: true,
      colorRed: 'red'
    }
  },
  computed: {
    classStyles() {
      return { classRed: this.isRed, classGreen: !this.isRed }
    }
  },
  methods: {
    changeColor() {
      if (this.isRed) {
        this.colorRed = 'green'
      } else {
        this.colorRed = 'blue'
      }
    }
  }
}
</script>
<style>
.classStyle {
  color: red;
  padding: 5%;
}
.classRed {
  background: red;
}
.classGreen {
  background: green;
  color: rgb(54, 21, 243);
}
</style>
