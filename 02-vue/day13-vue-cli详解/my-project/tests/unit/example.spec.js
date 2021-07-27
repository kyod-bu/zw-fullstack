import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    // 挂载一下
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })
    // 加载html中有没有已经挂载的文字
    expect(wrapper.text()).to.include(msg)
  })
})
