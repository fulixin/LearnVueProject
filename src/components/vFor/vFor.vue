<!--
v-for
--->
<template>
  <div>
    <ul>
      <li v-for="(item,index) in listfilter" :key="index" @click="changeItem(item)">{{item}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        { id: 1, name: 'tom', age: '21' },
        { id: 2, name: 'jack', age: '23' },
        { id: 3, name: 'las', age: '19' }
      ]
    }
  },
  computed: {
    // eslint-disable-next-line
    listfilter() {
      return this.list.filter(item => {
        // eslint-disable-next-line
        if (item.id == 1) {
          item.name = '效力'
        }
        return item
      })
    }
  },
  methods: {
    changeItem(item) {
      item.name = '小李'
    }
  }
}
</script>
<style>
</style>
