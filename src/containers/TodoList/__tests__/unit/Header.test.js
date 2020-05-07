import { shallowMount } from '@vue/test-utils'
import Header from '../../components/Header.vue'
import { findTestWrapper } from '../../../../utils/testUtils'

describe('Header组件测试', () => {
  it('样式发生改变，做提示', () => {
    const wrapper = shallowMount(Header)
    expect(wrapper).toMatchSnapshot()
    // const input = wrapper.find('[data-test="input"]')
    // expect(input.exists()).toBe(true)
  })

  it('input 框初始内容为空', () => {
    const wrapper = shallowMount(Header)
    const inputValue = wrapper.vm.inputValue
    expect(inputValue).toBe('')
  })

  it('input 框发生变化，数据应该跟着改变', () => {
    const wrapper = shallowMount(Header)
    const input = findTestWrapper(wrapper, 'header-input')
    input.setValue('dell lee')
    const inputValue = wrapper.vm.inputValue
    expect(inputValue).toBe('dell lee')
  })

  it('input 框回车，无内容时无反应', () => {
    const wrapper = shallowMount(Header)
    const input = findTestWrapper(wrapper, 'header-input')
    input.setValue('')
    input.trigger('keyup.enter')
    expect(wrapper.emitted().add).toBeFalsy()
  })

  it('input 框回车，有内容时向外触发事件,同时清空 inputValue', () => {
    const wrapper = shallowMount(Header)
    const input = findTestWrapper(wrapper, 'header-input'
    )
    input.setValue('dell lee')
    input.trigger('keyup.enter')
    expect(wrapper.emitted().add).toBeTruthy()
    expect(wrapper.vm.inputValue).toBe('')
  })

})
