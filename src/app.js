import Vue from 'vue'; 
import Button from './button';
import Icon from './icon.vue';
import ButtonGroup from './button-group.vue';
Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: true,
    loading3: false
  }
})

import chai from 'chai';
import spies from 'chai-spies'; 
chai.use(spies)
const expect = chai.expect
//单元测试

{//通过JS动态生成一个按钮
 //用例测试1-xhref 
  const Constructor = Vue.extend(Button)
  const button = new Constructor({
    propsData: {
      icon: "settings"
    }
  })
  button.$mount('#test')
  let useElement = button.$el.querySelector('use')
  let href = useElement.getAttribute('xlink:href')
  expect(href).to.eq('#i-settings')
  //断言后清除测试代码
  button.$el.remove()
  button.$destroy()
}
//用例测试2
{
  const Constructor = Vue.extend(Button)
  const button = new Constructor({
    propsData: {
      icon: "settings",
      loading: true
    }
  })
  button.$mount()
  let useElement = button.$el.querySelector('use')
  let href = useElement.getAttribute('xlink:href')
  expect(href).to.eq('#i-loading')
  button.$el.remove()
  button.$destroy()
}
{
  //用例测试3
  const div = document.createElement('div')
  document.body.appendChild(div)
  const Constructor = Vue.extend(Button)
  const button = new Constructor({
    propsData: {
      icon: "settings"
    }
  })
  button.$mount(div)
  let svg = button.$el.querySelector('svg')
  let {order} = window.getComputedStyle(svg)
  expect(order).to.eq('1')//css属性值都是字符串, 所以这里是'1'
  button.$el.remove()
  button.$destroy()
}

{
  //用例测试4
  const Constructor = Vue.extend(Button)
  const gButton = new Constructor({
    propsData: {
      icon: "settings"
    }
  })
  gButton.$mount()
  gButton.$on('click', function () {
    console.log(1)
  })
  let button = gButton.$el
  button.click()
  gButton.$el.remove()
  gButton.$destroy()
}
{
  //mock
  //chai.spy监听回调函数
  const Constructor = Vue.extend(Button)
  const gButton = new Constructor({
    propsData: {
      icon: "settings"
    }
  })
  gButton.$mount()
  let spy = chai.spy(function(){})
  gButton.$on('click', spy)
  let button = gButton.$el
  button.click()
  expect(spy).to.have.been.called()
}