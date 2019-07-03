import Vue from 'vue'
import Router from 'vue-router'

// 组件
import Main from '../components/Main.vue'
// v-slot插槽
import VSlot from '../components/vSlot/vSlot'
// 同步组件、异步组件
import AsyncComponent from '../components/asyncComponent/asyncComponent'
// 自定义事件
import EmitEvent from '../components/emitEvent/emitEvent'
// 自定义model
import VModel from '../components/vModel/vModel'
// 数据跨层传递
import EventCommunicate from '../components/eventCommunicate/eventCommunicate'
// 计算属性和监听器
import ComputationAttribute from '../components/computationAttribute/computationAttribute'
// 动态绑定样式l
import ClassStyle from '../components/classStyle/classStyle'
// 条件渲染
import Vif from '../components/vIf/vIf'
// 列表渲染
import Vfor from '../components/vFor/vFor'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/main',
      name: 'main',
      component: Main
    },
    {
      path: '/vSlot',
      name: 'vSlot',
      component: VSlot
    },
    {
      path: '/asyncComponent',
      name: 'asyncComponent',
      component: AsyncComponent
    },
    {
      path: '/emitEvent',
      name: 'emitEvent',
      component: EmitEvent
    },
    {
      path: '/vModel',
      name: 'vModel',
      component: VModel
    },
    {
      path: '/eventCommunicate',
      name: 'eventCommunicate',
      component: EventCommunicate
    },
    {
      path: '/computationAttribute',
      name: 'computationAttribute',
      component: ComputationAttribute
    },
    {
      path: '/classStyle',
      name: 'classStyle',
      component: ClassStyle
    },
    {
      path: '/vif',
      name: 'vif',
      component: Vif
    },
    {
      path: '/vfor',
      name: 'vfor',
      component: Vfor
    },
    {
      path: '/',
      redirect: {
        name: 'main'
      }
    }
  ]
})
