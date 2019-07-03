1、v-cloak、v-text学习
    作用：v-cloak解决插值表达式闪烁问题
        v-text内容没加载回来就不会显示
    用法：表达式直接写在标签里  
    例：<p v-cloak>{{msg}}</p>
        定义样式：[v-cloak]:{dis}
        <p v-text='msg'/>
    备注：v-cloak可以显示其他内容
        v-text统一显示