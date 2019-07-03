<!----
计算属性和监听器

computed里定义的为计算属性
watch里定义的为监听器
--->
<template>
  <div>
    <label>问题：</label>
    <input v-model="question">
    <div>{{remQuestion}}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      question: '',
      answer: ''
    }
  },
  computed: {
    remQuestion() {
      // eslint-disable-next-line
      this.answer = this.question
        .split('')
        .reverse()
        .join('')
      return this.answer
    }
  },
  watch: {
    answer() {
      console.log('得到答案了')
    }
  }
}
</script>
<style>
</style>
