<template>
   <button class="g-button">按钮</button>
</template>
<script>
  export default {}
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
      &:hover{
      border-color: var(--border-color-hover);
    }
    &:active{
      border-color: var(--button-active-bg);
    }
    &:focus{ //&表示当前选择器, 在这里就是g-button
      outline: none;
    }
    }
    
    
</style>
