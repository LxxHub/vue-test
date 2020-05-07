<template>
  <div class="header">
    <div class="header-content">
      TodoList
      <input
        class="header-inputs"
        data-test="header-input"
        v-model="inputValue"
        @keyup.enter="addTodoItem"
        placeholder="TodoItem"
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'Header',
  props: {},
  computed: {
    ...mapState({
      inputValueX: state => state.inputValueX
    })
  },
  data () {
    return {
      inputValue: ''
    }
  },
  methods: {
    ...mapMutations({
      changeInputValueX: 'changeInputValueX'
    }),
    addTodoItem () {
      if (this.inputValue) {
        this.$emit('add', this.inputValue)
        this.inputValue = ''
       // this.changeInputValueX('')
      }
    }
  }
}
</script>

<style scoped lang="stylus">
.header {
  line-height: 60px;
  background: #333;

  .header-content {
    width: 600px;
    margin: 0 auto;
    color: #fff;
    font-size: 24px;

    .header-inputs {
      float: right;
      width: 360px;
      margin-top: 16px;
      line-height: 24px;
      outline: none;
      color: #333;
    }
  }
}
</style>
