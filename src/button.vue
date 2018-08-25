<template>
   <button class="g-button" :class="{[`icon-${iconPosition}`]: true}"><!-- 根据iconPosition传进来的值就是它的类 -->
    <svg v-if="icon" class="icon"><use :xlink:href="`#i-${icon}`"></use></svg>
    <div class="content">
      <slot></slot><!-- 插槽 slot不能加属性-->
    </div> 
   </button>
</template>
<script>
  export default {
    props: ['icon', 'iconPosition']
  }
</script>
<style lang="scss">
    .g-button{
      height: var(--button-height);
      font-size: var(--font-size);
      padding: 0 1em;
      font: inherit;
      border-radius: var(--border-radius);
      border: 1px solid var(--border-color);
      background: var(--button-bg);
      vertical-align: middle;//没有这行代码,三个按钮高低不平
      display: inline-flex;
      justify-content: center;
      align-items: center;
    &:hover{
      border-color: var(--border-color-hover);
    }
    &:active{
      border-color: var(--button-active-bg);
    }
    &:focus{ //&表示当前选择器, 在这里就是g-button
      outline: none;
    }
    > .icon{
      order: 1;
      margin-right: .3em;
    }
    > .content{
      order: 2;
    }
    &.icon-right{
      > .icon{
        order: 2;
        margin-left: .3em;
        margin-right: 0;
      }
      > .content{
        order: 1;
      }
    }
  }
    
    
</style>
