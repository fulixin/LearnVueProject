<!---
动态组件
同步组件和异步组件
--->
<template>
  <div>
    组件
    <component v-bind:is="component"></component>
    <component v-bind:is="componentFile"></component>
  </div>
</template>
<script>
import component1 from './component1'
export default {
  components: {
    component1
  },
  data() {
    const componentFile = this.render
    return {
      component: component1,
      componentFile: componentFile
    }
  },
  methods: {
    changeComponent() {
      this.component = component1
    },
    render() {
      this.componentFile = resolve => ({
        component: import('./component2'),
        loading: {
          template:
            '<div style="height: 100%; width: 100%; display: table;"><div style="display: table-cell; vertical-align: middle; text-align: center;"><div>加载中</div></div></div>'
        },
        error: {
          template:
            '<div style="height: 100%; width: 100%; display: table;"><div style="display: table-cell; vertical-align: middle; text-align: center;"><div>加载错误</div></div></div>'
        },
        delay: 20000,
        timeout: 10000
      })
    }
  },
  watch: {
    file() {
      this.render()
    }
  }
}
</script>
<style>
</style>
