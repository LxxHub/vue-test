import { mount } from '@vue/test-utils'
import { findTestWrapper } from '../../../../utils/testUtils'
import TodoList from '../../TodoList'
import store from '../../../../store/index'
import axios from '../../__mocks__/axios'

beforeEach(() => {
  axios.success = true
  jest.useFakeTimers()
})

it(`
 1.用户会在header输入框输入内容
 2.用户会点击回车按钮
 3.列表项应该增加用户输入内容的列表项 
`, () => {
  const wrapper = mount(TodoList, { store })
  const inputElem = findTestWrapper(wrapper, 'header-input').at(0)
  const content = 'Dell Lee'
  inputElem.setValue(content)
  inputElem.trigger('keyup.enter')
  const listItems = findTestWrapper(wrapper, 'list-item')
  // expect(listItems.length).toBe(1)
  // expect(listItems.at(0).text()).toContain(content)
})

it(`
 1.用户进入页面时，请求远程数据
 2.列表应该展示远程返回的数据
`, (done) => {
  const wrapper = mount(TodoList, { store })

  expect(setTimeout).toHaveBeenCalledTimes(1)

  jest.runAllTimers()

  wrapper.vm.$nextTick(() => {
    const listItems = findTestWrapper(wrapper, 'list-item')
    // expect(listItems.length).toBe(2)
    done()
  })
})

it(`
 1.用户进入页面时，请求远程数据失败
 2.列表应该展示空数据，不应该挂掉
`, (done) => {
  axios.success = false
  const wrapper = mount(TodoList, { store })

  expect(setTimeout).toHaveBeenCalledTimes(1)

  jest.runAllTimers()

  wrapper.vm.$nextTick(() => {
    const listItems = findTestWrapper(wrapper, 'list-item')
    expect(listItems.length).toBe(0)
    done()
  })
})


