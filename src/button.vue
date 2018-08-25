<template>
   <button @click="$emit('click')" class="g-button" :class="{[`icon-${iconPosition}`]: true}"><!-- 根据iconPosition传进来的值就是它的类 -->
    <g-icon class="icon" v-if="icon && !loading" :name="icon"></g-icon>
    <g-icon class="loading icon" v-if="loading" name="loading"></g-icon>
    <div class="content">
      <slot></slot><!-- 插槽 slot不能加属性-->
    </div> 
   </button>
</template>
<script>
  export default {
    // props: ['icon', 'iconPosition']
    props: {
      icon: {},
      loading: {
        type: Boolean,
        default: false
      },
      iconPosition: {
        type: String,
        default: 'left',//如果用户没有设置icon属性,则默认为left
        validator(value){//属性检查器
          return value !== 'left' && value !== 'right' ? false : true
        }
      }
    }
  }
</script>
<style lang="scss">
  @keyframes spin {
    from {
      transform: rotate(0deg)
    }
    to {
      transform: rotate(360deg)
    }
  }
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
      margin-right: .1em;
    }
    > .content{
      order: 2;
    }
    &.icon-right{
      > .icon{
        order: 2;
        margin-left: .1em;
        margin-right: 0;
      }
      > .content{
        order: 1;
      }
    }
    .loading{
      animation: spin 2s infinite linear
    }
  }
    
    
</style>
