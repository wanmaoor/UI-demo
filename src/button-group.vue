<template>
  <div class="g-button-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  mounted(){//mouted是当此组件在页面中出现时执行的函数
    console.log(this.$children)
  }
}
</script>
<style lang="scss">
  .g-button-group{
    display: inline-flex;
    vertical-align: middle;
    > .g-button{
      border-radius: 0;
      &:not(:first-child){
        margin-left: -1px;  
      }
      &:first-child{
        border-top-left-radius: var(--border-radius);
        border-bottom-left-radius: var(--border-radius);
      }
      &:last-child{
        border-top-right-radius: var(--border-radius);
        border-bottom-right-radius: var(--border-radius);
      }
    }
  }
</style>
